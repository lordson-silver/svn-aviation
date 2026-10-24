import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    // Support API Key or Bearer Token if present in environment variables
    if (process.env.LEADS_API_KEY) {
      headers["x-api-key"] = process.env.LEADS_API_KEY;
      headers["Authorization"] = `Bearer ${process.env.LEADS_API_KEY}`;
    }

    // CRM_LEADS_API_URL should point at the running email-crm-saas instance.
    // A hardcoded port here has already broken twice — dev servers claim
    // whatever port is free on startup, so the CRM lands on a different
    // port any time restart order changes. Set CRM_LEADS_API_URL in
    // .env.local once and this stops silently pointing at the wrong app.
    const targetUrl = process.env.CRM_LEADS_API_URL || "http://localhost:3001/api/v1/leads";
    const apiResponse = await fetch(targetUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        email,
        source: source || "Exit Intent Popup",
      }),
    });

    // 204 No Content or 2xx OK success
    if (apiResponse.status === 204 || apiResponse.ok) {
      let data = null;
      if (apiResponse.status !== 204) {
        try {
          data = await apiResponse.json();
        } catch {
          // ignore non-JSON body
        }
      }

      return NextResponse.json({
        success: true,
        message: "Lead submitted successfully",
        data,
      });
    }

    // Parse error output cleanly
    let errorMessage = "Target API returned an error";
    try {
      const errorJson = await apiResponse.json();
      errorMessage = errorJson?.message || errorJson?.error || JSON.stringify(errorJson);
    } catch {
      const rawText = await apiResponse.text().catch(() => "");
      if (rawText) errorMessage = rawText;
    }

    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: apiResponse.status || 401 }
    );
  } catch (error: any) {
    console.error("Error in /api/lead proxy route:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

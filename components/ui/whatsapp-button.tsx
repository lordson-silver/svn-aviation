'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '2348060740721'; // Update with actual SVN Aviation WhatsApp number
const DEFAULT_MESSAGE = 'Hello SVN Aviation, I\'d like to request a charter quote.';

export function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-8 z-[9999] group flex flex-col items-end"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
      
      {/* Button */}
      <div className="relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-black text-white text-xs font-bold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
        Chat with us on WhatsApp
        <div className="absolute top-full right-5 w-2 h-2 bg-black rotate-45 -translate-y-1" />
      </div>
    </a>
  );
}

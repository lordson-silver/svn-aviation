import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type LogoCloudProps = React.ComponentProps<"div"> & {
  className?: string;
};

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  const logos = [
    { name: "OAS Helicopters Nigeria Limited" },
    { name: "NESTAV Limited" },
    { name: "Aero Contractors Company of Nigeria Limited" },
    { name: "Caverton Helicopters Limited" },
    { name: "Bristow Helicopters Nigeria Limited" },
  ];

  return (
    <div
      {...props}
      className={cn(
        "py-10 bg-black w-full overflow-hidden",
        className
      )}
    >
      {/* <div className="w-full"> */}
      <div className="w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <InfiniteSlider gap={100} duration={60} durationOnHover={30}>
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-xl md:text-2xl font-black tracking-widest text-white/50 uppercase whitespace-nowrap hover:text-white transition-colors duration-300">
                {logo.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}

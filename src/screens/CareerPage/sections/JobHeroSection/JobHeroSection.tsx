import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const JobHeroSection = (): JSX.Element => {
  return (
    <section className="items-start p-20 flex flex-col gap-2.5 relative self-stretch w-full flex-[0_0_auto] -mt-1 bg-white">
      <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
          <Badge className="inline-flex items-center justify-center gap-2.5 px-[18px] py-1.5 relative flex-[0_0_auto] bg-[#c5f34b] rounded-[80px] hover:bg-[#c5f34b] border-none">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#232825] text-sm text-center tracking-[0] leading-[normal]">
              We are Hiring
            </span>
          </Badge>

          <h1 className="relative flex items-center justify-center w-fit [text-shadow:0px_2px_4px_#de2a4a0d] [font-family:'Manrope',Helvetica] font-semibold text-[#232825] text-[54px] text-center tracking-[-0.90px] leading-[60px] whitespace-nowrap">
            Join our dynamic team!
          </h1>
        </div>

        <p className="relative flex items-center justify-center w-[640px] [font-family:'Manrope',Helvetica] font-normal text-[#444a46] text-[22px] text-center tracking-[-0.30px] leading-[normal]">
          Work with passionate innovators, grow your skills, and make an impact
          where it truly matters.
        </p>
      </div>
    </section>
  );
};

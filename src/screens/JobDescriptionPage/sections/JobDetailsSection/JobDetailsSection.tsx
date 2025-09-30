import React from "react";
import { Separator } from "../../../../components/ui/separator";

const quickLinksData = [{ label: "Home" }, { label: "Legal" }];

const servicesData = [
  { label: "Marketing Services" },
  { label: "AI Marketing Automation" },
  { label: "AI Video Generation" },
];

const officesData = [
  {
    title: "US Office",
    address: "1710 Keller Parkway, #9876, Keller, Tx76248 ,United States,",
    phone: "+1 (737) 208-1549",
  },
  {
    title: "Indian Office",
    address: "A-Block, AKR Tech Park,",
    location: "Bengaluru, Karnataka 560068, India",
  },
];

export const JobDetailsSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-start gap-2.5 pt-[60px] pb-10 px-20 relative flex-[0_0_auto] -mt-1 bg-[#131313]">
      <div className="flex flex-col items-center justify-center gap-[100px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <img
                className="relative w-[203px] h-8 aspect-[6.33]"
                alt="Vector"
                src="https://c.animaapp.com/Z7UGDNl3/img/vector-1.svg"
              />

              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal]">
                  Progrowth Marketing Services Private Limited
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[158px] items-start gap-6 relative">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
              Quick links
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {quickLinksData.map((link, index) => (
                <div
                  key={index}
                  className="self-stretch mt-[-1.00px] font-normal text-lg relative [font-family:'Manrope',Helvetica] text-white tracking-[0] leading-[normal]"
                >
                  {link.label}
                </div>
              ))}
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
              Services
            </div>

            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="w-fit mt-[-1.00px] font-normal text-lg relative [font-family:'Manrope',Helvetica] text-white tracking-[0] leading-[normal]"
                >
                  {service.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-[300px] items-start gap-6 relative">
            <div className="w-fit mt-[-1.00px] font-medium text-2xl relative [font-family:'Manrope',Helvetica] text-white tracking-[0] leading-[normal]">
              Our Presence
            </div>

            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              {officesData.map((office, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[300px] items-start gap-2 relative flex-[0_0_auto]"
                >
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[normal]">
                    {office.title}
                  </div>

                  <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <img
                      className="relative w-5 h-5 aspect-[1]"
                      alt="Distance"
                      src="https://c.animaapp.com/Z7UGDNl3/img/distance-3@2x.png"
                    />

                    <div className="relative w-[272px] mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                      {office.address}
                      {office.location && (
                        <>
                          <br />
                          {office.location}
                        </>
                      )}
                      {office.phone && (
                        <>
                          <br />
                          {office.phone}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <img
                className="relative w-6 h-6"
                alt="Linkedin icon"
                src="https://c.animaapp.com/Z7UGDNl3/img/linkedin-icon-1.svg"
              />
            </div>
          </div>
        </div>

        <div className="relative w-[1222px] h-[57px]">
          <Separator className="absolute top-0 left-0 w-[1220px] h-px bg-white/20" />

          <div className="absolute top-8 left-[406px] [font-family:'Manrope',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
            Copyright © 2025 Progrowth | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

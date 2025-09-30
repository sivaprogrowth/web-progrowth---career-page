import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  {
    label: "Home",
    hasDropdown: false,
  },
  {
    label: "Services",
    hasDropdown: true,
  },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex w-full h-[78px] items-center justify-between px-[120px] py-6 relative bg-white border-b border-solid border-border">
      <img
        className="relative w-[182px] h-8 mt-[-1.00px] mb-[-1.00px] object-cover"
        alt="Progrowth Logo"
        src="https://c.animaapp.com/Z7UGDNl3/img/image-3-1@2x.png"
      />

      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-6">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.hasDropdown ? (
                <NavigationMenuTrigger className="inline-flex items-center gap-1.5 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent p-0 h-auto [font-family:'Manrope',Helvetica] font-normal text-[#444a46] text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">
                  {item.label}
                </NavigationMenuTrigger>
              ) : (
                <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#444a46] text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="inline-flex items-center gap-[30px] px-6 py-2.5 relative flex-[0_0_auto] mt-[-5.50px] mb-[-5.50px] bg-[#c5f34b] hover:bg-[#b8e642] rounded-[50px] overflow-hidden h-auto border-none">
        <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#232825] text-sm tracking-[0] leading-[20.8px] whitespace-nowrap">
                Contact us
              </div>
            </div>
          </div>
        </div>
      </Button>
    </header>
  );
};

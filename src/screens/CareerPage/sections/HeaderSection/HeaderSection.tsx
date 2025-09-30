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
    <header className="flex h-[78px] items-center justify-between px-[120px] py-6 w-full bg-white border-b border-border">
      <img
        className="w-[182px] h-8 object-cover"
        alt="Progrowth Logo"
        src="https://c.animaapp.com/Z7UGDNl3/img/image-3-1@2x.png"
      />

      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-6">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.hasDropdown ? (
                <NavigationMenuTrigger className="flex items-center gap-1.5 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent p-0 h-auto [font-family:'Manrope',Helvetica] font-normal text-[#444a46] text-base">
                  {item.label}
                </NavigationMenuTrigger>
              ) : (
                <div className="flex items-center gap-1.5">
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-[#444a46] text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="px-6 py-2.5 bg-[#c5f34b] hover:bg-[#b8e642] text-[#232825] rounded-[50px] h-auto [font-family:'Manrope',Helvetica] font-medium text-sm tracking-[0] leading-[20.8px]">
        Contact us
      </Button>
    </header>
  );
};

import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { JobHeroSection } from "./sections/JobHeroSection/JobHeroSection";
import { JobListingsSection } from "./sections/JobListingsSection/JobListingsSection";

export const CareerPage = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative"
      data-model-id="2578:489"
    >
      <HeaderSection />
      <JobHeroSection />
      <JobListingsSection />
      <FooterSection />
    </div>
  );
};

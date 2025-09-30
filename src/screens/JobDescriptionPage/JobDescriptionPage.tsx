import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { JobDetailsSection } from "./sections/JobDetailsSection/JobDetailsSection";

export const JobDescriptionPage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen" data-model-id="2582:288">
      <HeaderSection />
      <HeroSection />
      <JobDetailsSection />
    </div>
  );
};

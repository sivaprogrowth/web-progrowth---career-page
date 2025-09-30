import { ClockIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { ApplicationForm } from "../../../../components/ApplicationForm/ApplicationForm";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const jobListings = [
  {
    title: "Project Manager",
    description: "We are looking for project manager to join our team",
    location: "Hyderabad",
    schedule: "Full Time",
    hasLink: true,
    link: "/job-description-page",
  },
  {
    title: "Backend Developer",
    description: "We are looking for backend developer to join our team",
    location: "Hyderabad",
    schedule: "Full Time",
    hasLink: false,
    link: "",
  },
  {
    title: "AWS Engineer",
    description: "We are looking for AWS engineer to join our team",
    location: "Hyderabad",
    schedule: "Full Time",
    hasLink: false,
    link: "",
  },
];

export const JobListingsSection = (): JSX.Element => {
  return (
    <section className="items-center justify-center pt-5 pb-20 px-20 flex flex-col gap-2.5 w-full bg-white">
      <div className="flex flex-col max-w-[1200px] w-full items-start gap-6 bg-white">
        {jobListings.map((job, index) => (
          <Card
            key={index}
            className="flex flex-col items-start gap-6 p-6 w-full bg-white rounded-3xl border border-solid border-[#0000001a] shadow-[0px_4px_6px_-2px_#10182808]"
          >
            <CardContent className="flex flex-col items-start gap-8 w-full p-0">
              <div className="flex items-center justify-between w-full">
                <div className="inline-flex flex-col items-start gap-3">
                  <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-[#0f1728] text-2xl tracking-[0] leading-6 whitespace-nowrap">
                    {job.title}
                  </h3>
                  <p className="[font-family:'Manrope',Helvetica] font-normal text-[#69727c] text-lg tracking-[0] leading-6 whitespace-nowrap">
                    {job.description}
                  </p>
                </div>

                {job.hasLink ? (
                  <Button
                    asChild
                    variant="outline"
                    className="w-[180px] h-[60px] justify-center px-[26px] py-3 border border-solid border-[#b3b8bd] rounded-[50px] h-auto"
                  >
                    <Link to={job.link}>
                      <span className="[font-family:'Manrope',Helvetica] font-medium text-[#232825] text-lg tracking-[0] leading-[20.8px] whitespace-nowrap">
                        Apply
                      </span>
                    </Link>
                  </Button>
                ) : (
                  <ApplicationForm>
                    <Button
                      variant="outline"
                      className="w-[180px] h-[60px] justify-center px-[26px] py-3 border border-solid border-[#b3b8bd] rounded-[50px] h-auto"
                    >
                      <span className="[font-family:'Manrope',Helvetica] font-medium text-[#232825] text-lg tracking-[0] leading-[20.8px] whitespace-nowrap">
                        Apply
                      </span>
                    </Button>
                  </ApplicationForm>
                )}
              </div>

              <div className="inline-flex items-center gap-[29px]">
                <div className="inline-flex items-start gap-2">
                  <MapPinIcon className="w-5 h-5" />
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-[#261f19] text-base tracking-[0] leading-[normal]">
                    {job.location}
                  </span>
                </div>

                <div className="inline-flex items-start gap-2">
                  <ClockIcon className="w-5 h-5" />
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-[#261f19] text-base tracking-[0] leading-[normal]">
                    {job.schedule}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

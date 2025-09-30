import { ClockIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { ApplicationForm } from "../../../../components/ApplicationForm/ApplicationForm";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const jobSections = [
  {
    title: "About the Role",
    content:
      "We are looking for a skilled Project Manager to oversee the planning, implementation, and delivery of our SaaS product initiatives. The ideal candidate will have experience managing software development projects, strong communication skills, and the ability to collaborate across cross-functional teams to ensure timely and high-quality product releases.",
  },
  {
    title: "Key Responsibilities",
    content:
      "Lead end-to-end project management for SaaS product initiatives from planning to delivery.\nCreate and maintain detailed project plans, timelines, and status reports.\nManage scope, schedules, risks, and resources to ensure successful outcomes.\nCollaborate with product managers, engineering, design, and customer success teams.\nDrive regular sprint planning, stand-ups, and retrospectives in alignment with Agile practices.\nProactively identify project risks, dependencies, and roadblocks, and develop mitigation strategies.\nCommunicate project status and progress to stakeholders, executives, and clients.\nEnsure alignment between business goals, technical execution, and customer needs",
  },
  {
    title: "Qualifications",
    content:
      "Bachelor's degree in Computer Science, Business, or a related field (MBA is a plus).\n4+ years of project management experience, with at least 2 years managing SaaS product initiatives.\nStrong understanding of Agile and Scrum methodologies.\nExperience with project management tools such as Jira, Asana, or Trello.\nProven ability to manage multiple projects simultaneously in a fast-paced environment.\nExcellent problem-solving, organizational, and decision-making skills.\nStrong written and verbal communication abilities",
  },
  {
    title: "Preferred Skills",
    content:
      "Experience collaborating with distributed or remote teams.\nFamiliarity with software development lifecycle (SDLC) and DevOps processes.\nKnowledge of SaaS product metrics and subscription-based business models.\nAbility to translate business requirements into actionable technical tasks",
  },
  {
    title: "What We Offer",
    content:
      "Opportunity to work on an innovative SaaS platform with a growing customer base.\nDynamic and collaborative team culture.\nCareer growth and skill development opportunities.\nCompetitive compensation and benefits package",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-2 p-20 relative bg-white">
      <div className="flex items-start justify-center gap-20 relative self-stretch w-full flex-[0_0_auto]">
        <Card className="w-[340px] h-[330px] bg-white rounded-3xl border border-solid border-[#0000001a] shadow-[0px_4px_6px_-2px_#10182808]">
          <CardContent className="flex flex-col h-[281px] items-center justify-between p-6">
            <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#0f1728] text-2xl tracking-[0] leading-6 whitespace-nowrap">
                  Project Manager
                </h1>

                <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#69727c] text-lg tracking-[0] leading-6">
                  We are looking for project manager to join our team
                </p>
              </div>

              <div className="inline-flex items-center gap-[29px] relative flex-[0_0_auto]">
                <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                  <MapPinIcon className="relative w-5 h-5" />

                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#261f19] text-base tracking-[0] leading-[normal]">
                    Hyderabad
                  </span>
                </div>

                <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                  <ClockIcon className="relative w-5 h-5" />

                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#261f19] text-base tracking-[0] leading-[normal]">
                    Full Time
                  </span>
                </div>
              </div>
            </div>

            <ApplicationForm>
              <Button
                className="flex h-[60px] items-center justify-center gap-[30px] px-[26px] py-3 relative self-stretch w-full bg-[#c5f34b] rounded-[50px] overflow-hidden hover:bg-[#b8e642] text-[#232825] [font-family:'Manrope',Helvetica] font-medium text-lg tracking-[0] leading-[20.8px]"
                variant="ghost"
              >
                Apply
              </Button>
            </ApplicationForm>
          </CardContent>
        </Card>

        <div className="flex flex-col w-[800px] items-start gap-6 relative text-left">
          {jobSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
            >
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#232825] text-[22px] tracking-[-0.16px] leading-[normal] text-left">
                {section.title}
              </h2>

              <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#69727c] text-lg tracking-[-0.16px] leading-6 whitespace-pre-line text-left">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

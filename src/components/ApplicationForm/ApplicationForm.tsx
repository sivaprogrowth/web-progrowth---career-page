import { MinusIcon, PlusIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

interface ApplicationFormProps {
  children: React.ReactNode;
}

export const ApplicationForm = ({ children }: ApplicationFormProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [experience, setExperience] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      message: "",
    });
    setExperience(1);
  };

  const incrementExperience = () => {
    setExperience(prev => prev + 1);
  };

  const decrementExperience = () => {
    setExperience(prev => Math.max(0, prev - 1));
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-[#2a2a2a] border-none">
          <div className="flex h-full">
            {/* Left side - Thank you message */}
            <div className="flex-[2] bg-white rounded-l-lg p-8 flex flex-col justify-center items-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#c5f34b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#232825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-semibold text-[#232825] [font-family:'Manrope',Helvetica]">
                  Thank you for applying!
                </h2>
                <p className="text-lg text-[#69727c] [font-family:'Manrope',Helvetica] max-w-md">
                  We've received your application and will review it shortly. We'll be in touch soon!
                </p>
                <Button
                  onClick={handleClose}
                  className="mt-6 bg-[#c5f34b] hover:bg-[#b8e642] text-[#232825] px-8 py-3 rounded-full [font-family:'Manrope',Helvetica] font-medium"
                >
                  Close
                </Button>
              </div>
            </div>

            {/* Right side - Dark section */}
            <div className="flex-1 bg-[#2a2a2a] rounded-r-lg p-8 flex flex-col justify-start pt-12">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <XIcon className="w-6 h-6" />
              </button>
              <div className="text-white space-y-4">
                <h3 className="text-4xl font-bold [font-family:'Manrope',Helvetica]">
                  Apply for this role
                </h3>
                <p className="text-lg text-gray-300 [font-family:'Manrope',Helvetica]">
                  Questions or inquiries? We're here to assist! Contact our friendly team via the form. We're eager to hear from you!
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-[#2a2a2a] border-none">
        <div className="flex h-full">
          {/* Left side - Form */}
          <div className="flex-[2] bg-white rounded-l-lg p-8 overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#232825] [font-family:'Manrope',Helvetica]">
                    Name
                  </label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="h-12 [font-family:'Manrope',Helvetica]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#232825] [font-family:'Manrope',Helvetica]">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="example@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="h-12 [font-family:'Manrope',Helvetica]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#232825] [font-family:'Manrope',Helvetica]">
                    Previous company
                  </label>
                  <Input
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="h-12 [font-family:'Manrope',Helvetica]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#232825] [font-family:'Manrope',Helvetica]">
                    Experience <span className="text-gray-500">(in years)</span>
                  </label>
                  <div className="flex items-center space-x-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={decrementExperience}
                      className="h-12 w-12 rounded-full"
                    >
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span className="text-xl font-medium w-8 text-center [font-family:'Manrope',Helvetica]">
                      {experience}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={incrementExperience}
                      className="h-12 w-12 rounded-full"
                    >
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#232825] [font-family:'Manrope',Helvetica]">
                  Role
                </label>
                <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                  <SelectTrigger className="h-12 [font-family:'Manrope',Helvetica]">
                    <SelectValue placeholder="Select the job role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="project-manager">Project Manager</SelectItem>
                    <SelectItem value="backend-developer">Backend Developer</SelectItem>
                    <SelectItem value="aws-engineer">AWS Engineer</SelectItem>
                    <SelectItem value="frontend-developer">Frontend Developer</SelectItem>
                    <SelectItem value="ui-ux-designer">UI/UX Designer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#232825] [font-family:'Manrope',Helvetica]">
                  Tell us something about you
                </label>
                <Textarea
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="min-h-[120px] [font-family:'Manrope',Helvetica]"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#c5f34b] hover:bg-[#b8e642] text-[#232825] rounded-full text-lg font-medium [font-family:'Manrope',Helvetica]"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Right side - Dark section */}
          <div className="flex-1 bg-[#2a2a2a] rounded-r-lg p-8 flex flex-col justify-start pt-12">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <XIcon className="w-6 h-6" />
            </button>
            <div className="text-white space-y-4">
              <h3 className="text-4xl font-bold [font-family:'Manrope',Helvetica]">
                Apply for this role
              </h3>
              <p className="text-lg text-gray-300 [font-family:'Manrope',Helvetica]">
                Questions or inquiries? We're here to assist! Contact our friendly team via the form. We're eager to hear from you!
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

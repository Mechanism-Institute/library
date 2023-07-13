"use client";

import Typography from "@/components/ui/typography";
import ArrowLeft from "@/components/ui/arrow-left";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAtom } from "jotai";
import { supporterDialogAtom } from "@/state/supporter-atom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function SupporterDialog() {
  const [open, setOpen] = useAtom(supporterDialogAtom);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col gap-4 p-10 bg-white rounded-3xl">
        <Typography className="text-stone font-gotham leading-full text-[32px]">
          Get Involved
        </Typography>
        <form className="flex flex-col gap-4">
          <label aria-required>
            Name<span className="text-orange">*</span>
            <Input placeholder="Name" required className="border border-gray-400 bg-gray-50" />
          </label>
          <label aria-required>
            Email<span className="text-orange">*</span>
            <Input placeholder="Email" required className="border border-gray-400 bg-gray-50" />
          </label>
          <label>
            Twitter
            <Input placeholder="Twitter" className="border border-gray-400 bg-gray-50" />
          </label>
          <label aria-required>
            How would you like to get involved?<span className="text-orange">*</span>
            <select className="border border-gray-400 bg-gray-50 w-full py-4 px-6 leading-full rounded-2xl text-[16px] bg">
              <option id="select-one">Select One</option>
              <option id="expert">Working with an MI expert</option>
              <option id="partner-org">Partnering as an organization</option>
              <option id="researcher">Becoming an MI researcher</option>
              <option id="library">Contributing Ok sure tto the Library</option>
              <option id="join-team">Joining the MI team</option>
              <option id="events">Competitions & events</option>
              <option id="newsletter">Newsletter & reports</option>
            </select>
          </label>
          <div className="flex justify-end">
            <Button variant="primary" className="gap-1">
              Submit
              <ArrowLeft className="transform rotate-180" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

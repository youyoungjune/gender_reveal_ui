import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export const RSVPForm = () => {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <div className="flex justify-center">
        <RadioGroup className="grid grid-cols-3" defaultValue="yes">
          <div className="flex justify-center items-center space-x-2">
            <RadioGroupItem value="yes" id="r1" />
            <Label htmlFor="r1" className="text-[#954f36] font-bold">
              Yes
            </Label>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <RadioGroupItem value="virtual" id="r2" />
            <Label htmlFor="r2" className="text-[#954f36] font-bold">
              Yes, virtually
            </Label>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <RadioGroupItem value="no" id="r3" />
            <Label htmlFor="r3" className="text-[#954f36] font-bold">
              No
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button className="text-lg">RSVP</Button>
    </div>
  );
};

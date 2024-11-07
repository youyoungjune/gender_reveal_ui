"use client";

import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const RSVPForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <div className="p-4 space-y-4">
      <Input
        placeholder="First and Last Name"
        className="text-[#954f36] bg-[#fef6ed]"
      />
      <div className="relative">
        <Input
          placeholder="Password"
          type={visiblePassword ? "text" : "password"}
          className="text-[#954f36] bg-[#fef6ed]"
        />
        {visiblePassword ? (
          <EyeIcon
            className="absolute right-4 top-2 z-10 cursor-pointer text-[#954f36]"
            onClick={() => setVisiblePassword(false)}
          />
        ) : (
          <EyeClosedIcon
            className="absolute right-4 top-2 z-10 cursor-pointer text-[#954f36]"
            onClick={() => setVisiblePassword(true)}
          />
        )}
      </div>
      <Button className="w-full bg-[#bed0d8] hover:bg-[#bad5c6] text-[#fef6ed]">
        Enter
      </Button>
    </div>
  );
};

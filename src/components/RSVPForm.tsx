"use client";

import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const RSVPForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <div className="p-4 space-y-4">
      <Input placeholder="First and Last Name" />
      <div className="relative">
        <Input
          placeholder="Password"
          type={visiblePassword ? "text" : "password"}
        />
        {visiblePassword ? (
          <EyeIcon
            className="absolute right-4 top-2 z-10 cursor-pointer text-gray-500"
            onClick={() => setVisiblePassword(false)}
          />
        ) : (
          <EyeClosedIcon
            className="absolute right-4 top-2 z-10 cursor-pointer text-gray-500"
            onClick={() => setVisiblePassword(true)}
          />
        )}
      </div>
      <Button className="w-full bg-violet-950 hover:bg-violet-900">
        Enter
      </Button>
    </div>
  );
};

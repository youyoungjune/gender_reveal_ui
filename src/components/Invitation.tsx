"use client";

import { signOut, useSession } from "next-auth/react";
import { RSVPForm } from "./RSVPForm";
import { LoginForm } from "./LoginForm";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const Invitation = () => {
  const session = useSession();
  return session.status === "authenticated" ? (
    <div className="flex flex-col space-y-2">
      <Card className="w-[28rem] bg-[#f6e6d4]">
        <img src="https://utfs.io/f/AR95GDbqfmiLgKuxCRAMTV2AB0J5N6Ct9dKa3jseqzGhpR17" />
        <RSVPForm />
      </Card>
      <div className="flex justify-between">
        <p className="text-xs text-[#bad5c6]">developed by dataonlock.</p>
        <Button
          className="w-fit"
          variant="destructive"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign Out
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col space-y-2">
      <Card className="w-[28rem] bg-[#f6e6d4]">
        <img src="https://utfs.io/f/AR95GDbqfmiL67vj7DaxG5jmiqyXaIwh1Y2ZnsMOocBEUFkp" />
        <LoginForm />
      </Card>
      <p className="text-xs text-[#bad5c6]">developed by dataonlock.</p>
    </div>
  );
};

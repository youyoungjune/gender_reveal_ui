"use client";

import { signOut, useSession } from "next-auth/react";
import { RSVPForm } from "./RSVPForm";
import { LoginForm } from "./LoginForm";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useRsvp } from "@/hooks/useRsvp";
import { useGuests } from "@/hooks/useGuests";

export const Invitation = () => {
  const session = useSession();

  const { rsvps } = useRsvp();
  const { guests } = useGuests();

  return session.status === "authenticated" ? (
    <div className="flex flex-col space-y-2">
      <Card className="w-[28rem] bg-[#f6e6d4]">
        <img
          alt="Invitation"
          src="https://utfs.io/f/AR95GDbqfmiLgKuxCRAMTV2AB0J5N6Ct9dKa3jseqzGhpR17"
        />
        <RSVPForm rsvps={rsvps?.rsvp} guests={guests?.guests} />
      </Card>
      <div className="flex justify-between">
        <p className="text-xs text-[#bad5c6]">
          <a
            href="https://github.com/jamesdavidyu/gender_reveal_ui"
            className="text-xs text-[#bad5c6] hover:underline"
            target="_blank"
          >
            developed
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/jamesdavidyu/gender_reveal_service"
            className="text-xs text-[#bad5c6] hover:underline"
            target="_blank"
          >
            dataonlock.
          </a>
        </p>
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
        <img
          alt="Invitation"
          src="https://utfs.io/f/AR95GDbqfmiL67vj7DaxG5jmiqyXaIwh1Y2ZnsMOocBEUFkp"
        />
        <LoginForm />
      </Card>
      <p className="text-xs text-[#bad5c6]">
        <a
          href="https://github.com/jamesdavidyu/gender_reveal_ui"
          className="text-xs text-[#bad5c6] hover:underline"
          target="_blank"
        >
          developed
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/jamesdavidyu/gender_reveal_service"
          className="text-xs text-[#bad5c6] hover:underline"
          target="_blank"
        >
          dataonlock.
        </a>
      </p>
    </div>
  );
};

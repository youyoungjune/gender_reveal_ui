"use client";

import { signOut, useSession } from "next-auth/react";
import { RSVPForm } from "./RSVPForm";
import { LoginForm } from "./LoginForm";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useRsvp } from "@/hooks/useRsvp";
import { useGuests } from "@/hooks/useGuests";
import { useDashboard } from "@/hooks/useDashboard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface Dashboard {
  id: string;
  name: string;
  rsvp: string;
  guests: string;
}

export const Invitation = () => {
  const session = useSession();

  const { rsvps } = useRsvp();
  const { guests } = useGuests();
  const { dashboards } = useDashboard();

  return session.status === "authenticated" ? (
    <div className="flex flex-col space-y-2">
      <Card className="w-80 sm:w-[28rem] bg-[#f6e6d4]">
        <img alt="Invitation" src={process.env.NEXT_PUBLIC_AUTH_IMG} />
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
          <br
            className={
              session.data.user.name === process.env.NEXT_PUBLIC_ADMIN1 ||
              session.data.user.name === process.env.NEXT_PUBLIC_ADMIN2
                ? "block sm:hidden"
                : "hidden"
            }
          />
          <a
            href="https://github.com/jamesdavidyu/gender_reveal_service"
            className="text-xs text-[#bad5c6] hover:underline"
            target="_blank"
          >
            dataonlock.
          </a>
        </p>
        <div className="space-x-1">
          {session.data.user.name === process.env.NEXT_PUBLIC_ADMIN1 ||
          session.data.user.name === process.env.NEXT_PUBLIC_ADMIN2 ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Dashboard</Button>
              </DialogTrigger>
              <DialogContent className="bg-[#f6e6d4] text-[#954f36] overflow-y-auto h-96 text-xs sm:w-fit">
                <DialogHeader>
                  <DialogTitle>Dashboard</DialogTitle>
                  <DialogDescription className="text-[#954f36]">
                    Invitees who have RSVPd.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3">
                  <div className="border-r border-[#954f36]">
                    <p className="flex justify-center border-b border-[#954f36]">
                      Name
                    </p>
                    {dashboards.dashboard?.map((dashboard: Dashboard) => (
                      <Popover key={dashboard.id}>
                        <PopoverTrigger className="border-b border-[#954f36] p-2 flex flex-col w-full">
                          {dashboard.name.length > 14
                            ? dashboard.name.substring(0, 14) + "..."
                            : dashboard.name}
                        </PopoverTrigger>
                        <PopoverContent className="bg-[#f6e6d4] text-[#954f36] text-xs w-fit">
                          {dashboard.name}
                        </PopoverContent>
                      </Popover>
                    ))}
                  </div>
                  <div className="border-r border-[#954f36]">
                    <p className="flex justify-center border-b border-[#954f36]">
                      RSVP
                    </p>
                    {dashboards.dashboard?.map((dashboard: Dashboard) => (
                      <p
                        key={dashboard.id}
                        className="border-b border-[#954f36] p-2"
                      >
                        {dashboard.rsvp}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="flex justify-center border-b border-[#954f36]">
                      Guests
                    </p>
                    {dashboards.dashboard?.map((dashboard: Dashboard) => (
                      <Popover key={dashboard.id}>
                        <PopoverTrigger className="border-b border-[#954f36] p-2 flex flex-col w-full">
                          {dashboard.guests.length > 15
                            ? dashboard.guests.substring(0, 15) + "..."
                            : dashboard.guests}
                        </PopoverTrigger>
                        <PopoverContent className="bg-[#f6e6d4] text-[#954f36] text-xs w-fit">
                          {dashboard.guests}
                        </PopoverContent>
                      </Popover>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ) : null}
          <Button
            className="w-fit"
            variant="destructive"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col space-y-2">
      <Card className="w-80 sm:w-[28rem] bg-[#f6e6d4]">
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

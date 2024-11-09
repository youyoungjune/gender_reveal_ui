"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import useSWR from "swr";

export const useRsvp = () => {
    const session = useSession();

    const fetcher = (url: string) => axios.get(url).then((res) => res.data);

    const {
        data: rsvpData,
        isLoading: isRsvpDataLoading,
        error: rsvpError,
    } = useSWR(session.status === "authenticated" ? "/api/rsvp" : null, fetcher);

    return {
        rsvps: {
            rsvp: rsvpData,
            isLoading: isRsvpDataLoading,
            error: rsvpError,
        },
    };
};
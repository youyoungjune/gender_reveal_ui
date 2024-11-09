"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import useSWR from "swr";

export const useGuests = () => {
    const session = useSession();

    const fetcher = (url: string) => axios.get(url).then((res) => res.data);

    const {
        data: guestsData,
        isLoading: isGuestsDataLoading,
        error: guestsError,
    } = useSWR(session.status === "authenticated" ? "/api/guests" : null, fetcher);

    return {
        guests: {
            guests: guestsData,
            isLoading: isGuestsDataLoading,
            error: guestsError,
        },
    };
};
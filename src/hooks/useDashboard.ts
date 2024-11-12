"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import useSWR from "swr";

export const useDashboard = () => {
    const session = useSession();

    const fetcher = (url: string) => axios.get(url).then((res) => res.data);

    const {
        data: dashboardData,
        isLoading: isDashboardDataLoading,
        error: dashboardError,
    } = useSWR(session.status === "authenticated" ? "/api/dashboard" : null, fetcher);

    return {
        dashboards: {
            dashboard: dashboardData,
            isLoading: isDashboardDataLoading,
            error: dashboardError,
        },
    };
};
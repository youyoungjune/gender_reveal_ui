/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getGrpApiHttpClient } from "@/lib/grp-api-http-client";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const token = await getToken({ req });
        const client = getGrpApiHttpClient(token?.accessToken as string);
        const dashboardResponse = await client.getDashboard();

        return NextResponse.json(dashboardResponse);
    } catch (e: any) {
        return NextResponse.json(
            { message: "Error fetching dashboard." },
            { status: 500 },
        );
    };
};
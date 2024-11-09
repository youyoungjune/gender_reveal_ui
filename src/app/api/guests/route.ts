import { getGrpApiHttpClient } from "@/lib/grp-api-http-client";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const token = await getToken({ req });
        const body = await req.json();
        const client = getGrpApiHttpClient(token?.accessToken as string);

        const guestPayload = { ...body };

        await client.createGuests(guestPayload);

        return NextResponse.json({ message: "Success" });
    } catch (e: any) {
        return NextResponse.json(
            { message: "Error createing guests."},
            { status: 500 },
        );
    };
};

export async function GET(req: NextRequest) {
    try {
        const token = await getToken({ req });
        const client = getGrpApiHttpClient(token?.accessToken as string);
        const guestResponse = await client.getGuests();

        return NextResponse.json(guestResponse);
    } catch (e: any) {
        return NextResponse.json(
            { message: "Error fetching guests." },
            { status: 500 },
        );
    };
};

export async function PUT(req: NextRequest) {
    try {
        const token = await getToken({ req });
        const body = await req.json();
        const client = getGrpApiHttpClient(token?.accessToken as string);

        const guestPayload = { ...body };

        await client.putGuests(guestPayload);

        return NextResponse.json({ message: "Success" });
    } catch (e: any) {
        return NextResponse.json(
            { message: "Error creating guests." },
            { status: 500 },
        );
    };
};
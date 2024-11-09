import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        name: string;
        inviteeId: token.inviteeId;
        accessToken: string;
    }

    interface Session {
        user: {
            name: string;
            inviteeId: token.inviteeId;
        };
        accessToken: string;
        status: {
            authenticated;
            loading;
        };
    }

    interface Token {
        accessToken: string;
        name: string;
        inviteeId: token.inviteeId;
    }
}
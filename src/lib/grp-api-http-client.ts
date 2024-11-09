import axios, { AxiosInstance } from "axios";

interface LoginPayload {
    name: string;
    password: string;
}

// interface RsvpPayload {
//     rsvp: string;
// }

// interface GuestPayload {
//     guests: string;
// }

export const getGrpApiHttpClient = (accessToken?: string) => {
    const instance: AxiosInstance = axios.create({
        baseURL: process.env.GRP_API_URL,
        timeout: 18000,
        headers: {
            ...(accessToken ? { Authorization: `${accessToken}`} : {}),
        },
    });
    const client = new GrpApiHttpClient(instance);

    return client
}

class GrpApiHttpClient {
    constructor(private client: AxiosInstance) {}

    public async loginUser(payload: LoginPayload) {
        const response = await this.client
            .post("/api/v1/auth/login", payload)
            .catch((e) => {
                throw new Error(e);
            });

        return response;
    }
}
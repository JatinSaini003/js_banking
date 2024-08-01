"use server";
import { Client, Account, Users } from "node-appwrite";
import { cookies } from "next/headers";
import { Databases } from "node-appwrite";

export async function createSessionClient() {
    const client = new Client()
        .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.PUBLIC_APPWRITE_PROJECT!);

    const session = cookies().get("appWrite-session");
    if (!session || !session.value) {
        throw new Error("No session");
    }

    client.setSession(session.value);

    return {
        get account() {
            return new Account(client);
        },
    };
}

export async function createAdminClient() {
    const client = new Client()
        .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.PUBLIC_APPWRITE_PROJECT!)
        .setKey(process.env.APPWRITE_KEY!);

    return {
        get account() {
            return new Account(client);
        },
        get database() {
            return new Databases(client)
        },
        get user() {
            return new Users(client)
        }
    };
}

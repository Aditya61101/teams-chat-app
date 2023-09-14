import crypto from "crypto";
import { NextResponse } from "next/server";
import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";

export async function PATCH(
    _: Request,
    { params }: { params: { serverId: string } }
) {
    try {
        const profile = await currentProfile();
        if (!profile)
            return new NextResponse("Unauthorized", { status: 401 });
        
        if (!params.serverId)
            return new NextResponse("Server ID Missing", { status: 400 });
        
        //updating invite-code for the server
        const server = await db.server.update({
            where: {
                id: params.serverId,
                profileId: profile.id,
            },
            data: {
                inviteCode: crypto.randomUUID(),
            },
        });
        return NextResponse.json(server);
    } catch (error) {
        console.log("[SERVER_ID]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
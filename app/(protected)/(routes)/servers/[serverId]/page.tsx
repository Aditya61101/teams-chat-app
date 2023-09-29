import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";

type Props = {
    params: {
        serverId: string;
    }
}

const ServerPage = async ({ params }: Props) => {
    const profile = await currentProfile();

    if (!profile)
        return redirectToSignIn();

    const server = await db.server.findUnique({
        where: {
            id: params.serverId,
            members: {
                some: {
                    profileId: profile.id,
                }
            }
        },
        include: {
            channels: {
                where: {
                    name: "general"
                },
                orderBy: {
                    createdAt: "asc"
                }
            }
        }
    })

    const initialChannel = server?.channels[0];

    if (initialChannel?.name !== "general")
        return null;

    return redirect(`/servers/${params.serverId}/channels/${initialChannel?.id}`)
}

export default ServerPage;
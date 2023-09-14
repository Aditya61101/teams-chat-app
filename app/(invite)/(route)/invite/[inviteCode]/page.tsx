import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/currentProfile";

type Props = {
    params: {
        inviteCode: string;
    };
};

const InviteCodePage = async ({
    params
}: Props) => {
    const profile = await currentProfile();

    if (!profile)
        return redirectToSignIn();

    if (!params.inviteCode)
        return redirect("/");

    const alreadyMember = await db.server.findFirst({
        where: {
            inviteCode: params.inviteCode,
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (alreadyMember)
        return redirect(`/servers/${alreadyMember.id}`);

    // updating the server with its new member(the one currently visiting it)
    const server = await db.server.update({
        where: {
            inviteCode: params.inviteCode,
        },
        data: {
            members: {
                create: [
                    {
                        profileId: profile.id,
                    }
                ]
            }
        }
    });

    if (server)
        return redirect(`/servers/${server.id}`);

    return null;
}

export default InviteCodePage;
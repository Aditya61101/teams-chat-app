import InitialModal from '@/components/modals/initialModal';
import { db } from '@/lib/db';
import { initialProfile } from '@/lib/initialProfile';
import { redirect } from "next/navigation"

const SetupPage = async () => {
    const profile = await initialProfile();
    // to land to the first server that the user has joined
    const server = await db.server.findFirst({
        where: {
            members:{
                some:{
                    profileId: profile.id
                }
            }
        }
    });
    if(server)
        return redirect(`/servers/${server.id}`);

    return <InitialModal/>;
}

export default SetupPage;
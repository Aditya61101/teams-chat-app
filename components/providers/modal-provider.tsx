"use client";

import { CreateServerModal } from "@/components/modals/createServer";
import { useEffect, useState } from "react";
import { InviteModal } from "../modals/inviteModal";
import { EditServerModal } from "../modals/editServer";
import { MembersModal } from "../modals/membersModal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted)
        return null;

    return (
        <>
            <CreateServerModal />
            <InviteModal />
            <EditServerModal />
            <MembersModal />
        </>
    )
}
"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "@/components/modals/createServer";
import { InviteModal } from "../modals/inviteModal";
import { EditServerModal } from "../modals/editServer";
import { MembersModal } from "../modals/membersModal";
import { CreateChannelModal } from "../modals/createChannel";
import { LeaveServerModal } from "../modals/leaveServer";
import { DeleteServerModal } from "../modals/deleteServer";
import { DeleteChannelModal } from "../modals/deleteChannel";
import { EditChannelModal } from "../modals/editChannel";
import { MessageFileModal } from "../modals/messageFileUpload";
import { DeleteMessageModal } from "../modals/deleteMessage";

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
            <CreateChannelModal />
            <LeaveServerModal />
            <DeleteServerModal />
            <DeleteChannelModal />
            <EditChannelModal />
            <MessageFileModal />
            <DeleteMessageModal />
        </>
    )
}
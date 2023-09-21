"use client";

import { ChannelType, MemberRole } from "@prisma/client";
import { Plus, Settings } from "lucide-react";
import { ServerWithMembersAndProfiles } from "@/types";
import { ActionTooltip } from "@/components/actionTooltip";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/slices/modalSlice";

type Props = {
    label: string;
    role?: MemberRole;
    sectionType: "channels" | "members";
    channelType?: ChannelType;
    server?: ServerWithMembersAndProfiles;
};

export const ServerSection = ({
    label,
    role,
    sectionType,
    channelType,
    server,
}: Props) => {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between py-2">
            <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
                {label}
            </p>
            {role !== MemberRole.GUEST && sectionType === "channels" && (
                <ActionTooltip label="Create Channel" side="top">
                    <button
                        onClick={() => dispatch(openModal({ type: "createChannel", data: { channelType } }))}
                        className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                </ActionTooltip>
            )}
            {role === MemberRole.ADMIN && sectionType === "members" && (
                <ActionTooltip label="Manage Members" side="top">
                    <button
                        onClick={() => dispatch(openModal({ type: "members", data: { server } }))}
                        className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                    >
                        <Settings className="h-4 w-4" />
                    </button>
                </ActionTooltip>
            )}
        </div>
    )
}
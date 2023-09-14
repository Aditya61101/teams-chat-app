"use client";

import { CreateServerModal } from "@/components/modals/createServer";
import { useEffect, useState } from "react";

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
        </>
    )
}
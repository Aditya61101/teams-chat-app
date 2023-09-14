import { createSlice } from "@reduxjs/toolkit";
import { Channel, ChannelType, Server } from "@prisma/client";

export type ModalType = "createServer" | "invite" | "editServer" | "members" | "createChannel" | "leaveServer" | "deleteServer" | "deleteChannel" | "editChannel" | "messageFile" | "deleteMessage";

interface ModalData {
    server?: Server;
    channel?: Channel;
    channelType?: ChannelType;
    apiUrl?: string;
    query?: Record<string, any>;
}

interface ModalState {
    type: ModalType | null;
    data: ModalData;
    isOpen: boolean;
}

const initialState: ModalState = {
    type: null,
    data: {},
    isOpen: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action) => {
            console.log(action.payload);
            state.isOpen = true;
            state.type = action.payload.type;
            state.data = action.payload.data || {};
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.type = null;
            state.data = {};
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
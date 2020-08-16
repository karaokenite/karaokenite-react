import { AddSongModal } from "./AddSongModal";
import { InviteFriendsModal } from "./InviteFriendsModal";
import { InRoomModal } from "./InRoomModal";
import { UseModalComponentProps } from "@components/Modals/types";

export const headModals = {
    addSong: AddSongModal,
    inviteFriends: InviteFriendsModal,
    inRoom: InRoomModal,
};

export type HeadModal = 'addSong' | 'inviteFriends' | 'inRoom';

export type HeadModalProps = UseModalComponentProps<HeadModal>;

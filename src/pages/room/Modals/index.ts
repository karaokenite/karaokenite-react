import { AddSongModal } from "./AddSongModal";
import { FeedbackModal } from "./FeedbackModal";
import { InviteFriendsModal } from "./InviteFriendsModal";
import { InRoomModal } from "./InRoomModal";
import { UseModalComponentProps } from "@components/Modals/types";

export const roomModals = {
  addSong: AddSongModal,
  feedback: FeedbackModal,
  inRoom: InRoomModal,
  inviteFriends: InviteFriendsModal,
};

export type RoomModal = "addSong" | "feedback" | "inRoom" | "inviteFriends";

export type RoomModalProps = UseModalComponentProps<RoomModal>;

export type SetRoomModal = (modal: RoomModal) => void;

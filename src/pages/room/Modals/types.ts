import { UseModalComponentProps } from "@components/Modals/types";

export type RoomModal = "addSong" | "feedback" | "inRoom" | "inviteFriends";

export type RoomModalProps = UseModalComponentProps<RoomModal>;

export type SetRoomModal = (modal: RoomModal) => void;

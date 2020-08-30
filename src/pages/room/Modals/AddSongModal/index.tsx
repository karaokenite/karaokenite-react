import React, { useState } from "react";

import { Modal } from "@components/Modals/Modal";
import { Button } from "@components/Button";
import { useEmitRoomData } from "@connection/EmitContext";
import { useRoomContext } from "@connection/RoomContext";
import { allSongs } from "@shared/songs";

import { RoomModalProps } from "../types";
import { SongSelector } from "./SongSelector";
import styles from "./styles.module.scss";

export const AddSongModal: React.FC<RoomModalProps> = ({ isOpen, onClose }) => {
  const emitRoomData = useEmitRoomData();
  const { roomData } = useRoomContext();
  const [selected, setSelected] = useState<number>();

  const chooseSong = () => {
    if (!selected) {
      return;
    }

    emitRoomData({
      songs: [...roomData.get().songs, selected],
    });
    setSelected(undefined);
  };

  return (
    <Modal className={styles.addSongModal} isOpen={isOpen} onClose={onClose}>
      <div className={styles.contents}>
        <div className={styles.aroundSongList}>
          <div className={styles.songList}>
            {allSongs.map((song) => (
              <SongSelector
                data={song}
                key={song.title}
                onSelect={() => setSelected(song.index)}
                selected={song.index === selected}
              />
            ))}
          </div>
        </div>
        <div className={styles.controls}>
          <Button className={styles.control} onClick={onClose} variant="white">
            Done
          </Button>
          <Button
            aria-disabled={!selected}
            className={styles.control}
            onClick={chooseSong}
            variant="yellow"
          >
            Choose Song
          </Button>
        </div>
      </div>
    </Modal>
  );
};

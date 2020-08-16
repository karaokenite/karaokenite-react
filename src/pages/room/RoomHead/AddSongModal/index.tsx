import React, { useState } from "react";

import { ModalComponentProps } from "@components/Modals/types";
import { Modal } from "@components/Modals/Modal";
import { Button } from "@components/Button";
import { allSongs } from "@data/songs";

import { useRoomContext } from "../../RoomContext";
import { SongSelector } from "./SongSelector";
import styles from "./styles.module.scss";

export const AddSongModal: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
}) => {
  const [selected, setSelected] = useState<string>();
  const { songs } = useRoomContext();
  const chooseSong = () => {
    if (!selected) {
      return;
    }

    songs.set([...songs.get(), selected]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.contents}>
        <div className={styles.aroundSongList}>
          <div className={styles.songList}>
            {allSongs.map((song) => (
              <SongSelector
                data={song}
                key={song.title}
                onSelect={() => setSelected(song.title)}
                selected={song.title === selected}
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

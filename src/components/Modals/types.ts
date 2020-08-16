import React from "react";

export type UseModalComponentProps<ModalKey> = {
    isOpen: boolean;
    onClose: () => void;
    setModal: (modal: ModalKey) => void;
};

export type UseModalComponent<ModalKey> = React.ComponentType<UseModalComponentProps<ModalKey>>;

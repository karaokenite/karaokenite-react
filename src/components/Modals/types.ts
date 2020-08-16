import React from "react";

export type ModalComponentProps = {
    isOpen: boolean;
    onClose: () => void;
};

export type ModalComponent = React.ComponentType<ModalComponentProps>;

import React, { useState } from "react";

import { ModalComponent } from "./types";

export const useModals = <Modals extends Record<string, ModalComponent>>(
  modals: Modals
) => {
  const [modal, setModal] = useState<keyof Modals>();

  const node = Object.entries(modals).map(([key, Component]) => {
    return (
      <Component
        isOpen={key === modal}
        key={key}
        onClose={() => setModal(undefined)}
      />
    );
  });

  return [node, setModal] as const;
};

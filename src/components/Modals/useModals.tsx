import React, { useState } from "react";

export function useModals<Modals>(modals: Modals) {
  const [modal, setModal] = useState<keyof Modals>();

  const node = Object.entries(modals).map(([key, Component]) => {
    return (
      <Component
        isOpen={key === modal}
        key={key}
        onClose={() => setModal(undefined)}
        setModal={setModal}
      />
    );
  });

  return [node, setModal] as const;
}

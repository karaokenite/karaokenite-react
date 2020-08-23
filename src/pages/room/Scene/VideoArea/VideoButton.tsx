import { Entity as AREntity } from "aframe-react";
import React from "react";

const mouseEnter =
  "property: scale; to: 0.27 0.27 1; dur: 300; startEvents: mouseenter";

const mouseLeave =
  "property: scale; to: 0.2 0.2 1; dur: 300; startEvents: mouseleave";

export type VideoButtonProps = {
  onClick: () => void;
  id: string;
  opacity?: number;
  position: string;
  src: string;
};

export const VideoButton: React.FC<VideoButtonProps> = ({
  onClick,
  ...props
}) => {
  return (
    <AREntity
      animation__mouseenter={mouseEnter}
      animation__mouseleave={mouseLeave}
      events={{
        click: onClick,
      }}
      primitive="a-image"
      scale="0.2 0.2 1"
      {...props}
    />
  );
};

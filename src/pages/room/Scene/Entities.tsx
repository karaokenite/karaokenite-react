import React from "react";

import { Raw } from "./Raw";

export const Entities: React.FC = () => {
  return (
    <>
      <Raw
        html={`
<a-entity
  animation="property: object3D.position.y; to: 1.45; dir: alternate; dur: 1000; loop: true"
  camera
  host
  id="player"
  look-controls
  networked="template: #avatar-template; attachTemplateToLocal: false;"
  position="0 1.3 0"
  spawn-in-circle="radius:1"
  wasd-controls
>
  <a-entity class="nametag"></a-entity>
  <a-sphere class="head" visible="false" random-color></a-sphere>
</a-entity>   
`}
      />
      <Raw
        html={`
<a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>
`}
      />
    </>
  );
};

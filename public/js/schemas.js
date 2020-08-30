NAF.schemas.add({
  template: "#avatar-template",
  components: [
    "position",
    "rotation",
    {
      selector: ".head",
      component: "material",
      property: "color",
    },
    {
      selector: ".nametag",
      component: "text",
      property: "value",
    },
  ],
});

NAF.schemas.add({
  template: "#video-template",
  components: [
    "position",
    "rotation",
    {
      selector: ".front",
      component: "video-sync",
      property: "paused",
    },
    {
      selector: ".front",
      component: "video-sync",
      property: "src",
    },
    {
      selector: ".front",
      component: "video-sync",
      property: "currentTime",
    },
  ],
});

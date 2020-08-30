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

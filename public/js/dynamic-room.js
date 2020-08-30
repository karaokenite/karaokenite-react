AFRAME.registerComponent("dynamic-room", {
  init: function () {
    var { room } = this.getUrlParams();

    this.el.setAttribute("networked-scene", {
      adapter: "webrtc",
      audio: "true",
      room,
      serverURL: `:3001`,
    });
  },

  getUrlParams: function () {
    var match;
    var pl = /\+/g; // Regex for replacing addition symbol with a space
    var search = /([^&=]+)=?([^&]*)/g;
    var decode = function (s) {
      return decodeURIComponent(s.replace(pl, " "));
    };
    var query = window.location.search.substring(1);
    var urlParams = {};

    match = search.exec(query);
    while (match) {
      urlParams[decode(match[1])] = decode(match[2]);
      match = search.exec(query);
    }
    return urlParams;
  },
});

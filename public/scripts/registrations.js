// ⏯ Play & Pause buttons ⏯

AFRAME.registerComponent("play-pause", {
  init: function () {
    var myVideo = document.querySelector("#html-video");

    var videoControls = document.querySelector("#videoControls");
    this.el.addEventListener("click", function () {
      var videoSync = document.querySelector("[video-sync]");
      if (myVideo.paused) {
        videoSync.setAttribute("video-sync", "paused", false);
        videoControls.setAttribute("src", "#pause");
      } else {
        videoSync.setAttribute("video-sync", "paused", true);
        videoControls.setAttribute("src", "#play");
      }
    });
  },
});

// ⏩ Next button ⏩

AFRAME.registerComponent("next", {
  init: function () {
    this.el.addEventListener("click", function () {
      i++;

      /* Start from beginning if needed */
      if (i == playlist.length) i = 0;

      var videoSync = document.querySelector("[video-sync]");
      videoSync.setAttribute("video-sync", "src", playlist[i]);
      videoSync.setAttribute("video-sync", "currentTime", 0);
    });
  },
});

AFRAME.registerComponent("previous", {
  init: function () {
    this.el.addEventListener("click", function () {
      i--;

      /* Start from beginning if needed */
      if (i == -1) i = 0;

      var videoSync = document.querySelector("[video-sync]");
      videoSync.setAttribute("video-sync", "src", playlist[i]);
      videoSync.setAttribute("video-sync", "currentTime", 0);
    });
  },
});

AFRAME.registerComponent("volume-low", {
  init: function () {
    this.el.addEventListener("click", function () {
      var videoChange = document.querySelector("#html-video");
      videoChange.volume = 0.5;
    });
  },
});

AFRAME.registerComponent("volume-high", {
  init: function () {
    this.el.addEventListener("click", function () {
      var videoChange = document.querySelector("#html-video");
      videoChange.volume = 1.0;
    });
  },
});

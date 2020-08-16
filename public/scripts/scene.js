var i = 0;

/*

// Define custom schema for syncing avatar color, set by random-color
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

*/

/*

function onConnect() {
  // The first client is the NOT only one that sees no other clients after connection,
  // so it is NOT safe to take ownership of singletons immediately upon onConnect.
  // We'll listen for a certain period, and if no client connections, take ownership.
  // FIXME: How to determine the timeout?  Race condition.

  console.warn("onConnect() ", new Date());

  document.body.addEventListener("clientDisconnected", function (evt) {
    console.warn("clientDisconnected ", evt.detail.clientId);
  });
}

*/

var presets = ["contact", "forest", "yavapai", "arches", "osiris"];

var environment = document.querySelector("[environment]");

function setEnvironment(newPreset) {
  environment.setAttribute("environment", { preset: newPreset });
}

function getNextPreset() {
  var currentPreset = environment.getAttribute("environment").preset;
  var index = presets.indexOf(currentPreset);
  return presets[(index + 1) % presets.length];
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 32 /* spacebar */) {
    var newPreset = getNextPreset();
    setEnvironment(newPreset);
  }
});

var numUsers = 0;
var host = "Placeholder";

h = document.getElementById("host");
h.innerHTML = host;

/*

socket.on("sendAllUsernames", function (data) {
  const { usernames } = data;

  var images = [
    "https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsmiley-pink.svg?v=1595297080213",
    "https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsmiley-purple.svg?v=1595889983311",
    "https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsmiley-lime.svg?v=1595889983227",
    "https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsmiley-orange.svg?v=1596833741466",
    "https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsmiley-cyan.svg?v=1596833741434",
  ];

  var $users = [];

  usernames.map((username, id) => {
    var image = images[id % images.length];
    const $user = $(
      '<li id="list' +
        id +
        '"><img src="' +
        image +
        '"><span id="host">' +
        username +
        "</span><strong>" +
        (id === 0 ? " (Host)" : "") +
        "</strong></li>"
    );
    $users.push($user);
  });

  $("#list").empty();

  if ($users.length) {
    $users.map(($user) => $user.appendTo($("#list")));
  }
  numUsers = usernames.length;
});

socket.on("sendAllUsernamesDisconnect", function (data) {
  var images = [
    "https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsmiley-pink.svg?v=1595297080213",
    "https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fsmiley-purple.svg?v=1595889983311",
  ];
  var $users = [];
  const { usernames } = data;
  usernames.map((username, id) => {
    var image = images[id % images.length];
    const $user = $(
      '<li id="list' +
        id +
        '"><img src="' +
        image +
        '"><span id="host">' +
        username +
        "</span><strong>" +
        (id === 0 ? "(Host)" : "") +
        "</strong></li>"
    );
    $users.push($user);
  });
  $("#list").empty();
  if ($users.length) {
    $users.map(($user) => $user.appendTo($("#list")));
  }
  numUsers = usernames.length;
});

ctr = document.getElementById("counter");
ctr.innerHTML = 1;

// Add one
socket.on("newClientConnect", function (data) {
  ctr.innerHTML = data;
  numUsers = data;

  if (numUsers == 2) {
    var smiley2 = document.getElementById("smiley2");
    smiley2.style.visibility = "visible";
  }

  if (numUsers > 2) {
    var smiley3 = document.getElementById("smiley2");
    smiley3.style.visibility = "visible";

    smiley3 = document.getElementById("smiley3");
    smiley3.style.visibility = "visible";
  }
});

// Minus one
socket.on("newClientDisconnect", function (data) {
  ctr.innerHTML = data;
  numUsers = data;
});

let ctr2 = document.getElementById("roomName");
ctr2.innerHTML = "as";

// Add one
socket.on("sendRoomName", (data) => {
  ctr2.innerHTML = data.name;
});

*/

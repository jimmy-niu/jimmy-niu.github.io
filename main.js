$(document).ready(function() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini|Mobile/i.test(
      navigator.userAgent
    )
  ) {
    set_up_mobile();
  } else {
    create_canvas();
  }
  bind_handlers();
});

$(window).on("resize", function() {
  resize_canvas();
});

let toDraw = true;
function bind_handlers() {
  $("#header, #tagline").hover(
    function(e) {
      console.log("in");
      toDraw = false;
    },
    function(e) {
      console.log("out");
      toDraw = true;
    }
  );

  $(document).on("mousemove", function(e) {
    if (toDraw) {
      light_box(e.clientX, e.clientY);
    }
  });

  $("#resume").click(function(e) {
    console.log("clicked");
  });
}

function set_up_mobile() {
  $("#cards").css("display", "none");
  $("#mobile_bar").css("display", "flex");
  create_canvas();
}

function checkHash(hash, obj) {
  return hash[obj] === true;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

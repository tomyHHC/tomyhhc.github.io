
// a key map of allowed keys
var allowedKeys = {
  73: 'i',
  76: 'l',
  79: 'o',
  86: 'v',
  69: 'e',
  84: 't',
  77: 'm',
  89: 'y'
};

// the 'official' Konami Code sequence
var konamiCode = ['i', 'l', 'o', 'v', 'e', 't', 'o', 'm', 'y'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
//  alert("key: " + key);
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];
//  alert("requiredKey: " + requiredKey);

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      showMyLove();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function showMyLove() {
  var audio = new Audio('../assets/audios/love-u-baby.m4a');
  var img = document.getElementById("baby");
  var imgSec = document.getElementById("babe-img");
  $([document.documentElement, document.body]).animate({
  scrollTop: ($("#babe-img").offset().top - 250)}, 1500, function() {
    audio.play();
    img.style.opacity = 0;
    document.getElementById("two-heart").style.display = "block";
//    alert("我最親愛的小寶貝～I love you!")
    setTimeout(hideHeart, 4300);
  });
}

function hideHeart() {
    document.getElementById("two-heart").style.display = "none";
}

function secretTalk() {
    var secretKey = prompt("愛之通關密語！？", "");
    if (secretKey.toLowerCase() == "ilovetomy" || secretKey.toLowerCase() == "ilovetomy ") {
        showMyLove();
    } else if (secretKey == null || secretKey == "") {
        // cancel, and do nothing
    } else {
        alert("不對唷...再想想~~~^^");
    }
}

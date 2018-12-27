
// a key map of allowed keys
var allowedKeys = {
  65: 'a',
  83: 's',
  84: 't',
  82: 'r',
  73: 'i',
  68: 'd'
};

// the 'official' Konami Code sequence
var konamiCode = ['a', 's', 't', 'r', 'i', 'd'];

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
  $([document.documentElement, document.body]).animate({
  scrollTop: $("#baby").offset().top}, 1500, function() {
    document.getElementById("baby").src="../assets/my-love.jpg";
    alert("我最親愛的小寶貝～I love you!")
    audio.play();
  });
//  $("#baby").backgroundImage = "url('../assets/my-love.jpg')";
//    alert("我最親愛的小寶貝～I love you!");
}

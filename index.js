var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListner("click", function(){
      var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        v ar audio = new audio("sounds/ton-1.mp3");
          audio.play();
        break;
        case "a":
          var
      default:

    }
  });
}

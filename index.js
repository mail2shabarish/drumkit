var numOfDrums = document.querySelectorAll(".drum").length;

for (let index = 0; index < numOfDrums; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", () => {
        var sound = "sounds/";
        var letter = document.querySelectorAll("button")[index].innerHTML;        
        switch (letter) {            
            case 'w':
                sound += "crash.mp3";
                break;
            case 'a':
                sound += "kick-bass.mp3";
                break;
            case 's':
                sound += "snare.mp3";
                break;
            case 'd':
                sound += "tom-1.mp3";
                break;
            case 'j':
                sound += "tom-2.mp3";
                break;
            case 'k':
                sound += "tom-3.mp3";
                break;
            case 'l':
                sound += "tom-4.mp3";
                break;
        }
        let audio = new Audio(sound);
        audio.play();
        buttonAnimation(letter);
    });
}


document.addEventListener("keypress", (e) => {
        var sound = "sounds/";
        var letter = e.key;       
        switch (letter) {            
            case 'w':
                sound += "crash.mp3";
                break;
            case 'a':
                sound += "kick-bass.mp3";
                break;
            case 's':
                sound += "snare.mp3";
                break;
            case 'd':
                sound += "tom-1.mp3";
                break;
            case 'j':
                sound += "tom-2.mp3";
                break;
            case 'k':
                sound += "tom-3.mp3";
                break;
            case 'l':
                sound += "tom-4.mp3";
                break;
        }
        let audio = new Audio(sound);
        audio.play();
        buttonAnimation(letter);
});

function buttonAnimation(currkey){
    var activeButton = document.querySelector("." + currkey);
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"),200);    
}
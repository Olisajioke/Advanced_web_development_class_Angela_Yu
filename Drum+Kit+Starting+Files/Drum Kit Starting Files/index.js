console.log("JS loaded ✅");


var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        //this.style.color = "white"; 
        this.classList.add("pressed");
        if (this.innerHTML == "w") {
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        }
        else if (this.innerHTML == "a") {
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        }
        else if (this.innerHTML == "s") {
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        }
        else if (this.innerHTML == "d") {
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        }
        else if (this.innerHTML == "j") {
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        }
        else if (this.innerHTML == "k") {     
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        }
        else if (this.innerHTML == "l") {
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        }
        console.log(this);
        setTimeout(() => {
            this.classList.remove("pressed");
        //this.style.color = "";
        }, 300);
    });
}


function handleKeyPress(event) {
    console.log("JS loaded ✅");

    document.addEventListener("keydown", function (event) {
        var key = event.key.toLowerCase();
        var button = document.querySelector("." + key);

        if (!button) return; // safety check

        //button.style.color = "white";
        button.classList.add("pressed");

        var soundMap = {
            w: "crash",
            a: "kick-bass",
            s: "snare",
            d: "tom-1",
            j: "tom-2",
            k: "tom-3",
            l: "tom-4"
        };

        var audio = new Audio("./sounds/" + soundMap[key] + ".mp3");
        audio.play();

        setTimeout(() => {
            //button.style.color = "";
            button.classList.remove("pressed");
        }, 300);

        console.log("Key pressed:", key);
    });
}

handleKeyPress();

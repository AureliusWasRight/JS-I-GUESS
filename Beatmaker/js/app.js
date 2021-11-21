class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.playBtn = document.querySelector(".play");
        this.currentKick = "./sounds/kick-classic.wav";
        this.currentSnare = "./sounds/snare-acoustic01.wav";
        this.currentHihat = "./sounds/hihat-acousting01.wav";
        this.kickAudio = document.querySelector(".kick-sound");
        this.snareAudio = document.querySelector(".snare-sound");
        this.hihatAudio = document.querySelector(".hihat-sound");
        this.index = 0;
        this.bpm = 150;
        this.isPlaying = null;
        this.selects = document.querySelectorAll("select");
        this.muteBtns = document.querySelectorAll(".mute");
    }
    activePad() {
        this.classList.toggle("active");
    }
    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        //? Loop over the pads
        activeBars.forEach((bar) => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            //! Check if active
            if (bar.classList.contains("active")) {
                //! check each sound
                if (bar.classList.contains("kick-pad")) {
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                }
                if (bar.classList.contains("snare-pad")) {
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }
                if (bar.classList.contains("hihat-pad")) {
                    this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                }
            }
        });
        this.index++;
    }
    start() {
        const interval = (60 / this.bpm) * 1000;
        // ! Check if it's playing
        // ! Opposite of null
        if (!this.isPlaying) {
            this.isPlaying = setInterval(() => {
                this.repeat();
            }, interval);
        } else {
            // ! Clear rhe interval
            clearInterval(this.isPlaying);
            this.isPlaying = null;
        }
    }
    updateBtn() {
        if (!this.isPlaying) {
            this.playBtn.innerText = "Play";
            this.playBtn.classList.add("active");
        } else {
            this.playBtn.innerText = "Stop";
            this.playBtn.classList.remove("active");
        }
    }
    changeSound(event) {
        const selectionName = event.target.name;
        const selectionValue = event.target.value;

        switch (selectionName) {
            case "kick-select": {
                this.kickAudio.source = selectionValue;
                console.log(this.kickAudio.source);
                break;
            }
            case "snare-select": {
                this.snareAudio.source = selectionValue;
                break;
            }
            case "hihat-select": {
                this.hihatAudio.source = selectionValue;
                break;
            }
        }
    }
    mute(event) {
        const muteIndex = event.target.getAttribute("data-track");
        event.target.classList.toggle("active");
        if (event.target.classList.contains("active")) {
            switch (muteIndex) {
                case "0":
                    this.kickAudio.volume = 0;
                    break;
                case "1":
                    this.snareAudio.volume = 0;
                    break;
                case "2":
                    this.hihatAudio.volume = 0;
                    break;
            }
        } else {
            switch (muteIndex) {
                case "0":
                    this.kickAudio.volume = 1;
                    break;
                case "1":
                    this.snareAudio.volume = 1;
                    break;
                case "2":
                    this.hihatAudio.volume = 1;
                    break;
            }
        }
    }
}

const drumKit = new DrumKit();

//! Event listeners

drumKit.pads.forEach((pad) => {
    pad.addEventListener("click", drumKit.activePad);
    pad.addEventListener("animationend", function () {
        this.style.animation = "";
    });
});

drumKit.playBtn.addEventListener("click", function () {
    drumKit.start();
    drumKit.updateBtn();
});

drumKit.selects.forEach((select) => {
    select.addEventListener("change", function (event) {
        drumKit.changeSound(event);
    });
});

drumKit.muteBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
        drumKit.mute(event);
    });
});

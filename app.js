/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 10/5/19, 12:43 PM
 * Copyright (c) 2019. All rights reserved.
 */

const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");
    const sound = document.querySelectorAll(".sound-picker button");
    const timeDisplay = document.querySelector(".time-display");
    const timeSelect = document.querySelectorAll(".time-select button");
    const outlineLength = outline.getTotalLength();
    const sounds = document.querySelectorAll(".sound-picker button");

    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //Pick sounds
    sounds.forEach(sound => {
        sound.addEventListener('click', function () {
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute('data-video');
            checkPlaying(song);
        });
    });

    //Play sound
    play.addEventListener("click", () => {
        checkPlaying(song);
    });

    //Select sound
    timeSelect.forEach(option => {
        option.addEventListener('click', function () {
            fakeDuration = this.getAttribute("data-time");
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)} : ${Math.floor(fakeDuration % 60)}`
        })
    });

    //Function to stop and play sounds and videos
    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = "./svg/pause.svg";
        } else {
            song.pause();
            video.pause();
            play.src = "./svg/play.svg";
        }
    };

    //Animating the circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsedTime = fakeDuration - currentTime;
        let seconds = Math.floor(elapsedTime % 60);
        let minutes = Math.floor(elapsedTime / 60);

        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        //Animating time text
        timeDisplay.textContent = `${minutes}:${seconds}`;

        if (currentTime >= fakeDuration) {
            song.pause();
            song.currentTime = 0;
            play.src = './svg/play.svg';
            video.pause();
        }
    };

};

app();

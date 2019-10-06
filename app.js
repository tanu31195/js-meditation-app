/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 10/5/19, 12:43 PM
 * Copyright (c) 2019. All rights reserved.
 */

const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');
    const sound = document.querySelectorAll('.sound-picker button');
    const timeDisplay = document.querySelector('.time-display');
    const outlineLength = outline.getTotalLength();
    console.log(outlineLength);

    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;


    play.addEventListener('click', () => {
        checkPlaying(song);
    });

    //Function to stop and play sounds and videos
    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = './svg/pause.svg'
        } else {
            song.pause();
            video.pause();
            play.src = './svg/play.svg';
        }
    };

};

app();

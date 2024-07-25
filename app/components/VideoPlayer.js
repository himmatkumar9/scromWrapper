"use client";

import videojs from "video.js";
import VideoJS from "./video";
import React, { useEffect, useState } from "react";
const videoJsOptions = {
    autoplay: false,
    controls: false,
    responsive: false,
    fluid: false,
    sources: [{ "type": "video/mp4", "src": "https://player.vimeo.com/progressive_redirect/playback/989448115/rendition/540p/file.mp4?loc=external&signature=6a0f4abdc939daacf7490bcf7677ef4e39239dd8c57bcf2119e256a095ba4e1e" }],

};
export default function VideoPlayer() {
    const playerRef = React.useRef(null);
    const [playing, setPlaying] = useState(false)
    const [showQuiz,setShowQuiz]=useState(false)

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
        player.on('progress', (progress) => {
            videojs.log('progress', progress);
        });
        player.on('seeking', (seeking) => {
            videojs.log('seeking', seeking);
        });
        player.on('ended', (ended) => {
            setPlaying(false)
            videojs.log('ended', ended);
        });
        player.on('play', (ended) => {
            setPlaying(true)
            videojs.log('ended', ended);
        });
        player.on('pause', (ended) => {
            setPlaying(false)
            videojs.log('ended', ended);
        });
    };
    useEffect(() => {
        let intervalId = null;
        if (playing) {
            intervalId = setInterval(() => {
                if (playerRef.current) {
                    console.log(playerRef.current.currentTime());
                    if (playerRef.current.currentTime() > 3.2 && playerRef.current.currentTime() < 3.9)
                    {
                        setShowQuiz(true)
                        playerRef.current.pause()
                        setPlaying(false)
                    }
                    else{
                        setShowQuiz(false)
                    }
                }
            }, 500);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [playing, playerRef]);

    return (
        <main style={{ display: 'flex', alignItems: 'center' }}>

            <div style={{ position: 'relative', marginLeft: 'auto', marginRight: 'auto' }} >
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
           {showQuiz&& <div style={{ width: '15%', height: 200, backgroundColor: 'red', position: 'absolute', zIndex: 1, top: '45%', left: '43%' }} ></div>}
            <button type="button" onClick={() => {
                setPlaying(true)
                playerRef.current.play()


            }} >play</button>
            <button type="button" title="pause" onClick={() => {
                setPlaying(false)

                playerRef.current.pause()
            }} >pause</button>

            {/* <button title="duration" onClick={() => {

                console.log(playerRef.current.currentTime())
            }} /> */}
            {/* <ScormViewer/> */}
        </main>
    );
}

<div>
    <video id="video-bg" autoplay muted loop>
        <source src="assets/video/video.mp4" type="video/mp4">
    </video>
	<slot></slot>
</div>

<style>    
    #video-bg {
        position: absolute;
        z-index: -1;
    }
    @media (min-aspect-ratio: 16/9) {
        #video-bg {
            object-fit: cover;
            width:100%;
            height: auto;
        }
    }
    @media (max-aspect-ratio: 16/9) {
        #video-bg {
            object-fit: cover;
            width:auto;
            height: 100%;
        }
    }
    @media (max-width: 767px) {
        #video-bg {
            display: none;
        }
    }
</style>
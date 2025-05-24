document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('video-background');
    
    function handleVideoPlayback() {
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
            })
            .catch(error => {
                video.style.display = 'none';
                document.body.style.background = 'linear-gradient(to bottom, var(--blue), var(--black))';
            });
        }
    }
    
    handleVideoPlayback();
    
    video.onerror = function() {
        video.style.display = 'none';
        document.body.style.background = 'linear-gradient(to bottom, var(--blue), var(--black))';
    };
});
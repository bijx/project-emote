const video = document.getElementById('video')

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcobject = stream,
        err => console.error(err)
    )
}

startVideo()
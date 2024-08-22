function getParameterByName(name) {
    const url = window.location.href;
    const paramValue = new URL(url).searchParams.get(name);
    return paramValue ? paramValue : '';
}

function setVideoUrl(videoId) {
    document.getElementById('videoFrame').src = `https://www.youtube.com/embed/${videoId}`;
}

const videoId = getParameterByName('video_id');
if (videoId) {
    setVideoUrl(videoId);
}

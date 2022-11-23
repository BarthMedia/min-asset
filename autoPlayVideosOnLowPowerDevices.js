(() => {
    let e = document.querySelectorAll('[bmg_video = "embed"] > video'),
        d = "undefined";
    for (videoElement of ((index = 0), e))
        index++,
            videoElement.addEventListener("suspend", () => {
                d = !1;
            }),
            videoElement.addEventListener("play", () => {
                d = !0;
            });
    $("body").on("click touchstart", function () {
        if (!d) for (videoElement of e) videoElement.play();
    });
})();

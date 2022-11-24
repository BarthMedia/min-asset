(() => {
    let e = document.querySelectorAll("[playsinline], [autoplay]"),
        n = "undefined";
    for (videoElement of e)
        videoElement.addEventListener("suspend", () => {
            n = !1;
        }),
            videoElement.addEventListener("play", () => {
                n = !0;
            });
    $("body").on("click touchstart", function () {
        if (!1 == n) {
            for (videoElement of e) videoElement.play();
            n = "granted";
        }
    });
})();

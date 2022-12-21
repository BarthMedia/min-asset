$('[bmg-element = "Plus Dragger Step"]').each(function () {
    let e = $(this),
        t = e.find(".fs-rangeslider_handle"),
        n = [];
    t.each(function (t) {
        let l = `[fs-rangeslider-element = "${"display-value" + (t > 0 ? `-${t + 1}` : "")}"]`;
        $(this);
        let i = e.find(l);
        n.push(i);
    }),
        e.bind("touchmove mousemove", (e) => {
            n.forEach((e) => {
                "1,000,000" == e.text() && e.text("1,000,000+");
            });
        });
});

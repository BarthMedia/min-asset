(() => {
    let t = '[bmg-custom-list = "month"]',
        e = ".w-dyn-item",
        o = ".journey_tab-link",
        r = "is--current",
        s = ".journey_tab-upper",
        a = '[bmg-custom-list = "journeyTabCurrentParent"]';
    function d(t, e) {
        t.css("scroll-snap-type", "none"), t.stop().animate({ scrollLeft: e }, 700, () => t.css("scroll-snap-type", "x mandatory"));
    }
    function c(t) {
        let e = [];
        return (
            t.each(function (t) {
                e.push({ $: $(this), name: $(this).find(".text-size-large").text() });
            }),
            e
        );
    }
    $(".w-dyn-list").each(function () {
        let l = $(this).find(".w-dyn-items"),
            p = $(this).parent().find(".journey_tabs-menu");
        ($tabs = p.find(o)),
            ($prevButton = $(this).parent().find('[bmg-custom-list = "prev"]')),
            ($nextButton = $(this).parent().find('[bmg-custom-list = "next"]')),
            ($nextSlideText = $(this).parent().find('[bmg-custom-list = "next-slide"]'));
        let u,
            f,
            h,
            m = c($tabs),
            b = 0,
            y,
            x;
        function _() {
            (u = $(window).width()), (f = l.find(e).length), (y = $tabs.width()), (x = p[0].scrollWidth - u);
        }
        function g(t) {
            d(l, Math.min(Math.max((h += t), 0), f - 1) * u);
        }
        function w() {
            h = l.scrollLeft() / u;
            let d = l.find(e).eq(h),
                c = d.find(t).text();
            for (
                newSlideNextText = `${h + 2}/${f} - ${(nextCategoryText = ($nextDynItem = d.next()).find('[bmg-custom-list = "category"]').text())}`,
                    $nextSlideText.text(newSlideNextText),
                    f <= 1
                        ? (gsap.set($nextSlideText.parent()[0], { opacity: 0 }), gsap.to($nextButton[0], { opacity: 0, pointerEvents: "none", duration: 0.35 }), gsap.to($prevButton[0], { opacity: 0, pointerEvents: "auto", duration: 0.35 }))
                        : h + 1 >= f
                        ? (gsap.set($nextSlideText.parent()[0], { opacity: 0 }), gsap.to($nextButton[0], { opacity: 0, pointerEvents: "none", duration: 0.35 }), gsap.to($prevButton[0], { opacity: 1, pointerEvents: "auto", duration: 0.35 }))
                        : h > 0
                        ? (gsap.to($nextSlideText.parent()[0], { opacity: 1, duration: 0.35 }),
                          gsap.to($nextButton[0], { opacity: 1, pointerEvents: "auto", duration: 0.35 }),
                          gsap.to($prevButton[0], { opacity: 1, pointerEvents: "auto", duration: 0.35 }))
                        : (gsap.to($nextSlideText.parent()[0], { opacity: 1, duration: 0.35 }),
                          gsap.to($nextButton[0], { opacity: 1, pointerEvents: "auto", duration: 0.35 }),
                          gsap.to($prevButton[0], { opacity: 0, pointerEvents: "none", duration: 0.35 })),
                    i = 0,
                    n = m.length;
                i < n;
                i++
            )
                if (m[i].name == c || "" == c) {
                    let p = $tabs.find(a);
                    p.each(function (t) {
                        if (t != i) {
                            let e = $(this).closest(o),
                                r = e.find(s);
                            e.css({ "border-left-width": "1px" }),
                                e.hasClass("is--last") || e.css({ "border-right-width": "0px" }),
                                gsap.to($(this)[0], { height: 0, duration: 0.35 }),
                                gsap.to(r[0], { opacity: 1, duration: 0.35 }),
                                gsap.to(e[0], { borderTopWidth: 1, borderTopColor: "rgba(255, 255, 255, 0.2)", duration: 0.35 });
                        }
                    });
                    let y = p.closest(o).eq(b);
                    y.css({ "border-left-width": "1px", "border-right-width": "1px" }), y.next().css({ "border-left-width": "0px" }), y.removeClass(r), (b = i);
                    let x = m[i].$.find(a),
                        _ = x.closest(o),
                        g = _.find(s);
                    _.addClass(r),
                        _.prev().css({ "border-right-width": "0px" }),
                        _.css({ "border-left-width": "1px", "border-right-width": "1px" }),
                        _.next().css({ "border-left-width": "0px" }),
                        gsap.to(x[0], { height: "auto", duration: 0.35 }),
                        gsap.to(g[0], { opacity: 0, duration: 0.35 }),
                        gsap.to(_[0], { borderTopWidth: 3, borderTopColor: "#fff", duration: 0.35 }),
                        v(i, !1);
                    break;
                }
        }
        function v(o, r) {
            if (((eventCount = parseInt($tabs.eq(o).find('[fs-countitems-element = "value"]').text())), p.stop().animate({ scrollLeft: Math.min(y * o, x) }, 700), r && eventCount)) {
                let s = l.find(e),
                    a = m[o].name,
                    c = 0;
                s.each(function (e) {
                    if (("" == $(this).find(t).text() ? m[0].name : $(this).find(t).text()) == a) return (c = e), !1;
                }),
                    d(l, c * u);
            }
        }
        $(window).resize(_),
            l.click(() => {
                _(), w();
            }),
            _(),
            w(),
            l.scroll(function () {
                l.scrollLeft() % u == 0 && w();
            }),
            $prevButton.click(() => {
                g(-1);
            }),
            $nextButton.click(() => {
                g(1);
            }),
            $tabs.each(function (t) {
                $(this).click(() => {
                    v(t, !0);
                });
            });
    });
})();

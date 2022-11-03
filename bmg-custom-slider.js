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
            u = $(this).parent().find(".journey_tabs-menu");
        ($tabs = u.find(o)),
            ($prevButton = $(this).parent().find('[bmg-custom-list = "prev"]')),
            ($nextButton = $(this).parent().find('[bmg-custom-list = "next"]')),
            ($nextSlideText = $(this).parent().find('[bmg-custom-list = "next-slide"]'));
        let f,
            p,
            h,
            m = c($tabs),
            b = 0,
            x,
            y;
        function _() {
            (f = $(window).width()), (p = l.find(e).length), (x = $tabs.width()), (y = u[0].scrollWidth - f);
        }
        function g(t) {
            d(l, Math.min(Math.max((h += t), 0), p - 1) * f);
        }
        function w() {
            h = l.scrollLeft() / f;
            let d = l.find(e).eq(h),
                c = d.find(t).text();
            for (
                newSlideNextText = `${h + 2}/${p} - ${(nextCategoryText = ($nextDynItem = d.next()).find('[bmg-custom-list = "category"]').text())}`,
                    $nextSlideText.text(newSlideNextText),
                    h + 1 >= p
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
                    let u = $tabs.find(a);
                    u.each(function (t) {
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
                    let x = u.closest(o).eq(b);
                    x.css({ "border-left-width": "1px", "border-right-width": "1px" }), x.next().css({ "border-left-width": "0px" }), x.removeClass(r), (b = i);
                    let y = m[i].$.find(a),
                        _ = y.closest(o),
                        g = _.find(s);
                    _.addClass(r),
                        _.prev().css({ "border-right-width": "0px" }),
                        _.css({ "border-left-width": "1px", "border-right-width": "1px" }),
                        _.next().css({ "border-left-width": "0px" }),
                        gsap.to(y[0], { height: "auto", duration: 0.35 }),
                        gsap.to(g[0], { opacity: 0, duration: 0.35 }),
                        gsap.to(_[0], { borderTopWidth: 3, borderTopColor: "#fff", duration: 0.35 }),
                        v(i, !1);
                    break;
                }
        }
        function v(o, r) {
            if (((eventCount = parseInt($tabs.eq(o).find('[fs-countitems-element = "value"]').text())), u.stop().animate({ scrollLeft: Math.min(x * o, y) }, 700), r && eventCount)) {
                let s = l.find(e),
                    a = m[o].name,
                    c = 0;
                s.each(function (e) {
                    if (("" == $(this).find(t).text() ? m[0].name : $(this).find(t).text()) == a) return (c = e), !1;
                }),
                    d(l, c * f);
            }
        }
        $(window).resize(_),
            l.click(() => {
                _(), w();
            }),
            _(),
            w(),
            l.scroll(function () {
                l.scrollLeft() % f == 0 && w();
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

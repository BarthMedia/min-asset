(() => {
    let t = '[bmg-custom-list = "month"]',
        e = '[bmg-custom-list = "category"]',
        o = ".w-dyn-item";
    function r(e, r) {
        let a = f(e);
        for (
            r.find(o).each(function () {
                let e = $(this).find(t).text();
                for (i = 0, n = a.length; i < n; i++) a[i].name == e && a[i].eventCount++;
            }),
                i = 0,
                n = a.length;
            i < n;
            i++
        ) {
            let u = a[i].$eventCounter,
                l = { val: parseInt(u.text()) };
            gsap.to(l, {
                duration: 1,
                ease: "power4.out",
                val: a[i].eventCount,
                onUpdate: function () {
                    u.text(l.val.toFixed(0));
                },
            });
        }
    }
    function a(t, r, a, f) {
        t.find(o).each(function () {
            let o = $(this).find(e),
                l = o.text();
            if (
                (o.parent().click(function () {
                    u(t, r, l, f);
                }),
                "month" != a)
            ) {
                0 == o.parent().next().length &&
                    o.parent().parent().append(`<div bmg-custom-list="reset" data-alt="${l} reseter." style="display: inline-block; margin-left: 1.125rem; text-decoration: underline; cursor: pointer">Back to All Events</div>`);
                let c = o.parent().next();
                gsap.to(o[0], { color: "#172031", duration: 0.35 }),
                    gsap.to(o.parent()[0], { backgroundColor: "#fff", duration: 0.35 }),
                    gsap.fromTo(c[0], { color: "rgba(255, 255, 255, 0.0)" }, { color: "rgba(255, 255, 255, 1.0)", duration: 0.35 }),
                    c.click(function () {
                        t.find('[bmg-custom-list = "reset"]').remove(),
                            t.find(e).each(function () {
                                gsap.to($(this)[0], { color: "#fff", duration: 0.35 }), gsap.to($(this).parent()[0], { backgroundColor: "rgba(255, 255, 255, 0.1)", duration: 0.35 });
                            }),
                            u(t, r, "month", f);
                    });
            }
        });
    }
    function u(t, e, o, u) {
        for (t.empty(), i = 0, n = e.length; i < n; i++) ("month" == o || e[i].category == o) && t.append(e[i].$);
        a(t, e, o, u), r(u, t);
    }
    function f(t) {
        let e = [];
        return (
            t.find(".journey_tab-link").each(function (t) {
                e.push({ $: $(this), name: $(this).find(".text-size-large").text(), $eventCounter: $(this).find('[fs-countitems-element = "value"]'), eventCount: 0 });
            }),
            e
        );
    }
    function l(o, r) {
        let a = f(r),
            u = [];
        return (
            o.each(function () {
                let o = $(this).find(t).text();
                u.push({ $: $(this), sortNum: c(o, a), month: "" != o ? o : a[0].name, category: $(this).find(e).text() });
            }),
            u.sort((t, e) => (t.sortNum > e.sortNum ? 1 : e.sortNum > t.sortNum ? -1 : 0)),
            u
        );
    }
    function c(t, e) {
        for (i = 0, n = e.length; i < n; i++) if (e[i].name == t) return i;
        return 0;
    }
    $(".w-dyn-list").each(function () {
        let t = $(this);
        ($list = t.find(".w-dyn-items")), ($prevButton = t.parent().find(prevButtonSelector)), ($nextButton = t.parent().find(nextButtonSelector)), ($tabsMenu = t.parent().find(".journey_tabs-menu"));
        u($list, l(t.find(o), $tabsMenu), "month", $tabsMenu);
    });
})();

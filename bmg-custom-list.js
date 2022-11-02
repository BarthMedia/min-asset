(() => {
    let t = '[bmg-custom-list = "month"]',
        e = '[bmg-custom-list = "category"]',
        o = ".w-dyn-item";
    function r(e, r) {
        let u = f(e);
        for (
            r.find(o).each(function () {
                let e = $(this).find(t).text();
                for (i = 0, n = u.length; i < n; i++) u[i].name == e && u[i].eventCount++;
            }),
                i = 0,
                n = u.length;
            i < n;
            i++
        ) {
            let a = u[i].$eventCounter,
                l = { val: parseInt(a.text()) };
            gsap.to(l, {
                duration: 1,
                ease: "power4.out",
                val: u[i].eventCount,
                onUpdate: function () {
                    a.text(l.val.toFixed(0));
                },
            });
        }
    }
    function u(t, r, u, f) {
        t.find(o).each(function () {
            let o = $(this).find(e),
                l = o.text();
            if (
                (o.parent().click(function () {
                    a(t, r, l, f);
                }),
                "month" != u)
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
                            a(t, r, "month", f);
                    });
            }
        });
    }
    function a(t, e, o, a) {
        for (t.empty(), i = 0, n = e.length; i < n; i++) ("month" == o || e[i].category == o) && t.append(e[i].$);
        u(t, e, o, a), r(a, t);
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
        let u = f(r),
            a = [];
        return (
            o.each(function () {
                let o = $(this).find(t).text();
                a.push({ $: $(this), sortNum: c(o, u), month: "" != o ? o : u[0].name, category: $(this).find(e).text() });
            }),
            a.sort((t, e) => (t.sortNum > e.sortNum ? 1 : e.sortNum > t.sortNum ? -1 : 0)),
            a
        );
    }
    function c(t, e) {
        for (i = 0, n = e.length; i < n; i++) if (e[i].name == t) return i;
        return 0;
    }
    $(".w-dyn-list").each(function () {
        let t = $(this);
        ($list = t.find(".w-dyn-items")), ($tabsMenu = t.parent().find(".journey_tabs-menu"));
        a($list, l(t.find(o), $tabsMenu), "month", $tabsMenu);
    });
})();

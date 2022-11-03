(() => {
    let t = '[bmg-custom-list = "month"]',
        e = '[bmg-custom-list = "category"]',
        o = ".w-dyn-item",
        r = '[bmg-custom-list = "journeyTabCurrentParent"]';
    function u(t) {
        t.find(r).remove(),
            t.each(function () {
                $(this).prepend(`
            <div ${r.slice(0, -1).substring(1)} style="height: 0px; overflow: hidden;">
                <div class="${".journey_tab-current".substring(1)}">
                    <div ${'[bmg-custom-list = "journeyTabCurrentText"]'.slice(0, -1).substring(1)} class="text-size-tiny">
                        replace.
                        <br>
                        me.
                    </div>
                </div>
            </div>
        `);
            });
    }
    function s(e, r) {
        let u = l(e);
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
            let s = u[i].$eventCounter,
                a = { val: parseInt(s.text()) };
            gsap.to(a, {
                duration: 1,
                ease: "power4.out",
                val: u[i].eventCount,
                onUpdate: function () {
                    s.text(a.val.toFixed(0));
                },
            });
        }
    }
    function a(t, r, u, s) {
        t.find(o).each(function () {
            let o = $(this).find(e),
                a = o.text();
            if (
                (o.parent().click(function () {
                    c(t, r, a, s);
                }),
                "month" != u)
            ) {
                0 == o.parent().next().length &&
                    o.parent().parent().append(`<div bmg-custom-list="reset" data-alt="${a} reseter." style="display: inline-block; margin-left: 1.125rem; text-decoration: underline; cursor: pointer">Back to All Events</div>`);
                let l = o.parent().next();
                gsap.to(o[0], { color: "#172031", duration: 0.35 }),
                    gsap.to(o.parent()[0], { backgroundColor: "#fff", duration: 0.35 }),
                    gsap.fromTo(l[0], { color: "rgba(255, 255, 255, 0.0)" }, { color: "rgba(255, 255, 255, 1.0)", duration: 0.35 }),
                    l.click(function () {
                        t.find('[bmg-custom-list = "reset"]').remove(),
                            t.find(e).each(function () {
                                gsap.to($(this)[0], { color: "#fff", duration: 0.35 }), gsap.to($(this).parent()[0], { backgroundColor: "rgba(255, 255, 255, 0.1)", duration: 0.35 });
                            }),
                            c(t, r, "month", s);
                    });
            }
        });
    }
    function c(t, e, o, r) {
        for (t.empty(), i = 0, n = e.length; i < n; i++) ("month" == o || e[i].category == o) && t.append(e[i].$);
        a(t, e, o, r), s(r, t);
    }
    function l(t) {
        let e = [];
        return (
            t.find(".journey_tab-link").each(function (t) {
                e.push({ $: $(this), name: $(this).find(".text-size-large").text(), $eventCounter: $(this).find('[fs-countitems-element = "value"]'), eventCount: 0 });
            }),
            e
        );
    }
    function f(o, r) {
        let u = l(r),
            s = [];
        return (
            o.each(function () {
                let o = $(this).find(t).text();
                s.push({ $: $(this), sortNum: d(o, u), month: "" != o ? o : u[0].name, category: $(this).find(e).text() });
            }),
            s.sort((t, e) => (t.sortNum > e.sortNum ? 1 : e.sortNum > t.sortNum ? -1 : 0)),
            s
        );
    }
    function d(t, e) {
        for (i = 0, n = e.length; i < n; i++) if (e[i].name == t) return i;
        return 0;
    }
    $(".w-dyn-list").each(function () {
        let t = $(this);
        ($list = t.find(".w-dyn-items")), ($tabsMenu = t.parent().find(".journey_tabs-menu")), u($tabs);
        c($list, f(t.find(o), $tabsMenu), "month", $tabsMenu);
    });
})();

(() => {
    let t = '[bmg-custom-list = "month"]',
        e = '[bmg-custom-list = "category"]',
        o = ".w-dyn-item";
    function r(t) {
        t.find(journeyTabCurrentTextParentSelector).remove(),
            t.each(function () {
                $(this).prepend(`
            <div ${journeyTabCurrentTextParentSelector.slice(0, -1).substring(1)} style="height: 0px; overflow: hidden;">
                <div class="${journeyTabCurrentTextWrapperSelector.substring(1)}">
                    <div ${journeyTabCurrentTextSelector.slice(0, -1).substring(1)} class="text-size-tiny">
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
        let s = c(e);
        for (
            r.find(o).each(function () {
                let e = $(this).find(t).text();
                for (i = 0, n = s.length; i < n; i++) s[i].name == e && s[i].eventCount++;
            }),
                i = 0,
                n = s.length;
            i < n;
            i++
        ) {
            let u = s[i].$eventCounter,
                a = { val: parseInt(u.text()) };
            gsap.to(a, {
                duration: 1,
                ease: "power4.out",
                val: s[i].eventCount,
                onUpdate: function () {
                    u.text(a.val.toFixed(0));
                },
            });
        }
    }
    function u(t, r, s, u) {
        t.find(o).each(function () {
            let o = $(this).find(e),
                c = o.text();
            if (
                (o.parent().click(function () {
                    a(t, r, c, u);
                }),
                "month" != s)
            ) {
                0 == o.parent().next().length &&
                    o.parent().parent().append(`<div bmg-custom-list="reset" data-alt="${c} reseter." style="display: inline-block; margin-left: 1.125rem; text-decoration: underline; cursor: pointer">Back to All Events</div>`);
                let l = o.parent().next();
                gsap.to(o[0], { color: "#172031", duration: 0.35 }),
                    gsap.to(o.parent()[0], { backgroundColor: "#fff", duration: 0.35 }),
                    gsap.fromTo(l[0], { color: "rgba(255, 255, 255, 0.0)" }, { color: "rgba(255, 255, 255, 1.0)", duration: 0.35 }),
                    l.click(function () {
                        t.find('[bmg-custom-list = "reset"]').remove(),
                            t.find(e).each(function () {
                                gsap.to($(this)[0], { color: "#fff", duration: 0.35 }), gsap.to($(this).parent()[0], { backgroundColor: "rgba(255, 255, 255, 0.1)", duration: 0.35 });
                            }),
                            a(t, r, "month", u);
                    });
            }
        });
    }
    function a(t, e, o, r) {
        for (t.empty(), i = 0, n = e.length; i < n; i++) ("month" == o || e[i].category == o) && t.append(e[i].$);
        u(t, e, o, r), s(r, t);
    }
    function c(t) {
        let e = [];
        return (
            t.find(".journey_tab-link").each(function (t) {
                e.push({ $: $(this), name: $(this).find(".text-size-large").text(), $eventCounter: $(this).find('[fs-countitems-element = "value"]'), eventCount: 0 });
            }),
            e
        );
    }
    function l(o, r) {
        let s = c(r),
            u = [];
        return (
            o.each(function () {
                let o = $(this).find(t).text();
                u.push({ $: $(this), sortNum: f(o, s), month: "" != o ? o : s[0].name, category: $(this).find(e).text() });
            }),
            u.sort((t, e) => (t.sortNum > e.sortNum ? 1 : e.sortNum > t.sortNum ? -1 : 0)),
            u
        );
    }
    function f(t, e) {
        for (i = 0, n = e.length; i < n; i++) if (e[i].name == t) return i;
        return 0;
    }
    $(".w-dyn-list").each(function () {
        let t = $(this);
        ($list = t.find(".w-dyn-items")), ($tabsMenu = t.parent().find(".journey_tabs-menu")), r($tabs);
        a($list, l(t.find(o), $tabsMenu), "month", $tabsMenu);
    });
})();

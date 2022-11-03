(() => {
    let t = '[bmg-custom-list = "month"]',
        e = '[bmg-custom-list = "category"]',
        o = ".w-dyn-item",
        r = ".journey_tab-link",
        s = '[bmg-custom-list = "journeyTabCurrentParent"]',
        u = '[bmg-custom-list = "journeyTabCurrentText"]';
    function a(t, e) {
        let o = m(e);
        for (i = 0, n = o.length; i < n; i++) {
            let r = o[i].$.find(u),
                s = r.text().substring(6).split("$X$X$X"),
                a = s.length,
                l = "",
                c = 0;
            for (i2 = 0, n2 = a; i2 < n2; i2++) {
                let f = s[i2],
                    d = 0;
                for (i3 = 0, n3 = n2; i3 < n3; i3++) s[i3] == f && (d++, (s[i3] = ""));
                "" != f && s.push({ name: f, count: d });
            }
            for (s.splice(0, a), a = s.length, i2 = 0, n2 = a; i2 < n2; i2++) {
                let h = s[i2].count,
                    g = s[i2].name;
                i2 < 2 ? (h <= 1 ? (l += ", " + g) : (l += ", (" + h + "\xd7) " + g)) : (c += h);
            }
            (l = l.substring(2) + (c > 0 ? ",<br>+ " + c + " more" : "")), r.html(l);
        }
    }
    function l(t) {
        t.find(s).remove(),
            t.each(function () {
                $(this).prepend(`
            <div ${s.slice(0, -1).substring(1)} style="height: 0px; overflow: hidden;">
                <div class="${".journey_tab-current".substring(1)}">
                    <div ${u.slice(0, -1).substring(1)} class="text-size-tiny">
                        replace.
                        <br>
                        me.
                    </div>
                </div>
            </div>
        `);
            });
    }
    function c(r, s) {
        let a = m(r);
        for (
            s.find(o).each(function () {
                let o = $(this).find(t).text(),
                    r = $(this).find(e).text();
                for (i = 0, o = "" != o ? o : a[0].name, n = a.length; i < n; i++) a[i].name == o && (a[i].eventCount++, (a[i].eventCategoriesString += "$X$X$X" + r));
            }),
                i = 0,
                n = a.length;
            i < n;
            i++
        ) {
            let l = a[i].$eventCounter,
                c = { val: parseInt(l.text()) },
                f = a[i].eventCategoriesString;
            a[i].$.find(u).text(f),
                gsap.to(c, {
                    duration: 1,
                    ease: "power4.out",
                    val: a[i].eventCount,
                    onUpdate: function () {
                        l.text(c.val.toFixed(0));
                    },
                });
        }
    }
    function f(t, r, s, u) {
        t.find(o).each(function () {
            let o = $(this).find(e),
                a = o.text();
            if (
                (o.parent().click(function () {
                    d(t, r, a, u);
                }),
                "month" != s)
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
                            d(t, r, "month", u);
                    });
            }
        });
    }
    function d(t, e, o, r) {
        for (t.empty(), i = 0, n = e.length; i < n; i++) ("month" == o || e[i].category == o) && t.append(e[i].$);
        f(t, e, o, r), c(r, t);
    }
    function m(t) {
        let e = [];
        return (
            t.find(r).each(function (t) {
                e.push({ $: $(this), name: $(this).find(".text-size-large").text(), $eventCounter: $(this).find('[fs-countitems-element = "value"]'), eventCount: 0, eventCategoriesString: "" });
            }),
            e
        );
    }
    function h(o, r) {
        let s = m(r),
            u = [];
        return (
            o.each(function () {
                let o = $(this).find(t).text();
                u.push({ $: $(this), sortNum: g(o, s), month: "" != o ? o : s[0].name, category: $(this).find(e).text() });
            }),
            u.sort((t, e) => (t.sortNum > e.sortNum ? 1 : e.sortNum > t.sortNum ? -1 : 0)),
            u
        );
    }
    function g(t, e) {
        for (i = 0, n = e.length; i < n; i++) if (e[i].name == t) return i;
        return 0;
    }
    $(".w-dyn-list").each(function () {
        let t = $(this);
        ($list = t.find(".w-dyn-items")), l(($tabsMenu = t.parent().find(".journey_tabs-menu")).find(r));
        d($list, h(t.find(o), $tabsMenu), "month", $tabsMenu),
            a($list, $tabsMenu),
            $list.click(() => {
                a($list, $tabsMenu);
            });
    });
})();

(() => {
    let t = '[bmg-uwsc = "Mask"]';
    $("head").append(`
<!-- Universal webflow slider styles -->
<style>
/* Add native CSS animation for smooth snapping when scrolling */
${t} {
	scroll-snap-type: x mandatory
}
${t} > * {
	scroll-snap-align: center;
}
</style>
`),
        $('[bmg-uwsc = "Slider"]').each(function () {
            let s = $(this),
                n = s.find(t),
                e = s.find('[bmg-uwsc = "Left Arrow"]'),
                r = s.find('[bmg-uwsc = "Right Arrow"]'),
                o = s.find('[bmg-uwsc = "Slide Nav"]'),
                i = o.children().eq(1).clone(),
                c = o.children().eq(0).css({ cursor: "default" }).clone(),
                a = n.children().length,
                l = parseInt(s.attr("[bmg-uwsc-animation-time]") || 350),
                u = !s.attr("[bmg-uwsc-slides-outer-width]"),
                d = { opacity: s.attr("[bmg-uwsc-arrow-opacity]") || 0.5, "transition-property": "opacity", "transition-duration": l + "ms", "transition-timing-function": "ease", cursor: "default" },
                f = { opacity: 1, "transition-property": "opacity", "transition-duration": l + "ms", "transition-timing-function": "ease", cursor: "pointer" },
                p = 0;
            function m(t) {
                (p = t), g.removeClass(y).addClass(w).css({ cursor: "pointer" }), g.eq(t).removeClass(w).addClass(y).css({ cursor: "default" }), 0 == t ? (e.css(d), r.css(f)) : t == a - 1 ? (e.css(f), r.css(d)) : (e.css(f), r.css(f));
            }
            if (
                (e.css(d),
                a <= 1 && r.css(d),
                e.click(() => {
                    p - 1 >= 0 && p--, C(p);
                }),
                r.click(() => {
                    p + 1 < a && p++, C(p);
                }),
                n.scroll(function () {
                    if ("Do not return." != _)
                        for (let t = 0, s = a; t < s; t++) {
                            let e = n.scrollLeft() - _[t];
                            e >= -1 && e <= 1 && m(t);
                        }
                    else v();
                }),
                "off" != o.attr("bmg-uwsc-auto-dots"))
            ) {
                o.empty(), o.append(c);
                for (let h = 1; h < a; h++) o.append(i.clone());
            }
            let g = o.children(),
                w = i.attr("class"),
                y = c.attr("class");
            g.each(function (t) {
                $(this).click(() => {
                    C(t);
                });
            });
            let _ = "Do not return.",
                b;
            function v() {
                if ("Do not return." != _) return;
                (_ = [0]),
                    (b = 0),
                    n.children().each(function () {
                        (b += $(this).outerWidth(u)), _.push(b);
                    });
                let t = Math.round((n[0].scrollWidth - b) / (a - 1));
                for (let s = 1, e = a; s < e; s++) _[s] += t * s;
            }
            function C(t) {
                v();
                let s = _[t];
                n.css("scroll-snap-type", "none"), n.stop().animate({ scrollLeft: s }, l, () => n.css("scroll-snap-type", "x mandatory"));
            }
            $(window).resize(() => {
                _ = "Do not return.";
            });
        });
})();

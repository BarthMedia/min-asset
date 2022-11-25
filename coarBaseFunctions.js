(() => {
    let t = "[bmg-arco-button]";
    function e(t) {
        let e = new Date(t),
            a = e.toLocaleString("default", { month: "long" }),
            o = e.getDate();
        return `${a} ${o}${n(o)}, ${e.getFullYear()}`;
    }
    function n(t) {
        switch (t % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }
    $('[bmg-arco = "c-list"]').each(function () {
        let n = $(this),
            a = n.find('[bmg-arco = "c-list-item"]').eq(0).clone(),
            o = new XMLHttpRequest();
        o.open("GET", "https://xju6-kpzy-l8vj.n7.xano.io/api:4lTavcfO/component_list", !0),
            (o.onload = function () {
                let s = JSON.parse(this.response);
                o.status >= 200 && o.status < 400
                    ? (n.empty(),
                      s.forEach((o) => {
                          let s = a.clone(),
                              c = s.find('[bmg-arco = "thumbnail"]'),
                              r = s.find(t),
                              l = s.find('[bmg-arco = "name"]'),
                              u = s.find('[bmg-arco = "date"]');
                          c.attr("src", o.thumbnail.url), i(r, o.id, o.platforms_in_use), l.text(o.name), u.text(e(o.created_at)), n.append(s);
                      }),
                      n.attr("bmg-arco-load-status", "loaded"))
                    : n.attr("bmg-arco-load-status", o.status);
            }),
            o.send();
    });
    let a = "https://xju6-kpzy-l8vj.n7.xano.io/api:4lTavcfO/component_list/",
        o = "",
        s = "";
    function c(t, e, n) {
        let c = t.find("img").clone();
        function i(e) {
            setTimeout(function () {
                t.text(e),
                    setTimeout(function () {
                        t.empty(), t.append(c), t.css({ "pointer-events": "auto" });
                    }, 1500);
            }, 1500);
        }
        t.click(() => {
            let c = new XMLHttpRequest();
            t.css({ "pointer-events": "none" }),
                t.empty(),
                t.text("Copying..."),
                c.open("GET", a + n, !0),
                (c.onload = function () {
                    let t = JSON.parse(this.response);
                    c.status >= 200 && c.status < 400 ? ((o = t[e]), (s = "{" == t[e].charAt(0) ? "application/json" : "text/html"), document.execCommand("copy"), i("Copied!")) : i(`Error: ${c.status}`);
                }),
                c.send();
        });
    }
    function i(e, n, a) {
        e.each(function () {
            let e = $(this).attr(r(t)) || "none";
            a.includes(e) ? c($(this), e, n) : $(this).remove();
        });
    }
    function r(t) {
        return t.replace(/\[/g, "").replace(/\]/g, "");
    }
    document.addEventListener("copy", (t) => {
        t.clipboardData.setData(s, o), t.preventDefault();
    });
})();

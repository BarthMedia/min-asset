(() => {
    let t = "[bmg-arco-button]";
    $('[bmg-arco = "c-list"]').each(function () {
        let e = $(this),
            n = e.find('[bmg-arco = "c-list-item"]').eq(0).clone(),
            a = new XMLHttpRequest();
        a.open("GET", "https://x8ki-letl-twmt.n7.xano.io/api:4lTavcfO/component_list", !0),
            (a.onload = function () {
                let o = JSON.parse(this.response);
                a.status >= 200 && a.status < 400
                    ? (e.empty(),
                      o.forEach((a) => {
                          let o = n.clone(),
                              i = o.find('[bmg-arco = "thumbnail"]'),
                              c = o.find(t),
                              l = o.find('[bmg-arco = "name"]'),
                              r = o.find('[bmg-arco = "date"]');
                          i.attr("src", a.thumbnail.url), s(c, a.id, a.platforms_in_use), l.text(a.name), r.text(a.created_at), e.append(o);
                      }),
                      e.attr("bmg-arco-load-status", "loaded"))
                    : e.attr("bmg-arco-load-status", a.status);
            }),
            a.send();
    });
    let e = "https://x8ki-letl-twmt.n7.xano.io/api:4lTavcfO/component_list/",
        n = "",
        a = "";
    function o(t, o, s) {
        let i = t.find("img").clone();
        function c(e) {
            setTimeout(function () {
                t.text(e),
                    setTimeout(function () {
                        t.empty(), t.append(i), t.css({ "pointer-events": "auto" });
                    }, 1500);
            }, 1500);
        }
        t.click(() => {
            let i = new XMLHttpRequest();
            t.css({ "pointer-events": "none" }),
                t.empty(),
                t.text("Copying..."),
                i.open("GET", e + s, !0),
                (i.onload = function () {
                    let t = JSON.parse(this.response);
                    i.status >= 200 && i.status < 400 ? ((n = t[o]), (a = "{" == t[o].charAt(0) ? "application/json" : "text/html"), document.execCommand("copy"), c("Copied!")) : c(`Error: ${i.status}`);
                }),
                i.send();
        });
    }
    function s(e, n, a) {
        e.each(function () {
            let e = $(this).attr(i(t)) || "none";
            a.includes(e) ? o($(this), e, n) : $(this).remove();
        });
    }
    function i(t) {
        return t.replace(/\[/g, "").replace(/\]/g, "");
    }
    document.addEventListener("copy", (t) => {
        t.clipboardData.setData(a, n), t.preventDefault();
    });
})();

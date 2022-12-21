(() => {
    let t = '[bmg-element = "Input"]';
    function e(t, e, n) {
        t.text(n), e.val(n), e.attr("value", n);
    }
    $('[bmg-element = "Quantity Wrapper"]').each(function () {
        let n = $(this),
            m = n.find('[bmg-element = "Left"]'),
            i = n.find('[bmg-element = "Right"]'),
            a = n.find('[bmg-element = "Number"]'),
            l = n.find(t);
        l = l.length < 1 ? n.find("input") : l;
        let g = parseFloat(i.attr("bmg-data-max")),
            b = parseFloat(m.attr("bmg-data-min") || 0),
            f = parseFloat(a.text());
        m.click(() => {
            f > b && f--, e(a, l, f);
        }),
            i.click(() => {
                (isNaN(g) || f < g) && f++, e(a, l, f);
            });
    });
})();

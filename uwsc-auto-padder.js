(()=>{let t=$("body").attr("bmg-data-model-container-selector")||".container-large",e=$("body").attr("bmg-data-model-container-selector")||".padding-global",a=$('[bmg-uwsc="Mask"]').not("[bmg-data-not-this-mask]"),d=$(t).eq(0),o=$(e).eq(0);function n(){let t=(o.outerWidth(!0)-d.outerWidth())/2;a.css({"padding-left":t,"padding-right":t})}n(),$(window).resize(n)})();

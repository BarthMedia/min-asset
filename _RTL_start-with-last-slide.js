(function(){let e=$('[bmg-slider="Start with last slide"]');function l(){e.each(function(){let e=$(this).find(".w-slider-nav"),l=e.children().length-1;e.children().eq(l).click()})}function i(){let n=e.eq(e.length-1),t=n.find(".w-slider-nav"),d=t.children().length;console.log(`Await Webflow slider dots...
Number of dots: ${d}`),d?l():setTimeout(i,100)}i()})();

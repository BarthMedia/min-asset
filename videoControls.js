$('[bmg_video = "wrapper"]').each(function(){let i=$(this).find('[bmg_video = "embed"]').find("video"),e=$(this).find('[bmg_video = "unmute"]'),d=$(this).find('[bmg_video = "mute"]'),n=0;i.parent().click(function(){0==n?(n++,i[0].pause()):(n--,i[0].play())}),e.click(function(){i[0].muted=!1,e.hide(),d.css({display:"flex"})}),d.click(function(){i[0].muted=!0,d.hide(),e.css({display:"flex"})})});

function showWork(){var e="."+$(this).children(".workButton").children("a").data("target");$("#popDownWrapper").css({height:$(e).outerHeight()+80+"px"}),isShowing&&e!=lastUsed?($(lastUsed).css({opacity:"0","z-index":"-1"}),$(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideRight")}).addClass("slideRight"),$(e).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromLeft")}).addClass("slideInFromLeft"),$(e).css({opacity:"1","z-index":"3"})):isShowing?($(lastUsed).css({opacity:"0","z-index":"-1"}),$(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideUp")}).addClass("slideUp"),$("#popDownWrapper").delay(100).queue(function(e){$(this).css("height","0"),e()}),isShowing=!1):($(e).css({opacity:"1","z-index":"3"}),$(e).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideDown")}).addClass("slideDown"),isShowing=!0),lastUsed=e}function scrollAnimations(){var e=$(window).scrollTop();whatBackground(e);var i=[["#resume"],[".eduTimeline h1"]],o=$(".projects").offset().top+$(window).height();e>o&&$("#contactSeparator").addClass("expandFromBottom20");for(var a=0;a<i.length;a++)for(var t=i[a],n=0;n<t.length;n++){var r=t[n];isFullyScrolledIntoView(r)&&$(r).addClass("appearFromBottom")}for(var l=$(".time"),a=0;a<l.length;a++){var r=l[a];isFullyScrolledIntoView(r)&&$(r).addClass(a%2==0?"appearFromRight":"appearFromLeft")}for(var s=$(".eduSummary .eduBorder"),a=0;a<s.length;a++){var r=s[a];isFullyScrolledIntoView(r)&&$(r).addClass("growToFull")}for(var d=$("#aboutText p"),a=0;a<d.length;a++){var r=d[a];isFullyScrolledIntoView(r)&&$(r).addClass("appearFromBottom")}for(var c=$(".eduSummary p"),a=0;a<c.length;a++){var r=c[a];isFullyScrolledIntoView(r)&&$(r).addClass("appearFromBottom")}isFullyScrolledIntoView(".eduSummary h1")&&$(".eduSummary h1").addClass("appearFromTop"),isFullyScrolledIntoView("#aboutMe")&&$("#aboutMe").addClass("appearFromLeft"),isFullyScrolledIntoView(".slideDir")&&$("#projImages").addClass("appearFromBottom"),$(".startscreen h1").addClass("appearFromBottom"),isFullyScrolledIntoView("#slideLeft")&&$("#slideLeft").addClass("appearFromLeft"),isFullyScrolledIntoView("#slideRight")&&$("#slideRight").addClass("appearFromRight"),isFullyScrolledIntoView("#profileImg")&&$("#profileImg").addClass("spinAppearance"),isFullyScrolledIntoView("#projectHeader")&&$("#projectHeader").addClass("appearFromRight"),isFullyScrolledIntoView(".expUpper > h1")&&$(".expUpper > h1").addClass("appearFromTop"),isFullyScrolledIntoView("#aboutSeparator")&&$("#aboutSeparator").addClass("expandFromBottom30"),isFullyScrolledIntoView("#eduTimelineWrapper .eduBorder")&&$("#eduTimelineWrapper .eduBorder").addClass("expand20"),isPartlyScrolledIntoView("#mac")&&$("#mac").addClass("appearFromRightInBackground");for(var p=$(".interestHolder"),a=0;a<p.length;a++){var r=p[a];isFullyScrolledIntoView(r)&&$(r).addClass(2>a?"appearFromLeft":"appearFromRight")}for(var m=$(".bigButton"),a=0;a<m.length;a++){var r=m[a];isFullyScrolledIntoView(r)&&$(r).addClass("slideDownBig"+a)}}function whatBackground(e){isPartlyScrolledIntoView(".projects")?$("#contact").show():($("#contact").hide(),isPartlyScrolledIntoView(".education")?$(".schoolImg").show():$(".schoolImg").hide())}function isPartlyScrolledIntoView(e){var i=$(e),o=$(window),a=o.scrollTop(),t=a+o.height(),n=i.offset().top+100,r=n+i.height()-100,l=r>t&&t>n,s=r>a&&a>n;return l||s||isFullyScrolledIntoView(e)}function isFullyScrolledIntoView(e){var i=$(e),o=$(window),a=o.scrollTop(),t=a+o.height(),n=i.offset().top,r=n+i.height();return t>=r&&n>=a}$(document).ready(function(){screen.height-80;$(document).on("click",".navbuttons",function(e){e.preventDefault();var i="#"+this.getAttribute("data-target");"#contact"==i?$("html, body").animate({scrollTop:$(document).height()},800,"linear"):$("html, body").animate({scrollTop:$(i).offset().top},800,"linear")}),$(".imageDiv").hover(function(){$(this).children(".imgText").delay(150),$(this).children(".imgText").children("p").delay(150),$(this).children(".imgText").animate({height:"20%"},200,"linear"),$(this).children(".imgText").children("p").animate({opacity:"1"},100,"linear")},function(){$(this).children(".imgText").animate({height:"0"},200,"linear"),$(this).children(".imgText").children("p").animate({opacity:"0"},100,"linear")}),$(window).scroll(scrollAnimations),scrollAnimations();var e=!0;$(".showNav").click(function(){e?($(".lowerMNavList > a").fadeIn(300),$(".lowerMNavList").slideDown(400,"linear"),e=!1):($(".lowerMNavList").slideUp(400,"linear"),$(".lowerMNavList > a").fadeOut(300),e=!0)}),$(".bigButton").on("click",showWork),$("#projImages a").on("click",function(){var e=this.getAttribute("data-target");$("#div"+i).hide(),i=e,$("#div"+i).fadeIn(2e3)});var i=4;$(".slideDir").on("click",function(){var e=$(this).attr("id");$("#div"+i).hide(),"slideRight"==e?(i-=1,0==i&&(i=4)):"slideLeft"==e&&(i+=1,5==i&&(i=1)),$("#div"+i).fadeIn(2e3)});var o,a=function(){window.innerWidth>668?(668>=o&&$("#contact").css({display:"block",position:"fixed",bottom:"0","z-index":"2"}),$(".projects").css({"margin-bottom":"660px"})):($(".projects").css({"margin-bottom":"0px"}),$("#contact").css({display:"block","z-index":"-1",position:"relative",bottom:"0"})),window.innerWidth<=925&&o>925?($("#navbar").fadeOut(600),$("#mobileNav").fadeIn(600)):window.innerWidth>925&&925>=o&&($("#mobileNav").fadeOut(600),$("#navbar").fadeIn(600)),o=window.innerWidth};a(),$(window).resize(a);var t=function(){$(".lowerMNavList").css({display:"-webkit-box",display:"-ms-flexbox",display:"-webkit-flex",display:"flex"}),$(".lowerMNavList").hide()},n=function(){$.browser.mozilla&&($(".eduPeriscope > div").removeClass("schoolImg"),$(".eduPeriscope").css({"background-image":'url("../images/zurich1.jpeg")',"background-position":"center center","background-attachment":"fixed","background-size":"cover"}))};n(),t();var r=$(window).scrollTop(),l="down";$(document).scroll(function(){var e=$("body").scrollTop(),i=r-e,o=$("#navbar").is(":hover");window.innerWidth>925&&("down"==l&&0>i&&e>200&&!o?($("#navbar").css({transform:"translateY(-75px)"}),l="up"):"up"==l&&(i>20||200>e)&&($("#navbar").css({transform:"translateY(0px)"}),l="down")),$(".scrollToTop").css(e>200&&window.innerWidth>668?{transform:"translateY(-100px)"}:{transform:"translateY(100px)"}),r=e})});var lastUsed,isShowing=!1,projImagesLoaded=!1;
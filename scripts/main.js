function setClass(s,n,o){$(s)[o?"addClass":"removeClass"](n)}function isPhone(){return $(window).width()<=420}function goto(s,n){n=n||isPhone()?-80:-50,$.scrollTo(s,500,{offset:n,easing:"swing"})}$.fn.serializeObject=function(){var s={},n=this.serializeArray();return $.each(n,function(){void 0!==s[this.name]?(s[this.name].push||(s[this.name]=[s[this.name]]),s[this.name].push(this.value||"")):s[this.name]=this.value||""}),s},$(function(){$(window).scroll(function(){var s=$(window).height()-110;setClass("body","scrolling",window.scrollY>=s),window.scrollY<s/2&&!isPhone()&&(console.log(s),$("header").css("background-position-y",window.scrollY/10*-1))}).scroll(),$(".fancybox").fancybox({scrolling:"yes"})});
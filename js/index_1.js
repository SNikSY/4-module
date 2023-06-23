gsap.registerPlugin(ScrollTrigger, SplitText);

let scroll;

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

initPageTransitions();

function initLoaderShort() { 

   var tl = gsap.timeline();

	tl.set(".loading-screen, .loading-fade", {
		yPercent: -106
   });

   tl.call(function(){ 
      $("nav").removeClass('theme-nav-transitioning');
      scroll.start();
   }, null, 0);	
}

function initLoader() { 

   var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		yPercent: 0,
      scale: 1,
	});	

   tl.set(".loader-words-wrap.active .single-word-inner", {
      y: 0
   });

   tl.set("html", { 
		cursor: "wait"
	});
  
	tl.to(".loading-screen", {
		duration: .8,
		yPercent: -106,
      scale: 1,
		ease: "Expo.easeInOut",
      delay: 1
   });

   if ($(window).width() > 1024) { 
      tl.set("main", {
         scale: 0.65,
      },"<");
   } else {
      tl.set("main", {
         y: "30vh"
      },"<");
   }

   tl.to(".loading-fade", {
		duration: .8,
		opacity: 0,
		ease: "linear",
   },"< .1");

   tl.from(".main-fade", {
		duration: .8,
		opacity: 0.1,
		ease: "linear",
      clearProps: "all"
   },"<");

   if ($(window).width() > 1024) { 
      tl.to("main", {
         duration: 1.5,
         scale: 1,
         ease: "Expo.easeOut",
         clearProps: "all"
      },"< -.1");
   } else {
      tl.to("main", {
         duration: 1.5,
         y: "0em",
         ease: "Expo.easeOut",
         clearProps: "all"
      },"< -.1");
   }

   tl.from("header .row-title .single-word-inner", {
      duration: 1.5,
      yPercent: 100,
      ease: "Expo.easeOut",
      stagger: .066,
      onComplete: () => initVimeoPlayPauze()
   },"< 0.6");

   if(document.querySelector("header .stripe")) {
      tl.from("header .stripe", {
         duration: 1.5,
         scaleX: 0,
         ease: "Expo.easeOut",
         transformOrigin: "left top"
      },"<");
   }

   if(document.querySelector(".fade-in-cookie")) {
      tl.from(".fade-in-cookie", {
         duration: 1.5,
         yPercent: 150,
         ease: "Expo.easeOut"
      },"<");
   }

   if(document.querySelector(".fade-in")) {
      tl.from(".fade-in", {
         duration: 1.5,
         y: "3em",
         opacity: 0,
         ease: "Expo.easeOut",
         clearProps: "all"
      },"<");
   }

   tl.set("html", { 
		cursor: "auto"
	},"< -0.3");

   tl.call(function(){ 
      $("nav").addClass('theme-nav-transitioning');
   }, null, 0);	

   tl.call(function(){ 

      gsap.to(".loader-words-wrap.active .single-word-inner", {
         duration: 1,
         yPercent: 100,
         ease: "Expo.easeIn",
         stagger: 0.066
      });
   }, null, 0);	

   tl.call(function(){ 
      $("nav").removeClass('theme-nav-transitioning');
      scroll.start();
      $(".loading-container").removeClass('loading-animation');
   }, null, 1.4);	

   tl.call(function(){
      $("main").addClass('animate-css');
   }, null, 2.5);	


}
function pageTransitionInDark() {
 
   pageTransitionIn();
 
}
function pageTransitionInLight() {
 
   pageTransitionIn();
 
}

function pageTransitionIn() {
	var tl = gsap.timeline();

   tl.call(function() {
      scroll.stop();
   });

   tl.set(".loading-screen", { 
      yPercent: 106,
      scale: 1
   });	
   
   tl.set("html", { 
      cursor: "wait"
   });

	tl.to(".loading-screen", {
		duration: .6,
		yPercent: 0,
      scale: 1,
		ease: "Power2.easeIn"
	});

   if ($(window).width() > 1024) { 
      tl.to("main", {
         duration: .6,
         scale: 0.925,
         ease: "Expo.ease",
         clearProps: "all",
      },"<");
   } 

   tl.to(".main-fade", {
		duration: .6,
		opacity: 0.075,
		ease: "linear",
      clearProps: "all"
   },"<");

   tl.to(".loading-fade", {
		duration: .6,
		opacity: 0.5,
		ease: "linear",
   },"<");

   tl.to(".loading-screen", {
		duration: .8,
		yPercent: -106,   
      scale: 1,
		ease: "Expo.easeInOut",
      delay: 1.5
	});

   tl.to(".loading-fade", {
		duration: .8,
		opacity: 0,
		ease: "linear",
   },"< .1");

   tl.set("html", { 
      cursor: "auto"
   },"=-0.6");

   tl.set(".loading-screen", { 
		yPercent: 106
	});	

   tl.call(function(){ 
      $("nav").addClass('theme-nav-transitioning');
   }, null, 0.45);	

   tl.call(function(){ 
      $("nav").removeClass('scroll-scrolled');
   }, null, 0.65);	

   tl.call(function(){ 
      gsap.to(".loader-words-wrap.active .single-word-inner", {
         duration: 1.25,
         y: 0,
         ease: "Expo.easeOut",
         stagger: 0.066
      });

      gsap.to(".loader-words-wrap.active .single-word-inner", {
         duration: 1.25,
         yPercent: 100,
         ease: "Expo.easeIn",
         stagger: 0.075,
         delay: 0.45
      });
   }, null, 0.65);	

   tl.call(function(){ 
      $("nav").removeClass('theme-nav-transitioning');
      $(".custom-cursor").removeClass('cursor-hover').removeClass('cursor-hover-link');
   }, null, 2.55);	
   
}

function pageTransitionOut() {
	var tl = gsap.timeline();
  
   tl.call(function() {
      scroll.stop();
   });

   if ($(window).width() > 1024) { 
      tl.set("main", {
         scale: 0.65,
      },"< 1.5");
   } else { 
      tl.set("main", {
         y: "30vh"
      },"< 1.5");
   }

   if ($(window).width() > 1024) { 
      tl.to("main", {
         duration: 1.5,
         scale: 1,
         ease: "Expo.easeOut",
         clearProps: "all",
         delay: .1,
      });
   } else { 
      tl.to("main", {
         duration: 1.5,
         y: "0em",
         ease: "Expo.easeOut",
         clearProps: "all",
         delay: .1,
      });
   }

   tl.from(".main-fade", {
		duration: 1,
		opacity: 0.1,
		ease: "linear",
      clearProps: "all"
   },"<");

   tl.from("header .row-title .single-word-inner", {
      duration: 1.5,
      yPercent: 100,
      ease: "Expo.easeOut",
      stagger: .066,
      onComplete: () => initVimeoPlayPauze()
   },"< 0.55");

   if(document.querySelector("header .stripe")) {
      tl.from("header .stripe", {
         duration: 1.5,
         scaleX: 0,
         ease: "Expo.easeOut",
         transformOrigin: "left top"
      },"<");
   }

   if(document.querySelector(".fade-in")) {
      tl.from(".fade-in", {
         duration: 1.5,
         y: "3em",
         opacity: 0,
         ease: "Expo.easeOut",
         clearProps: "all"
      },"<");
   }

   tl.call(function(){ 
      scroll.start();
      $("main").addClass('animate-css');
      ScrollTrigger.addEventListener('refresh', () => scroll.update());
      ScrollTrigger.refresh();
   }, null, 3);	
   
   
}

function initPageTransitions() {

   barba.hooks.before(() => {
      select('html').classList.add('is-transitioning');
   });

   barba.hooks.after(() => {
      select('html').classList.remove('is-transitioning');
      scroll.init();
      scroll.stop();
   });

   barba.hooks.enter(() => {
      scroll.destroy();
   });

   barba.hooks.afterEnter(() => {
      window.scrollTo(0, 0);
   });

   barba.hooks.leave(() => {
      initBasicFunctions();
      $("nav").removeClass('nav-mobile-active');
      $("nav").addClass('nav-mobile-not-active');
   }); 

   barba.init({
      sync: true,
      debug: false,
      timeout:7000,
      transitions: [{ 
         name: 'to-light',
         from: {
         },
         to: {
            namespace: ['responsibility', 'contact', 'textpage', 'styleguide', 'news', 'news-single']
         },
         once(data) {
            initSmoothScroll(data.next.container);
            initScript();
            initLoader();
         },
         async leave(data) {
            pageTransitionInLight(data.current);
            await delay(600);
            $("main, nav").removeClass('theme-nav-dark');
            $("main, nav").addClass('theme-nav-light');
            data.current.container.remove();
         },
         async enter(data) {
            pageTransitionOut(data.next);
            initBarbaNavUpdate(data);
            initNextWord(data);
         },
         async beforeEnter(data) {
            ScrollTrigger.getAll().forEach(t => t.kill());
            scroll.destroy();
            initSmoothScroll(data.next.container);
            initScript(); 
         },
      },
      {
      name: 'default',
      once(data) {
         initSmoothScroll(data.next.container);
         initScript();
         initLoader();
      },
      async leave(data) {
         pageTransitionInDark(data.current);
         await delay(600);
         $("main, nav").removeClass('theme-nav-light');
         $("main, nav").addClass('theme-nav-dark');
         data.current.container.remove();
      },
      async enter(data) {
         pageTransitionOut(data.next);
         initBarbaNavUpdate(data);
         initNextWord(data);
      },
      async beforeEnter(data) {
         ScrollTrigger.getAll().forEach(t => t.kill());
         scroll.destroy();
         initSmoothScroll(data.next.container);
         initScript(); 
      },
      }]
   });

  function initSmoothScroll(container) {

    scroll = new LocomotiveScroll({
      el: container.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    window.onresize = scroll.update();

    scroll.on("scroll", () => ScrollTrigger.update());

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: container.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.defaults({
      scroller: document.querySelector('[data-scroll-container]'),
    });


    const scrollbar = selectAll('.c-scrollbar');

    if(scrollbar.length > 1) {
      scrollbar[0].remove();
    }

    ScrollTrigger.addEventListener('refresh', () => scroll.update());

    ScrollTrigger.refresh();
  }  
}

function initNextWord(data) {
   let parser = new DOMParser();
   let dom = parser.parseFromString(data.next.html, 'text/html');
   let nextProjects = dom.querySelector('.loading-words');
   document.querySelector('.loading-words').innerHTML = nextProjects.innerHTML;
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}


function initBarbaNavUpdate(data) {

   let parser = new DOMParser();
   let dom = parser.parseFromString(data.next.html, 'text/html');
   let navs = dom.querySelectorAll('[data-barba-update]');
   document.querySelectorAll('[data-barba-update]').forEach(function(el, index) {
       const classes = navs[index].classList.value;
       el.setAttribute('class', classes);
   });
}

function initScript() {
  initFlickitySlider();
  initSplitText();
  initWindowInnerheight();
  initCheckScrollUpDown();
  initCheckTouchDevice();
  initBearlyDigitalContactForm();
  initBasicFunctions();
  initLazyLoad();
  initPlayVideoInview();
  initDataBackground();
  initCycleImages();
  initMarqueeScroll();
  initStickyCursorWithDelay();
  initAnimateLocoOnScroll();
  initTimeZone();
  initScrollToLoco();
  initScrolltriggerAnimations();
}

function initSplitText() {

   var splitTextLines = new SplitText(".split-lines", {type: "lines, chars", linesClass: "single-line"});
   $('.split-lines .single-line').wrapInner('<div class="single-line-inner">');
 
   var splitWordsWrap = new SplitText(".split-words-wrap", {type: "words", wordsClass: "single-word"});
   $('.split-words-wrap .single-word').wrapInner('<div class="single-word-inner">');
 
   var splitWords = new SplitText(".split-words", {type: "words", wordsClass: "single-word"});
   var splitTextChars = new SplitText(".split-chars", {type: "chars", charsClass: "single-char"});
 
 }

function initWindowInnerheight() {
    
  $(document).ready(function(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

}


function initCheckScrollUpDown() {

   var lastScrollTop = 0
   var threshold = 50;

   function startCheckScroll() {
      scroll.on('scroll', (instance) => {
         var nowScrollTop = instance.scroll.y;
         if (Math.abs(lastScrollTop - nowScrollTop) >= threshold) {
            if (nowScrollTop > lastScrollTop) {
               $("main, nav").addClass('scroll-direction-down');
            } else {
               $("main, nav").removeClass('scroll-direction-down');
            }
            lastScrollTop = nowScrollTop;

            if (nowScrollTop > threshold) {
               $("main, nav").addClass('scroll-scrolled');
               $("nav").removeClass('nav-see-through');
            } else {
               $("main, nav").removeClass('scroll-scrolled');
               $("nav").addClass('nav-see-through');
            }
         }
      });
   }
   startCheckScroll();

   barba.hooks.after(() => {
      startCheckScroll();
   });
}
function initBearlyDigitalContactForm() {

   window.bearly.loadforms();

   var eventContactValidate = function(event) {
      setTimeout(function() {
         scroll.update();
      }, 200);
   }
  
   document.querySelectorAll('[name="name"], [name="email"], [name="message"]').forEach(element => {
      element.addEventListener("validation-failed", eventContactValidate);
      element.addEventListener("validation-success", eventContactValidate);
   });

}

function initCheckTouchDevice() {
    
  function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
  };
  
  if(isTouchScreendevice()){
    $('main').addClass('touch');
    $('main').removeClass('no-touch');
  } else {
    $('main').removeClass('touch');
    $('main').addClass('no-touch');
  }
  $(window).resize(function() {
    if(isTouchScreendevice()){
       $('main').addClass('touch');
       $('main').removeClass('no-touch');
    } else {
       $('main').removeClass('touch');
       $('main').addClass('no-touch');
    }
  });

}

function initBasicFunctions() {
    
   $(document).ready(function () {
      $("[data-toggle='modal-nav-mobile']").click(function () {
         if ($("nav").hasClass('nav-mobile-not-active')) {
            $("nav").addClass('nav-mobile-active');
            $("nav").removeClass('nav-mobile-not-active');
            $("nav").addClass('scroll-direction-down');
         } else {
            $("nav").addClass('nav-mobile-not-active');
            $("nav").removeClass('nav-mobile-active');
            $("nav").removeClass('scroll-direction-down');
         }
      });
      $("[data-close='modal']").click(function () {
         $("nav").addClass('nav-mobile-not-active');
         $("nav").removeClass('nav-mobile-active');
         $("nav").removeClass('scroll-direction-down');
      });
   });
   $(document).keydown(function (e) {
      if (e.keyCode == 27) {
         if ($(".modal").hasClass('active')) {
            $("nav").addClass('nav-mobile-not-active');
            $("nav").removeClass('nav-mobile-active');
            $("nav").removeClass('scroll-direction-down');
            scroll.start();
         }
         $('[data-question-id], .questions-back').removeClass('active').removeClass('not-active');
         $('[data-testimonial-id], .testimonials-modal-back').removeClass('active').removeClass('not-active');
         $('[data-team-id], .team-modal-back').removeClass('active').removeClass('not-active');
      }
   });

   $("[data-hover='logo']").on('mouseenter', function() {
      $("main, nav").removeClass('scroll-direction-down');
   });

   $('[data-cursor-text]').on('mouseenter', function() {
      let dataCursorText = $(this).data('cursor-text');
      $('.custom-cursor').find('.cursor-nav-inner h4').text(dataCursorText);
   });

   $('.single-work-item a, .single-news-item a, .work-single-related a').on('mouseenter', function() {
      var dataBackgroundColor = $(this).data('background-color');
      $('.data-change-color-main').css("background-color", dataBackgroundColor);
   });

   $('.single-work-item, .single-news-item, .work-single-related a').on('mouseleave', function() {
      $('.data-change-color-main').removeAttr("style");
   });

   $('.work-single-related a').on('mouseenter', function() {
      $(this).addClass("hover");
   });

   $('.work-single-related a').on('mouseleave', function() {
      $(this).removeClass("hover");
   });

   $(".grid-hover").each(function () {
      var gridWork = $(this);
      gridWork.find('li a').on('mouseenter', function() {
         gridWork.find('li').addClass('no-hover');
         $(this).parent().removeClass('no-hover').addClass('hover');
      });
      gridWork.find('li a').on('mouseleave', function() {
         gridWork.find('li').removeClass('no-hover').removeClass('hover');
      });
   });
   
   $('[data-accordion-toggle]').click(function(){
      $('.bottom').not($(this).parent().find('.bottom')).slideUp(400, "swing");
      if ($(this).parent().attr('data-accordion-status') == 'active') {
         $(this).parent().attr('data-accordion-status', 'not-active').siblings().attr('data-accordion-status', 'not-active');
      }
      else {
         $(this).parent().siblings().attr('data-accordion-status', 'not-active');
         $(this).parent().attr('data-accordion-status', 'active');
      }
      $(this).parent().find('.bottom').slideToggle(400, "swing").delay(400).queue(function(next){
         next();
         scroll.update();
      });
   });

   if(document.querySelector(".accordion")) {
      var accordionPage = $(location).attr('search');
      var accordionPageShort = accordionPage.substring(accordionPage.indexOf("=")+1);
      var fullPath = '[data-accordion-name="' + accordionPageShort + '"]';
      $(fullPath).attr('data-accordion-status', 'active').find('.bottom').css('display', 'block');
   }

   $('[data-location-filter]').click(function(){
      var toggle = $(this);
      var dataFilter = $(this).data('location-filter');
      if ($(this).hasClass('active')) {
      }
      else {
        $('.single-address-list.toggle-fade').addClass('toggle-fade-out');
        setTimeout(function() {
          toggle.siblings().removeClass('active');
          toggle.addClass('active');
          $('.single-address-list.toggle-fade').removeClass('toggle-fade-out');
          $('.single-address-list.toggle-fade').addClass('toggle-fade-in');
          $('[data-location]').removeClass('visible');
          $('[data-location="' + dataFilter + '"]').addClass('visible');
        }, 300);
        setTimeout(function() {
          $('.single-address-list.toggle-fade').removeClass('toggle-fade-in');
          scroll.update();
        }, 450);
      }
   });

   $('[data-question-open]').click(function(){
      var questionTarget = $(this).data('question-open');
      $('[data-question-id="' + questionTarget + '"]').addClass('active').siblings().removeClass('active').addClass('not-active');
      $('.questions-back').addClass('active');
      setTimeout(function() {
         $('[data-question-id="' + questionTarget + '"]').siblings().removeClass('not-active');
      }, 800);
   });
   $('[data-question-close]').click(function(){
      $('[data-question-id], .questions-back').removeClass('active');
      $('[data-question-id]').removeClass('not-active');
   });

   $('[data-testimonial-open]').click(function(){
      var testimonialTarget = $(this).data('testimonial-open');
      $('[data-testimonial-id="' + testimonialTarget + '"]').addClass('active').siblings().removeClass('active').addClass('not-active');
      $('.testimonials-modal-back').addClass('active');
      setTimeout(function() {
         $('[data-testimonial-id="' + testimonialTarget + '"]').siblings().removeClass('not-active');
      }, 800);
   });
   $('[data-testimonial-close]').click(function(){
      $('[data-testimonial-id], .testimonials-modal-back').removeClass('active');
      $('[data-testimonial-id]').removeClass('not-active');
   });

   $('[data-team-open]').click(function(){
      var teamTarget = $(this).data('team-open');
      $('[data-team-id="' + teamTarget + '"]').addClass('active').siblings().removeClass('active').addClass('not-active');
      $('.team-modal-back').addClass('active');
      setTimeout(function() {
         $('[data-team-id="' + teamTarget + '"]').siblings().removeClass('not-active');
      }, 800);
   });
   $('[data-team-close]').click(function(){
      $('[data-team-id], .team-modal-back').removeClass('active');
      $('[data-team-id]').removeClass('not-active');
   });

   $('[data-filter]').click(function(){
      var toggle = $(this);
      var dataFilter = $(this).data('filter');
      if ($(this).hasClass('active')) {
      }
      else if (dataFilter === 'all') {
        $('.products-list.toggle-fade').addClass('toggle-fade-out');
        setTimeout(function() {
          toggle.siblings().removeClass('active');
          toggle.addClass('active');
          $('[data-status-category').removeClass('visible');
          $('[data-status-category="' + dataFilter + '"]').addClass('visible');
          $('[data-category]').addClass('visible');
          $('.products-list.toggle-fade').removeClass('toggle-fade-out');
          $('.products-list.toggle-fade').addClass('toggle-fade-in');
        }, 300);
        setTimeout(function() {
          $('.products-list.toggle-fade').removeClass('toggle-fade-in');
          ScrollTrigger.refresh();
          scroll.update();
        }, 700);
      } 
      else {
        $('.toggle-fade').addClass('toggle-fade-out');
        setTimeout(function() {
          toggle.siblings().removeClass('active');
          toggle.addClass('active');
          $('[data-status-category').removeClass('visible');
          $('[data-status-category="' + dataFilter + '"]').addClass('visible');
          $('[data-category]').removeClass('visible');
          $('[data-category="' + dataFilter + '"]').addClass('visible');
          $('.products-list.toggle-fade').removeClass('toggle-fade-out');
          $('.products-list.toggle-fade').addClass('toggle-fade-in');
        }, 300);
        setTimeout(function() {
          $('.products-list.toggle-fade').removeClass('toggle-fade-in');
          ScrollTrigger.refresh();
          scroll.update();
        }, 700);
      }
   });

   if(document.querySelector(".error-header.data-change-color-section")) {
      
      document.querySelector(".data-change-color-secondary").animate(
         {
           filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
         },
         {
           duration: 5000,
           iterations: Infinity
         }
       );
   }

   $('.work-single-related video').trigger('play');
         
}

function initLazyLoad() {
    var lazyLoadInstance = new LazyLoad({ 
      elements_selector: ".lazy",
    });

}

function initPlayVideoInview() {

  let allVideoDivs = gsap.utils.toArray('.playpauze');

  allVideoDivs.forEach((videoDiv, i) => {

    let videoElem = videoDiv.querySelector('video')

    ScrollTrigger.create({
      scroller: document.querySelector('[data-scroll-container]'),
      trigger: videoElem,
      start: '0% 150%',
      end: '100% -50%',
      onEnter: () => videoElem.play(),
      onEnterBack: () => videoElem.play(),
      onLeave: () => videoElem.pause(),
      onLeaveBack: () => videoElem.pause(),
      markers: false
    });

  });
}

 function initDataBackground() {


   const sectionsDark = gsap.utils.toArray('.theme-dark');
   sectionsDark.forEach(sectionDark => {

      ScrollTrigger.create({
         trigger: sectionDark,
         start: "0% 7.5%",
         end: "100% 7.5%",
         onEnter: () => functionAddDark(),
         onEnterBack: () => functionAddDark(),
         markers: false,
      });
      function functionAddDark() {
         if ($("main, nav").hasClass('theme-nav-dark')) {
         } else {
            $("main, nav").removeClass('theme-nav-light');
            $("main, nav").addClass('theme-nav-dark');
         }
      };
   });

   const sectionsLight = gsap.utils.toArray('.theme-light');
   sectionsLight.forEach(sectionLight => {

      ScrollTrigger.create({
         trigger: sectionLight,
         start: "0% 7.5%",
         end: "100% 7.5%",
         onEnter: () => functionAddLight(),
         onEnterBack: () => functionAddLight(),
         markers: false,
      });
      function functionAddLight() {
         if ($("main, nav").hasClass('theme-nav-light')) {
         } else {
            $("main, nav").removeClass('theme-nav-dark');
            $("main, nav").addClass('theme-nav-light');
         }
      };
   });
}


function initCycleImages() {

   $(".cycle-images-parent").each(function () {

      let images = $(this).find('.single-image');
      let prev;
      let current = 0;
      let imageCycle;

      $(this).parent().on('mouseenter', function() {
         imageCycle = setInterval(cycleThroughImages, 800);
      });

      $(this).parent().on('mouseleave', function() {
         clearInterval(imageCycle);
         resetCycle();
      });

      function resetCycle() {
         prev = 0;
         current = 0;
         images.removeClass('active');
         images[current].classList.add("active");
      }

      function cycleThroughImages() {
         prev = current;
         current++;
         if (current > images.length - 1) current = 0;
         images[prev].classList.remove("active");
         images[current].classList.add("active");
      }
   });
}

function initMarqueeScroll() {

   if(document.querySelector(".marquee")) {
 
   let direction = 1; // 1 = forward, -1 = backward scroll
 
   const roll1 = roll(".marquee .marquee-inner-wrap", {duration: 18}),
   roll2 = roll(".rollingText02", {duration: 18}, true),
   scroll = ScrollTrigger.create({
      trigger: document.querySelector('[data-scroll-container]'),
      onUpdate(self) {
         if (self.direction !== direction) {
            direction *= -1;
            gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
         }
         self.direction === -1 ? $(".marquee").removeClass('flipped') : $(".marquee").addClass('flipped')
      }
   });
 
   function roll(targets, vars, reverse) {
     vars = vars || {};
     vars.ease || (vars.ease = "none");
     const tl = gsap.timeline({
             repeat: -1,
             onReverseComplete() { 
               this.totalTime(this.rawTime() + this.duration() * 10);
             }
           }), 
           elements = gsap.utils.toArray(targets),
           clones = elements.map(el => {
             let clone = el.cloneNode(true);
             el.parentNode.appendChild(clone);
             return clone;
           }),
           positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
     positionClones();
     elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
     window.addEventListener("resize", () => {
       let time = tl.totalTime();
       tl.totalTime(0); 
       positionClones();
       tl.totalTime(time);
     });
     return tl;
   }

   }
}

function initStickyCursorWithDelay() {
 
   var posXBtn = 0
   var posYBtn = 0
   var posXImage = 0
   var posYImage = 0
   var mouseX = 0
   var mouseY = 0
 
   if(document.querySelector(".custom-cursor")) {
      gsap.to({}, 0.0083333333, {
         repeat: -1,
         onRepeat: function() {
      
            if(document.querySelector(".custom-cursor")) {
               posXBtn += (mouseX - posXBtn) / 5;
               posYBtn += (mouseY - posYBtn) / 5;
               gsap.set($(".custom-cursor"), {
                  css: {
                     left: posXBtn,
                     top: posYBtn
                  }
               });
            }
            if(document.querySelector(".mouse-pos-list-image")) {
               posXImage += ((mouseX / 1) - posXImage) / 5;
               posYImage += (mouseY - posYImage) / 5;
               gsap.set($(".mouse-pos-list-image"), {
                  css: {
                     left: posXImage,
                     top: posYImage,
                  }
               });
               gsap.set($(".mouse-pos-list-rotate"), {
                  css: {
                     rotate: (mouseX - posXBtn) / 20
                  }
               });
            }
         }
      });
   }
 
   $(window).on("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
   });
   
 
   $('main').on('mousemove', function() {
     if ($(".custom-cursor").hasClass('cursor-init')) {
     } else {
     $(".custom-cursor").addClass('cursor-init');
     }
   });

   $(document).mouseleave(function () {
      $(".custom-cursor").removeClass('cursor-init');
   });
 
   $('[data-cursor-text]').on('mouseenter', function() {
      let dataText = $(this).data('cursor-text');
      $('.custom-cursor').addClass('cursor-hover');
      $('.custom-cursor').find('.cursor-text').text(dataText);
      $('.custom-cursor').find('.cursor-text').css("--cursor-speed", " " + dataText.length + "s");

   });
   $('[data-cursor-text]').on('mouseleave', function() {
     $('.custom-cursor').removeClass('cursor-hover');
   });

   $('a, .hover').on('mouseenter', function() {
     $('.custom-cursor').addClass('cursor-hover-link');
   });
   $('a, .hover').on('mouseleave', function() {
     $('.custom-cursor').removeClass('cursor-hover-link');
   });
 
   $('main').on('mousedown', function() {
     $(".custom-cursor").addClass('pressed');
   });
   $('main').on('mouseup', function() {
     $(".custom-cursor").removeClass('pressed');
   });

   $('.mouse-pos-list-image-hover').on('mouseenter', function() {
      $('.mouse-pos-list-image').addClass('active');
   });
   $('.mouse-pos-list-image-hover').on('mouseleave', function() {
      $('.mouse-pos-list-image').removeClass('active');
   });

   $('.mouse-pos-list-image-ul li').on('mouseenter mouseleave', function() {
      var index =  $(this).index();
      $(".mouse-pos-list-image-ul, .mouse-pos-list-image").each(function() {
      $("li",this).eq(index).siblings().removeClass("active");
      $("li",this).eq(index).addClass("active");
      });
   });
   
}

function initAnimateLocoOnScroll() {
  
   if(document.querySelector(".data-change-color-secondary")) {
      scroll.on('scroll', (instance) => {
         var windowHeight = window.innerHeight;
         var percentageScroll = instance.scroll.y / (windowHeight * 2);

         let tl = gsap.timeline({paused:true});
         
         tl.fromTo($('.data-change-color-secondary'), {
            opacity: 0.2,
         },{
            opacity: 0,
            duration: 1,
            ease: "none",
         });

         tl.progress(percentageScroll);
      });
   }
}

barba.hooks.after(() => {
   initAnimateLocoOnScroll();
});

function initVimeoPlayPauze() {

   $('[data-vimeo-player-home-target]').each(function(index){
 
      var playerID = $(this);

      var videoIndexID = 'vimeo-player-home-index-' + index;
      $(this).attr('id', videoIndexID);

      var iframe = $(this).attr('id');
      var player = new Vimeo.Player(iframe);

      player.setVolume(0);
      playerID.attr('data-vimeo-status-activated', 'true');

      player.on('play', function() {
         playerID.attr('data-vimeo-status-loaded', 'true');
      });

      playerID.find('[data-vimeo-control="play"]').click(function(){
         playerID.attr('data-vimeo-status-activated', 'true');
         playerID.attr('data-vimeo-status-play', 'true');
         player.play();
      });

      playerID.find('[data-vimeo-control="pause"]').click(function(){
         playerID.attr('data-vimeo-status-play', 'false');
         player.pause();
      });

      playerID.find('[data-vimeo-control="mute"]').click(function(){
         if (playerID.attr('data-vimeo-status-muted') == 'false') {
            player.setVolume(0);
            playerID.attr('data-vimeo-status-muted', 'true');
         } else {
            player.setVolume(1);
            playerID.attr('data-vimeo-status-muted', 'false');
         }
      });
 
      function secondsTimeSpanToHMS(s) {
         var h = Math.floor(s / 3600);
         s -= h * 3600;
         var m = Math.floor(s / 60);
         s -= m * 60;
         return (m) + ":" + (s < 10 ? '0' + s : s);
      }

      var vimeoTime = playerID.find('.vimeo-duration .time');
      player.on('timeupdate', function(data) {
         vimeoTime.text(secondsTimeSpanToHMS(Math.trunc(data.seconds)));
      });


      var vimeoDuration = playerID.find('.vimeo-duration .duration');
      player.getDuration().then(function(duration) {
         vimeoDuration.text(secondsTimeSpanToHMS(duration));
      }).catch(function(error) {
      });
 
      var onEnd = function() {
         playerID.attr('data-vimeo-status-activated', 'false');
         playerID.attr('data-vimeo-status-play', 'false');
         player.unload();
      };
      
      player.on('ended', onEnd);
      
   });

   
   $('[data-vimeo-player-target]').each(function(index){
 
      var playerID = $(this);

      var videoIndexID = 'vimeo-player-index-' + index;
      $(this).attr('id', videoIndexID);

      var iframe = $(this).attr('id');
      var player = new Vimeo.Player(iframe);

      player.setVolume(1);

      player.on('play', function() {
         playerID.attr('data-vimeo-status-loaded', 'true');
      });

      playerID.find('[data-vimeo-control="play"]').click(function(){
         playerID.attr('data-vimeo-status-activated', 'true');
         playerID.attr('data-vimeo-status-play', 'true');
         player.play();
      });

      playerID.find('[data-vimeo-control="pause"]').click(function(){
         playerID.attr('data-vimeo-status-play', 'false');
         player.pause();
      });

      playerID.find('[data-vimeo-control="mute"]').click(function(){
         if (playerID.attr('data-vimeo-status-muted') == 'false') {
            player.setVolume(0);
            playerID.attr('data-vimeo-status-muted', 'true');
         } else {
            player.setVolume(1);
            playerID.attr('data-vimeo-status-muted', 'false');
         }
      });
 
      function secondsTimeSpanToHMS(s) {
         var h = Math.floor(s / 3600);
         s -= h * 3600;
         var m = Math.floor(s / 60); 
         s -= m * 60;
         return (m) + ":" + (s < 10 ? '0' + s : s);
      }

      var vimeoTime = playerID.find('.vimeo-duration .time');
      player.on('timeupdate', function(data) {
         vimeoTime.text(secondsTimeSpanToHMS(Math.trunc(data.seconds)));
      });

      var vimeoDuration = playerID.find('.vimeo-duration .duration');
      player.getDuration().then(function(duration) {
         vimeoDuration.text(secondsTimeSpanToHMS(duration));
      }).catch(function(error) {
      });
 
      var onEnd = function() {
         playerID.attr('data-vimeo-status-activated', 'false');
         playerID.attr('data-vimeo-status-play', 'false');
         player.unload();
      };
      
      player.on('ended', onEnd);
      
   });
}

function initTimeZone() {
    

   $('.single-time-zone .time-span').each(function(index){

      var timeIndexID = 'time-index-id-' + index;
      $(this).attr('id', timeIndexID);

      const timeSpan = document.querySelector("#" + timeIndexID);
      const timeZone = $(this).data('timezone');

      const optionsTime = {
         timeZone: timeZone,
         timeZoneName: 'short',
         hour: '2-digit',
         hour12: 'true',
         minute: 'numeric',
      };

      const formatter = new Intl.DateTimeFormat([], optionsTime);
      updateTime();
      setInterval(updateTime, 1000);

      function updateTime() {
            const dateTime = new Date();
            const formattedDateTime = formatter.format(dateTime);
            timeSpan.textContent = formattedDateTime;
      }
   });
 
}



function initFlickitySlider() {


   $('.single-flickity-slider').each(function (index) {

      var sliderIndexID = 'flickity-slider-id-' + index;
      $(this).attr('id', sliderIndexID);

      var sliderThis = $(this);

      var flickitySliderMain = document.querySelector('#' + sliderIndexID + ' .flickity-carousel');
      var flickityMain = sliderThis.find('.flickity-carousel').flickity({
         watchCSS: true,
         contain: true,
         wrapAround: false,
         dragThreshold: 10,
         prevNextButtons: false,
         pageDots: false,
         cellAlign: 'left',
         selectedAttraction: 0.015,
         friction: 0.25,
         percentPosition: true,
         freeScroll: true,
         on: {
            'dragStart': () => {
               flickityMain.css("pointer-events", "none");
            },
            'dragEnd': () => {
               flickityMain.css("pointer-events", "auto");
            },
            change: function () {
               updatePagination();
            }
         }
      });

      var flkty = flickityMain.data('flickity');

      var prevButton = sliderThis.find('.flickity-btn-prev').on('click', function () {
         flickityMain.flickity('previous');;
      });
      var nextButton = sliderThis.find('.flickity-btn-next').on('click', function () {
         flickityMain.flickity('next');
      });

      var inviewColumns = window.getComputedStyle(flickitySliderMain).getPropertyValue('--columns');
      function updatePagination() {

         if (!flkty.cells[flkty.selectedIndex - 1]) {
            prevButton.attr('disabled', 'disabled');
            nextButton.removeAttr('disabled');
         } else if (!flkty.cells[flkty.selectedIndex + parseInt(inviewColumns)]) {
            nextButton.attr('disabled', 'disabled');
            prevButton.removeAttr('disabled');
         } else {
            prevButton.removeAttr('disabled');
            nextButton.removeAttr('disabled');
         }
      }
   });

}

function initScrollToLoco() {



   const applyTarget = document.querySelector('#cat-scroll');
   if (window.location.href.indexOf("?cat=product-launches") > -1) {
      setTimeout(function() {
         scroll.scrollTo(applyTarget ,{
         'duration': 1000,
         'easing':[1, 0, 0, 1],
         'disableLerp': false,
         'offset': 0,
         });
      }, 750);
   }

}



function initScrolltriggerAnimations() {

    
   if(document.querySelector(".address-bar")) {

      $(".address-bar").each(function (index) {
         let triggerElement = $(this);
         let targetElement = $(this);
      
         let tl = gsap.timeline({
            scrollTrigger: {
               trigger: triggerElement,
               start: "0% 100%",
               end: "100% 0%"
            }
         });

         tl.to(targetElement, {
            opacity: 1,
            ease: "none",
            onComplete: scroll.update()
          });
      
      });
   }
}
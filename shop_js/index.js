/* *************************** */
/* *************************** */
/* *************************** */
/* BEGIN Brought in from index_pages.js
/* *************************** */
/* *************************** */
/* *************************** */
    $(document).ready(function() {
      ////////////////////////////////////////////////////
      // BEGIN PureChat hack
      ////////////////////////////////////////////////////
      // append gui
      $('body').append('<div id="menu"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#d5ad6d"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg></div>');
      // initial hide
      var stopWaitingForPurechat = setInterval(function() {
        if ($("body").find('.purechat-widget-title-link:contains("Contact us")').length > 0) {
          console.log("found PureChat");
          // hide it
          $("#PureChatWidget").attr("style", "z-index: -1 !important");
          clearInterval(stopWaitingForPurechat);
        }
      }, 1000);
      ////////////////////
      // show when needed
      $(".open_purechat").on("click", function() {
        // show it
        $("#PureChatWidget").attr("style", "z-index: 2147483646 !important");
        // hack colors
        // header
        $("#PureChatWidget").find(".purechat-widget-header").attr("style", "background-color: #0c1400 !important");
        // content-wrapper
        $("#PureChatWidget").find(".purechat-content-wrapper").attr("style", "background-color: #172800 !important");
        // purechat-card
        $("#PureChatWidget").find(".purechat-card").attr("style", "background-color: #203700 !important");
        // purechat-btn
        $("#PureChatWidget").find(".purechat-btn").attr("style", "color: #d5ad6d !important");
        // purechat-widget-title-link
        $("#PureChatWidget").find(".purechat-widget-title-link").attr("style", "font-size: 20px !important;padding-left: 8px !important;font-family: PT_Sans-Narrow-Web-Regular !important;color: #d5ad6d !important;text-shadow: 2px 2px 1px black !important");
        // keep widget expanded
        $("#PureChatWidget").removeClass("purechat-widget-super-collapsed");
        $("#PureChatWidget").addClass("purechat-widget-collapsed");
        console.log("PureChat will keep widget expanded");
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #d5ad6d !important");
        }, 1000);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #d5ad6d !important");
        }, 1500);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #d5ad6d !important");
        }, 2000);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #d5ad6d !important");
        }, 2500);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #d5ad6d !important");
        }, 3000);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #d5ad6d !important");
        }, 3500);
        setTimeout(function() {
          $("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #d5ad6d !important");
        }, 4000);
        // darken the page to emphasize chat
        $(".opacity_cover").show();
      });
      // hide when click outside
      $(".opacity_cover").click(function() {
        // hide it
        $("#PureChatWidget").attr("style", "z-index: -1 !important");
        // bring back to normal
        $(".opacity_cover").hide();
        // hide the menu
        $(".menu_modal").hide("slow");
      });
      // stopPropagation when clicking to show the widget and inside the widget itself
      $(".open_purechat, #PureChatWidget").click(function(event) {
        event.stopPropagation();
        console.log("PureChat hide when click outside event.stopPropagation");
      });
      ////////////////////////////////////////////////////
      // END PureChat hack
      ////////////////////////////////////////////////////
      ////////////////////////////////////////////////////
      // BEGIN simple menu
      ////////////////////////////////////////////////////
      $("#menu").on("click", function() {
        $(".menu_modal").toggle("slow");
        $(".opacity_cover").show();
      });
      ////////////////////////////////////////////////////
      // END simple menu
      ////////////////////////////////////////////////////
    });
    ////////////////////////////////////////////////////
    // BEGIN PureChat load
    ////////////////////////////////////////////////////
    window.purechatApi = {
      l: [],
      t: [],
      on: function() {
        this.l.push(arguments);
      }
    };
    (function() {
      var done = false;
      var script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript';
      document.getElementsByTagName('HEAD').item(0).appendChild(script);
      script.onreadystatechange = script.onload = function(e) {
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
          var w = new PCWidget({
            c: '7f1570e3-a978-430a-82a3-fccff55a8707',
            f: true
          });
          done = true;
        }
      };
    })();
    ////////////////////////////////////////////////////
    // END PureChat load
    ////////////////////////////////////////////////////
/* *************************** */
/* *************************** */
/* *************************** */
/* END Brought in from index_pages.js
/* *************************** */
/* *************************** */
/* *************************** */


/* *************************** */
/* *************************** */
/* BEGIN site_title & site_made animation
/* *************************** */
/* *************************** */
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = 'קראטוןםפשדגכעיחלךףזסבהנמצתץ          '
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 20)
      const end = start + Math.floor(Math.random() * 20)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="temp">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  '<span class="customize_title bf_links">customize for $10 shipping included</span>',
  '<span class="made_title bf_links">made with <span class="red_heart">❤</span> at BibleFarm.org</span>'
]

const el = document.querySelector('#site_title')
const fx = new TextScramble(el)
let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 5000)
  })
  counter = (counter + 1) % phrases.length
}

next();


// from
// https://codepen.io/zenonchaos/pen/NMEyJz
/* *************************** */
/* *************************** */
/* END site_title & site_made animation
/* *************************** */
/* *************************** */

const doc = document;
const win = window;
const html = doc.documentElement;
const lang = html.getAttribute("lang");
const body = doc.body;
function fIW() {
  const e = doc.querySelectorAll("img, .lazy-sharp[data-bg]");
  const o = ["/w720/", "=w720", "/w480/", "=w480"];
  const r = ["/w720-rw/", "=w720-rw", "/w480-rw/", "=w480-rw"];
  const c = ["data-src", "data-srcset", "data-bg"];
  e.forEach(n => {
    c.forEach(t => {
      if (n.hasAttribute(t)) {
        let e = n.getAttribute(t);
        o.forEach((t, n) => {
          e = e.replace(t, r[n]);
        });
        n.setAttribute(t, e);
      }
    });
  });
}
(() => {
  const e = new Set();
  let o = false;
  win.runOptim = function (...r) {
    r.forEach(t => e.add(t));
    if (localStorage.getItem("hasScrolled") === "true") {
      e.forEach(t => t());
    } else if (!o) {
      win.addEventListener("scroll", function t() {
        localStorage.setItem("hasScrolled", "true");
        e.forEach(t => t());
        win.removeEventListener("scroll", t);
      });
      o = true;
    }
  };
})();
doc.addEventListener("DOMContentLoaded", () => {
  const e = doc.getElementById("preloader");
  if (e) {
    e.classList.add("loaded");
    runOptim(function () {
      setTimeout(() => {
        e.remove();
      }, 1000);
    });
  }
});
(() => {
  const e = new Swiper("#slider-banner", {
    loop: true,
    grabCursor: true,
    longSwipesRatio: 0,
    spaceBetween: 20,
    speed: 1000,
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  runOptim(() => {
    e.params.autoplay = {
      delay: 7500,
      disableOnInteraction: false
    };
    e.autoplay.start();
  });
})();
runOptim(() => {
  new Swiper("#slider-teacher", {
    loop: true,
    grabCursor: true,
    longSwipesRatio: 0.25,
    spaceBetween: 20,
    speed: 1000,
    breakpoints: {
      380: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      },
      1280: {
        slidesPerView: 5
      }
    },
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    }
  });
});
runOptim(() => {
  new Swiper("#slider-alumni", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    longSwipesRatio: 0.25,
    speed: 1000,
    breakpoints: {
      1024: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
});
runOptim(() => {
  new Swiper("#slider-related", {
    loop: true,
    grabCursor: true,
    longSwipesRatio: 0,
    spaceBetween: 30,
    speed: 1000,
    slidesPerView: 2,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    breakpoints: {
      640: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 5
      }
    }
  });
});
runOptim(() => {
  const e = {
    loop: true,
    grabCursor: true,
    longSwipesRatio: 0,
    spaceBetween: 12,
    speed: 1000,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  doc.querySelectorAll(".swiper-single").forEach(t => new Swiper(t, e));
  doc.querySelectorAll(".swiper-double").forEach(t => new Swiper(t, {
    ...e,
    slidesPerView: 2
  }));
});
fIW();
var lazyContent = new LazyLoad();
const lazySharp = new LazyLoad({
  elements_selector: ".lazy-sharp"
});
function lazyOptim() {
  new LazyLoad({
    elements_selector: ".lazy-optim"
  });
}
function loadStyle() {
  const e = [...[...doc.querySelectorAll(".style-summon")].map(n => n.dataset.href).filter(Boolean)];
  const o = doc.querySelector(".style-source");
  let r = 0;
  if (o) {
    e.forEach(c => {
      const a = doc.createElement("link");
      a.rel = "stylesheet";
      a.href = c;
      a.onload = () => {
        r++;
        if (r === e.length) {
          doc.body.classList.add("style-loaded");
        }
      };
      o.insertAdjacentElement("afterend", a);
    });
  }
}
function fLBP() {
  var e = html.lang == "id" ? "Belum ada postingan dengan label ini!" : "No posts with this label yet!";
  var o = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  var r = "https://blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgfMvYAhAbdHksiBA24JKmb2Tav6K0GviwztID3Cq4VpV96HaJfy0viIu8z1SSw_G9n5FQHZWSRao61M3e58ImahqBtr7LiOUS6m_w59IvDYwjmMcbq3fKW4JSbacqkbxTo8B90dWp0Cese92xfLMPe_tg11g/h60/";
  function c(e) {
    return e.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
  }
  function i(e) {
    return e.trim().replace(/&nbsp;/g, " ").replace(/<br *\/?>|[\s]+/gi, " ").replace(/<.*?>|[<>]/g, "").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
  }
  function a(e, o) {
    const {
      h: c,
      w: i
    } = {
      ratio16to10: {
        h: 300,
        w: 480
      },
      ratio16to9: {
        h: 270,
        w: 480
      },
      ratio3to4: {
        h: 480,
        w: 360
      }
    }[o];
    return e.replace(/\/default/g, "/hqdefault").replace(/(\/|=)s72.*?-c(?:-rw)?/g, "$1w" + i + "-h" + c + "-c-k-no-nu-rw");
  }
  win.cardTypeOne = function (s, u) {
    var l = s.feed.entry;
    if (l && l.length > 0) {
      var f = "";
      for (var p = 0; p < l.length; ++p) {
        for (var m = l[p], g = 0; g < m.link.length; ++g) {
          if (m.link[g].rel == "alternate") {
            var h = m.link[g].href;
          }
        }
        var b = c(m.title.$t);
        var x = i(m.summary.$t);
        var w = x.substring(0, x.lastIndexOf(" ", 150));
        var v = m.author[0].name.$t;
        var y = !!m.author[0].uri && m.author[0].uri.$t;
        var I = m.published.$t;
        var D = m.updated.$t;
        var S = m.media$thumbnail ? a(m.media$thumbnail.url, "ratio16to9") : o;
        f += "<article class='slider-inner'>" + ("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"" + h + "\"},\"headline\":\"" + b + "\",\"description\":\"" + w + "\",\"image\":\"" + S + "\",\"author\":{\"@type\":\"Person\",\"name\":\"" + v + "\",\"url\":\"" + y + "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Blogger\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"" + r + "\"}},\"datePublished\":\"" + I + "\",\"dateModified\":\"" + D + "\"}</script>") + "<div class='overflow-hidden h-100 border rounded-lg shadow-md bg-body bg-dm-dark-3'><a class='ratio ratio-w-16 ratio-h-9 d-block bg-dark bg-opacity-50 bg-dm-dark' aria-label='" + b + "' href='" + h + "'><img class='lazy' data-src='" + S + "' alt='" + b + "'/></a><div class='px-4 py-3'><h3 class='mb-1 fs-2 lh-22px text-hov-primary'><a class='clamp clamp-2' title='" + b + "' href='" + h + "'>" + b + "</a></h3><p class='clamp clamp-2 text-slate'>" + w + "</p></div></div></article>";
      }
      u.innerHTML = f;
    } else {
      u.setAttribute("title", e);
    }
  };
  win.cardTypeTwo = function (s, u) {
    var l = s.feed.entry;
    if (l && l.length > 0) {
      var f = "";
      for (var p = 0; p < l.length; ++p) {
        for (var E = l[p], T = 0; T < E.link.length; ++T) {
          if (E.link[T].rel == "alternate") {
            var C = E.link[T].href;
          }
        }
        var m = c(E.title.$t);
        var g = E.author[0].name.$t;
        var h = !!E.author[0].uri && E.author[0].uri.$t;
        var b = E.published.$t;
        var x = new Date(b).toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        var w = new Date(b).toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        });
        var v = E.updated.$t;
        var y = E.media$thumbnail ? a(E.media$thumbnail.url, "ratio16to9") : o;
        var I = E.content.$t;
        var D = new DOMParser().parseFromString(I, "text/html");
        var S = (t, n) => D.querySelector(t)?.textContent || n;
        var k = S(".agenda-date span", x);
        var O = S(".agenda-time span", w + " s/d Selesai");
        var L = S(".agenda-location span", E.georss$featurename?.$t || "Indonesia");
        D.querySelector(".agenda-description")?.remove();
        var _ = i(D.body.textContent);
        f += "<article class='slider-inner'>" + ("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"" + C + "\"},\"headline\":\"" + m + "\",\"description\":\"" + (_ = _.substring(0, _.lastIndexOf(" ", 150))) + "\",\"image\":\"" + y + "\",\"author\":{\"@type\":\"Person\",\"name\":\"" + g + "\",\"url\":\"" + h + "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Blogger\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"" + r + "\"}},\"datePublished\":\"" + b + "\",\"dateModified\":\"" + v + "\"}</script>") + "<div class='position-relative overflow-hidden mb-3 rounded-lg'><a class='ratio ratio-w-16 ratio-h-9 d-block bg-dark bg-opacity-50 bg-dm-dark' aria-label='" + m + "' href='" + C + "'><img class='lazy' data-src='" + y + "' alt='" + m + "'/></a><div class='position-absolute top-0 d-flex align-items-center gap-2 px-3 py-1 rounded-br-lg fw-medium fs-n1 bg-secondary text-dark'><svg class='svg-icon' aria-hidden='true'><use xlink:href='#date'/></svg><span>" + k + "</span></div></div><h3 class='mb-1 fs-2 lh-22px'><a class='clamp clamp-1' title='" + m + "' href='" + C + "'>" + m + " </a></h3><div class='d-flex flex-wrap gap-x-3'><div class='d-flex align-items-center gap-1 fs-n1 lh-22px'><svg class='svg-icon flex-shrink-0' aria-hidden='true'><use xlink:href='#map'/></svg><span class='clamp clamp-1'>" + L + "</span></div><div class='d-flex align-items-center gap-1 fs-n1 lh-22px'><svg class='svg-icon flex-shrink-0' aria-hidden='true'><use xlink:href='#time'/></svg><span class='clamp clamp-1'>" + O + "</span></div></div></article>";
      }
      u.innerHTML = f;
    } else {
      u.setAttribute("title", e);
    }
  };
  win.cardTypeThree = function (s, u) {
    var l = s.feed.entry;
    if (l && l.length > 0) {
      var f = "";
      for (var p = 0; p < l.length; ++p) {
        for (var m = l[p], g = 0; g < m.link.length; ++g) {
          if (m.link[g].rel == "alternate") {
            var h = m.link[g].href;
          }
        }
        var b = c(m.title.$t);
        var x = i(m.summary.$t);
        var w = x.substring(0, x.lastIndexOf(" ", 150));
        var v = m.author[0].name.$t;
        var y = !!m.author[0].uri && m.author[0].uri.$t;
        var I = m.published.$t;
        var D = m.updated.$t;
        var S = m.media$thumbnail ? a(m.media$thumbnail.url, "ratio16to10") : o;
        f += "<article class='slider-inner'>" + ("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"" + h + "\"},\"headline\":\"" + b + "\",\"description\":\"" + w + "\",\"image\":\"" + S + "\",\"author\":{\"@type\":\"Person\",\"name\":\"" + v + "\",\"url\":\"" + y + "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Blogger\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"" + r + "\"}},\"datePublished\":\"" + I + "\",\"dateModified\":\"" + D + "\"}</script>") + "<a class='group ratio ratio-w-16 ratio-h-10 overflow-hidden d-block rounded-lg bg-dark bg-opacity-90' href='" + h + "'><img class='group-hov-scale lazy' data-src='" + S + "' alt='" + b + "'/><div class='d-flex justify-content-center align-items-end p-3 text-center bg-gradient-2 bg-gradient-overlay'><h3 class='clamp clamp-2 fs-1 mb-0' title='" + b + "'>" + b + "</h3></div></a></article>";
      }
      u.innerHTML = f;
    } else {
      u.setAttribute("title", e);
    }
  };
  win.cardTypeFour = function (s, u) {
    var l = s.feed.entry;
    if (l && l.length > 0) {
      var f = "";
      for (var p = 0; p < l.length; ++p) {
        for (var w = l[p], v = 0; v < w.link.length; ++v) {
          if (w.link[v].rel == "alternate") {
            var y = w.link[v].href;
          }
        }
        var D = c(w.title.$t);
        var S = w.content.$t;
        var k = new DOMParser().parseFromString(S, "text/html");
        var O = (t, n) => k.querySelector(t)?.textContent || n;
        var L = O(".teacher-name", D);
        var _ = O(".teacher-position", "Guru Profesional");
        k.querySelector(".table")?.remove();
        var I = i(k.body.textContent);
        I = I.substring(0, I.lastIndexOf(" ", 150));
        var m = w.author[0].name.$t;
        var g = !!w.author[0].uri && w.author[0].uri.$t;
        var h = w.published.$t;
        var b = w.updated.$t;
        var x = w.media$thumbnail ? a(w.media$thumbnail.url, "ratio3to4") : o;
        f += "<article class='slider-inner'>" + ("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"" + y + "\"},\"headline\":\"" + D + "\",\"description\":\"" + I + "\",\"image\":\"" + x + "\",\"author\":{\"@type\":\"Person\",\"name\":\"" + m + "\",\"url\":\"" + g + "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Blogger\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"" + r + "\"}},\"datePublished\":\"" + h + "\",\"dateModified\":\"" + b + "\"}</script>") + "<div class='position-relative overflow-hidden mb-3 rounded-lg'><a class='ratio ratio-w-3 ratio-h-4 d-block bg-dark bg-opacity-50 bg-dm-dark' aria-label='" + D + "' href='" + y + "'><img class='lazy' data-src='" + x + "' alt='" + D + "'/></a><div class='position-absolute top-0 d-flex align-items-center gap-2 px-3 py-1 rounded-br-lg fw-medium fs-n1 bg-secondary text-dark'><svg class='svg-icon flex-shrink-0' aria-hidden='true'><use xlink:href='#user'/></svg><span class='clamp clamp-1'>" + _ + "</span></div></div><h3 class='mb-0 fs-2 lh-22px'><a class='clamp clamp-1' title='" + D + "' href='" + y + "'>" + L + "</a></h3></article>";
      }
      u.innerHTML = f;
    } else {
      u.setAttribute("title", e);
    }
  };
  win.cardTypeFive = function (s, u) {
    var l = s.feed.entry;
    if (l && l.length > 0) {
      var f = "";
      for (var p = 0; p < l.length; ++p) {
        for (var m = l[p], g = 0; g < m.link.length; ++g) {
          if (m.link[g].rel == "alternate") {
            var h = m.link[g].href;
          }
        }
        var b = c(m.title.$t);
        var x = i(m.summary.$t);
        var w = x.substring(0, x.lastIndexOf(" ", 150));
        var v = m.author[0].name.$t;
        var y = !!m.author[0].uri && m.author[0].uri.$t;
        var I = m.published.$t;
        var D = m.updated.$t;
        var S = m.media$thumbnail ? a(m.media$thumbnail.url, "ratio16to10") : o;
        f += "<article>" + ("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"" + h + "\"},\"headline\":\"" + b + "\",\"description\":\"" + w + "\",\"image\":\"" + S + "\",\"author\":{\"@type\":\"Person\",\"name\":\"" + v + "\",\"url\":\"" + y + "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Blogger\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"" + r + "\"}},\"datePublished\":\"" + I + "\",\"dateModified\":\"" + D + "\"}</script>") + "<a class='group ratio ratio-w-16 ratio-h-10 overflow-hidden d-block rounded-lg shadow-lg bg-dark bg-opacity-90' href='" + h + "'><img class='group-hov-scale lazy' data-src='" + S + "' alt='" + b + "'/><div class='d-flex justify-content-center align-items-end p-3 text-center bg-gradient-2 bg-gradient-overlay'><h3 class='clamp clamp-2 fs-1 mb-0' title='" + b + "'>" + b + "</h3></div></a></article>";
      }
      u.innerHTML = f;
    } else {
      u.setAttribute("title", e);
    }
  };
  Array.from(doc.querySelectorAll(".fetch-load")).forEach(function (e) {
    const c = e.dataset.label;
    const i = e.dataset.variant;
    const a = e.dataset.result || 4;
    const s = e.dataset.cardtype;
    const u = encodeURIComponent(c);
    fetch(blogUrl + "feeds/posts/" + i + "/-/" + u + "?max-results=" + a + "&alt=json").then(t => t.json()).then(t => {
      const c = win[s];
      if (typeof c == "function") {
        c(t, e);
      }
      e.classList.remove("placeholder-glow");
    }).then(() => lazyContent.update()).catch(t => {
      e.innerHTML = "<p class='mx-auto my-5 px-3'>Anda belum melakukan setup wajib yang ada di panduan, silahkan hubungi admin.</p>";
    });
  });
}
runOptim(lazyOptim);
runOptim(loadStyle);
fLBP();
var fLExt = false;
function fL() {
  var e = doc.querySelector("#license-code");
  function o() {
    body.innerHTML = "<div id=\"warning\" class=\"position-fixed top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center p-5 text-center bg-pattern bg-primary text-white entered\"><div class=\"p-5 border border-2 border-primary-subtle rounded-xl shadow-xl bg-primary\"><h4 class=\"fs-7\">Activate Templates</h4><p class=\"fs-lg-2\">Instalasi berhasil !! untuk mendapatkan kode lisensi silahkan <a id=\"generate-link\" class=\"fw-bold text-yellow\" href=\"#\" target=\"_blank\">klik disini</a>.</p><div id=\"warning-countdown\" class=\"fs-8 lh-1\">20</div></div></div>";
    var o = "https://wa.me/6285179996371?text=Generate+kode+lisensi+untuk+domain+ini+sekarang!%0A%0A" + blogUrl.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "") + "+%0A%0A";
    doc.getElementById("generate-link").href = o;
    var r = doc.getElementById("warning-countdown");
    var c = setInterval(function () {
      if (r.textContent <= 0) {
        win.location.href = "https://www.banjarmasinkota.go.id";
        clearInterval(c);
      } else {
        r.textContent -= 1;
      }
    }, 1000);
  }
  doc.addEventListener("DOMContentLoaded", function () {
    if (e) {
      var i = e.textContent.split("-");
      var a = i[0];
      var s = parseInt(i[1], 10);
      var u = new XMLHttpRequest();
      u.open("GET", "https://cdn.jsdelivr.net/gh/wzbakone/blogfile@main/decrypt/list.json", true);
      u.onerror = function () {
        if (u.status !== 0) {
          o();
        }
      };
      u.onload = function () {
        var e = JSON.parse(this.response).user;
        var i = new XMLHttpRequest();
        i.open("GET", "/feeds/posts/summary/?alt=json", true);
        i.onload = function () {
          var r = JSON.parse(this.response).feed.id.$t.split("-")[1];
          if (s >= 0 && s < e.length) {
            var i = e[s];
            if (i.id !=== r && i.code !=== a) {
              return;
            }
          }
          o();
        };
        i.send();
      };
      u.send();
    } else {
      o();
    }
  });
  fLExt = true;
}
fL();
(() => {
  const e = () => {
    const o = doc.querySelector(".navbar-fixed");
    if (win.scrollY > 250) {
      o.classList.add("fixed-top");
      body.style.paddingTop = o.offsetHeight + "px";
    } else {
      o.classList.remove("fixed-top");
      body.style.paddingTop = "0";
    }
  };
  if (win.scrollY > 250) {
    e();
  }
  win.addEventListener("scroll", e);
})();
doc.querySelectorAll(".navbar-nav").forEach(t => {
  const o = t.querySelectorAll(".nav-link");
  let r;
  let c;
  function i(t, o, r = false) {
    const i = doc.createElement("div");
    i.classList.add("dropdown");
    const a = doc.createElement("a");
    a.classList.add(r ? "dropdown-item" : "nav-link", "dropdown-toggle");
    a.href = t;
    a.setAttribute("role", "button");
    a.setAttribute("data-bs-toggle", "dropdown");
    a.setAttribute("data-bs-auto-close", "outside");
    a.setAttribute("aria-expanded", "false");
    a.textContent = o;
    const s = doc.createElement("div");
    s.classList.add("dropdown-menu");
    if (r) {
      s.classList.add("position-relative");
    }
    i.appendChild(a);
    i.appendChild(s);
    return {
      dropdown: i,
      menu: s
    };
  }
  o.forEach((t, a) => {
    const u = t.getAttribute("href");
    const d = u.match(/onclick="([^"]*)"/);
    if (d) {
      t.setAttribute("onclick", d[1]);
      t.setAttribute("href", "#!");
    }
    const l = t.textContent.trim();
    const f = l.startsWith("_") && !l.startsWith("__");
    if (l.startsWith("__")) {
      const n = l.substring(2);
      if (c) {
        const t = doc.createElement("a");
        t.classList.add("dropdown-item");
        t.href = u;
        t.textContent = n;
        c.appendChild(t);
      }
      t.remove();
    } else if (f) {
      const n = l.substring(1);
      if (a + 1 < o.length && o[a + 1].textContent.trim().startsWith("__")) {
        const {
          dropdown: t,
          menu: o
        } = i(u, n, true);
        c = o;
        if (r) {
          r.appendChild(t);
        }
      } else if (r) {
        const t = doc.createElement("a");
        t.classList.add("dropdown-item");
        t.href = u;
        t.textContent = n;
        r.appendChild(t);
      }
      t.remove();
    } else {
      if (a + 1 < o.length && o[a + 1].textContent.trim().startsWith("_") && !o[a + 1].textContent.trim().startsWith("__")) {
        const {
          dropdown: n,
          menu: o
        } = i(u, l);
        r = o;
        t.parentNode.insertBefore(n, t.nextSibling);
        t.remove();
      } else {
        r = null;
      }
      c = null;
    }
    if (a === o.length - 1 && !l.startsWith("_")) {
      let n = "#mortarboard";
      const o = l.indexOf("@");
      let r = l;
      if (o !== -1) {
        r = l.substring(o + 1).trim();
        n = "#" + l.substring(0, o).trim();
      }
      if (l.startsWith("noneBtn@")) {
        t.textContent = r;
      } else {
        const o = doc.createElement("a");
        o.classList.add("nav-link", "btn");
        o.setAttribute("role", "button");
        o.href = u;
        if (d) {
          o.href = "#!";
          o.setAttribute("onclick", d[1]);
        } else {
          o.setAttribute("target", "_blank");
        }
        if (!l.startsWith("noneIcon@")) {
          const t = "http://www.w3.org/2000/svg";
          const r = doc.createElementNS(t, "svg");
          r.classList.add("svg-icon");
          r.setAttribute("aria-hidden", "true");
          const c = doc.createElementNS(t, "use");
          c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
          r.appendChild(c);
          o.appendChild(r);
        }
        o.appendChild(doc.createTextNode(" " + r));
        t.replaceWith(o);
      }
    }
  });
  t.querySelectorAll(".nav-link, .dropdown-item").forEach(t => {
    const r = t.innerText.trim();
    if (r.endsWith("_")) {
      t.setAttribute("target", "_blank");
      t.innerText = r.slice(0, -1);
    }
  });
  t.classList.remove("visually-hidden");
});
(() => {
  const e = doc.querySelectorAll(".svg-icon");
  for (const o of e) {
    o.setAttribute("aria-hidden", "true");
  }
})();
(function () {
  const e = doc.querySelectorAll(".count");
  const o = new IntersectionObserver(e => {
    e.forEach(t => {
      if (t.isIntersecting) {
        const r = t.target;
        const i = r.getAttribute("count-to");
        const a = i.endsWith("+");
        const s = parseInt(i.replace(/\+$/, ""));
        const u = s / 200;
        let d = 0;
        const l = t => t.toLocaleString("id-ID").replace(/\s/g, "");
        const f = () => {
          if (d < s) {
            d += u;
            r.textContent = a ? l(Math.ceil(d)) + "+" : l(Math.ceil(d));
            setTimeout(f, 10);
          } else {
            r.textContent = a ? l(s) + "+" : l(s);
          }
        };
        f();
        o.unobserve(r);
      }
    });
  });
  e.forEach(n => o.observe(n));
})();
(() => {
  const e = doc.getElementById("navfloat");
  const o = doc.querySelector(".i-whatsapp");
  const r = doc.getElementById("chatWrapper");
  const c = doc.querySelector(".chat-close");
  const i = doc.querySelector(".chat-form");
  const a = () => {
    if (win.scrollY > 10 && !s) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  };
  let s = false;
  let u = false;
  const d = new IntersectionObserver(o => {
    o.forEach(t => {
      s = t.isIntersecting;
      if (s) {
        e.classList.add("off");
      } else {
        e.classList.remove("off");
      }
    });
  }, {
    root: null,
    threshold: 0
  });
  const l = doc.getElementById("copyright");
  d.observe(l);
  if (win.scrollY > 10) {
    a();
  }
  win.addEventListener("scroll", a);
  o.addEventListener("click", () => {
    r.classList.add("active");
    e.classList.add("pending");
    if (!u) {
      new LazyLoad({
        elements_selector: ".lazy-chat"
      });
      u = true;
    }
  });
  c.addEventListener("click", () => {
    r.classList.remove("active");
    e.classList.remove("pending");
  });
  i.addEventListener("submit", e => {
    e.preventDefault();
    let r = i.getAttribute("data-nomor");
    let c = doc.getElementById("chat-input").value;
    if (r.startsWith("08")) {
      r = "628" + r.slice(2);
    }
    const a = "https://wa.me/" + r + "?text=" + encodeURIComponent(c);
    win.open(a, "_blank");
    i.reset();
  });
})();
doc.getElementById("searchCanv").addEventListener("shown.bs.offcanvas", function () {
  doc.getElementById("searchInput").focus();
});
(() => {
  const e = doc.querySelector(".i-main");
  function o() {
    const r = (win.scrollY || html.scrollTop) / (html.scrollHeight - html.clientHeight) * 100 * 3.6;
    e.style.setProperty("--ds-deg", r + "deg");
  }
  win.addEventListener("scroll", o);
  o();
})();
doc.querySelector(".i-top").addEventListener("click", () => {
  win.scrollBy({
    top: 200,
    left: 0,
    behavior: "smooth"
  });
  setTimeout(() => {
    win.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, 300);
});
doc.querySelector(".i-darkmode").addEventListener("click", () => {
  const e = html.getAttribute("data-bs-theme") === "light" ? "dark" : "light";
  html.setAttribute("data-bs-theme", e);
  localStorage.setItem("themez", e);
});
(() => {
  const e = doc.querySelector(".youtube-outer");
  const o = doc.querySelector(".youtube-popup");
  const r = doc.querySelector(".youtube-confirm");
  const c = () => {
    e.classList.remove("active");
    r.classList.remove("active");
    o.innerHTML = "";
  };
  e.addEventListener("click", e => {
    if (!r.contains(e.target)) {
      r.classList.add("active");
    }
  });
  r.addEventListener("click", e => {
    if (e.target.matches(".confirm-watch")) {
      r.classList.remove("active");
    } else if (e.target.matches(".confirm-close")) {
      c();
    }
  });
  win.addEventListener("popstate", c);
  doc.querySelectorAll(".youtube").forEach(r => {
    let i = r.dataset.source;
    const a = r.dataset.title;
    const s = r.dataset.quality || "hqdefault";
    const u = i.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (u) {
      i = u[1];
    }
    const d = "https://img.youtube.com/vi/" + i + "/" + s + ".jpg";
    const l = new Image();
    l.className = "yt-img lazy";
    l.dataset.src = d;
    l.src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    l.alt = a;
    l.addEventListener("load", () => {
      if (r.prepend) {
        r.prepend(l);
      } else {
        r.insertBefore(l, r.firstChild);
      }
      lazyContent.update();
    });
    r.addEventListener("click", () => {
      e.classList.add("active");
      o.innerHTML = "<iframe class=\"border-0\" title=\"" + a + "\" allowfullscreen allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" src=\"https://www.youtube.com/embed/" + i + "?rel=0&showinfo=0&autoplay=1&loop=1&playlist=" + i + "\"></iframe>";
      history.pushState(null, "", "");
    });
  });
})();
(() => {
  var e;
  var o = doc.getElementById("current-year");
  if (o) {
    e = new Date().getFullYear();
    o.textContent = e;
  }
})();
if (typeof fL != "function" || !fLExt) {
  win.onload = function () {
    body.innerHTML = "";
  };
}
(() => {
  const e = doc.querySelector(".blog-posts");
  const o = doc.querySelector(".blog-older");
  if (o) {
    const r = o.textContent;
    const c = lang === "id" ? "Memuat..." : "Loading...";
    const i = lang === "id" ? "Dimuat!" : "Loaded!";
    o.addEventListener("click", a => {
      a.preventDefault();
      o.innerHTML = c;
      o.classList.add("disabled");
      const d = o.getAttribute("href");
      const l = new XMLHttpRequest();
      l.open("GET", d);
      l.onload = () => {
        if (l.status === 200) {
          const c = new DOMParser().parseFromString(l.response, "text/html");
          const a = c.querySelectorAll(".blog-post");
          const s = c.querySelector(".blog-older");
          if (a) {
            a.forEach(c => {
              e.appendChild(c);
              o.innerHTML = r;
              o.classList.remove("disabled");
            });
          }
          if (s) {
            o.href = s.href;
          } else {
            o.removeAttribute("href");
            o.setAttribute("aria-disabled", true);
            o.innerHTML = i;
          }
          lazyContent.update();
          fIW();
        }
      };
      l.send();
    });
  }
})();
(() => {
  if (body.classList.contains("postpage")) {
    let e = doc.querySelector("#article-content");
    if (!e) {
      return;
    }
    let o = e.querySelectorAll("h1,h2,h3,h4,h5,h6");
    if (o.length > 2) {
      let e = doc.querySelector(".init-toc");
      if (e && e.classList.contains("hidden")) {
        return;
      }
      let r = e || o[0];
      let c = doc.createElement("div");
      let i = e && e.classList.contains("close");
      c.className = "toc-wrap collapse-wrap";
      c.innerHTML = "<button class=\"toc-btn toggle-collapse\" type=\"button\" aria-expanded=\"" + (i ? "false" : "true") + "\"><svg class=\"svg-icon\"><use xlink:href=\"#list-ul\"/></svg>Daftar Isi</button><div class=\"collapse collapse-content" + (i ? "" : " show") + "\"><div class=\"toc-inner\"></div></div>";
      r.parentNode.insertBefore(c, r);
      c.setAttribute("data-track", "true");
      [].filter.call(doc.querySelectorAll(".toc-wrap"), n => !n.hasAttribute("data-track")).forEach(n => n.remove());
    }
    class r {
      constructor({
        from: e,
        to: o
      }) {
        this.e = e;
        this.t = o;
        this.h = e.querySelectorAll("h1,h2,h3,h4,h5,h6");
        this.i = doc.createElement("div");
      }
      lvl() {
        let c = 6;
        this.h.forEach(t => {
          let i = r.hl(t);
          if (i < c) {
            c = i;
          }
        });
        return c;
      }
      static id(n) {
        return n.textContent.toLowerCase().replace(/ /g, "_").replace(/\//g, "_").replace(/&lt;|&gt;|&amp;|&amp;nbsp;|&nbsp;|\xA0|[\n\r\f]+/g, "").replace(/[.,\#!$%\^&\*;:{}=\-@`~()<>?\"'“+”]/g, "");
      }
      static hl(e) {
        return parseInt(e.tagName[1]) || 1;
      }
      gen() {
        let o = this.lvl() - 1;
        let c = this.i;
        this.h.forEach(t => {
          let a = r.hl(t);
          let s = a - o;
          let u = doc.createElement("a");
          t.id ||= r.id(t);
          u.href = "#" + t.id;
          u.textContent = t.textContent;
          if (s > 0) {
            for (let t = 0; t < s; t++) {
              let t = doc.createElement("ul");
              t.className = "ul-tight";
              let e = doc.createElement("li");
              t.appendChild(e);
              c.appendChild(t);
              c = e;
            }
            c.appendChild(u);
          } else {
            for (let t = 0; t < -s; t++) {
              c = c.parentNode.parentNode;
            }
            let t = doc.createElement("li");
            t.appendChild(u);
            c.parentNode.appendChild(t);
            c = t;
          }
          o = a;
        });
        this.t.appendChild(this.i.firstChild);
      }
    }
    doc.addEventListener("DOMContentLoaded", () => {
      if (o.length > 2) {
        new r({
          from: e,
          to: doc.querySelector(".toc-inner")
        }).gen();
      }
    });
  }
})();
(() => {
  const e = (e, o, r) => {
    e.forEach((t, i) => {
      t.addEventListener("click", n => {
        n.preventDefault();
        e.forEach(t => t.classList.remove("active"));
        t.classList.add("active");
        o.forEach((n, e) => {
          const a = new bootstrap.Collapse(n, {
            toggle: false
          });
          if (r) {
            const e = t.getAttribute("href").substring(1);
            if (n.id === e) {
              a.show();
            } else {
              a.hide();
            }
          } else if (i === e) {
            a.show();
          } else {
            a.hide();
          }
        });
      });
    });
  };
  doc.querySelectorAll(".nav-tabs-wrap").forEach(o => {
    const c = o.querySelectorAll(".nav-tabs-link .nav-link");
    const i = o.querySelectorAll(".nab-tabs-content .collapse");
    e(c, i, false);
  });
  const o = doc.querySelector("#nav-tabs");
  if (o) {
    const r = o.querySelectorAll(".nav-link");
    const c = doc.querySelectorAll("#nav-tabs-content .collapse");
    e(r, c, true);
  }
})();
doc.querySelectorAll(".collapse-wrap").forEach(function (t) {
  const o = t.querySelector(".toggle-collapse");
  const r = t.querySelector(".collapse-content");
  o.addEventListener("click", function () {
    const c = o.getAttribute("aria-expanded") === "true";
    o.setAttribute("aria-expanded", !c);
    bootstrap.Collapse.getOrCreateInstance(r)[c ? "hide" : "show"]();
  });
});
doc.querySelectorAll(".accordion").forEach((t, n) => {
  const r = n > 0 ? "-" + String.fromCharCode(65 + n) : "";
  const c = new Set();
  let i = 2;
  if (r) {
    const n = "" + t.id + r;
    t.id = n;
  }
  t.querySelectorAll(".accordion-item").forEach(n => {
    const s = n.querySelector(".accordion-button");
    const u = n.querySelector(".accordion-collapse");
    let d = u.id + r;
    if (c.has(d)) {
      d = u.id + "-" + i++ + r;
      u.id = d;
    } else {
      u.id = d;
    }
    u.setAttribute("data-bs-parent", "#" + t.id);
    s.setAttribute("data-bs-target", "#" + d);
    s.setAttribute("aria-controls", d);
    c.add(d);
  });
});
(() => {
  if (doc.getElementById("article-comments")) {
    const e = doc.querySelector(".comment-sort");
    if (e) {
      e.addEventListener("click", () => {
        const o = doc.querySelector(".comment-newest");
        const r = doc.querySelector(".comment-oldest");
        const c = doc.querySelector(".comments-wrap");
        o.classList.toggle("d-none");
        r.classList.toggle("d-none");
        c.classList.toggle("flex-column-reverse");
      });
    }
    doc.querySelectorAll(".comment-response").forEach(function (e) {
      e.addEventListener("click", function () {
        const e = this.getAttribute("data-target");
        const r = doc.querySelector("[data-id=\"" + e + "\"].comments-thread");
        const c = doc.querySelector("[data-id=\"" + e + "\"].comment-reply");
        r.classList.toggle("d-none");
        c.classList.toggle("d-none");
      });
    });
    const o = doc.querySelectorAll(".comment-reply");
    const r = doc.querySelector(".comment-add");
    const c = doc.querySelector(".comment-form");
    const i = doc.querySelector(".comment-iframe");
    o.forEach(e => {
      e.addEventListener("click", () => {
        const c = e.dataset.id;
        doc.getElementById(c).appendChild(i);
        i.dataset.src = i.dataset.src.replace(/&parentID=\d+/, "") + "&parentID=" + c;
        i.src = i.dataset.src;
        i.classList.remove("border");
        r.classList.remove("d-none");
      });
    });
    if (r) {
      r.addEventListener("click", () => {
        c.appendChild(i);
        i.dataset.src = i.dataset.src.replace(/&parentID=\d+/, "");
        i.src = i.dataset.src;
        i.classList.add("border");
        r.classList.add("d-none");
      });
    }
  }
})();
(() => {
  const e = "googleTranslateElementInit";
  const o = doc.getElementById("translate-btn");
  if (o) {
    win[e] = function () {
      new google.translate.TranslateElement({
        pageLanguage: "id",
        includedLanguages: win.langugeEdz || "id,en",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, o.id);
    };
    var r = localStorage.getItem("transEdz");
    if (r !== "true") {
      var c = false;
      var i = false;
      win.addEventListener("scroll", () => {
        if (html.scrollTop !== 0 && !c || body.scrollTop !== 0 && !c) {
          s();
          c = true;
          i = true;
        }
      }, true);
      win.addEventListener("click", () => {
        if (!i && !c) {
          s();
          i = true;
          c = true;
        }
      }, true);
    }
    if (r === "true") {
      a();
    }
  }
  function a() {
    var r = doc.createElement("script");
    r.async = true;
    r.src = "https://translate.google.com/translate_a/element.js?cb=" + e;
    body.appendChild(r);
  }
  function s() {
    a();
    localStorage.setItem("transEdz", "true");
  }
})();
new MutationObserver(t => {
  t.forEach(t => {
    if (t.attributeName === "lang" && t.oldValue !== "id" && html.classList.contains("translated-ltr") && html.lang === "id") {
      location.reload();
    }
  });
}).observe(html, {
  attributes: true,
  attributeFilter: ["class", "lang"],
  attributeOldValue: true
});
runOptim(() => [...doc.querySelectorAll("[data-bs-toggle=\"tooltip\"]")].map(t => new bootstrap.Tooltip(t)));

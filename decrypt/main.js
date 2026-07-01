const doc = document;
const win = window;
const html = doc.documentElement;
const lang = html.getAttribute("lang");
const body = doc.body;
function fIW() {
  const e = doc.querySelectorAll("img, .lazy-sharp[data-bg]");
  const r = ["/w720/", "=w720", "/w480/", "=w480"];
  const o = ["/w720-rw/", "=w720-rw", "/w480-rw/", "=w480-rw"];
  const i = ["data-src", "data-srcset", "data-bg"];
  e.forEach(n => {
    i.forEach(t => {
      if (n.hasAttribute(t)) {
        let e = n.getAttribute(t);
        r.forEach((t, n) => {
          e = e.replace(t, o[n]);
        });
        n.setAttribute(t, e);
      }
    });
  });
}
(() => {
  const e = new Set();
  let r = false;
  win.runOptim = function (...o) {
    o.forEach(t => e.add(t));
    if (localStorage.getItem("hasScrolled") === "true") {
      e.forEach(t => t());
    } else if (!r) {
      win.addEventListener("scroll", function t() {
        localStorage.setItem("hasScrolled", "true");
        e.forEach(t => t());
        win.removeEventListener("scroll", t);
      });
      r = true;
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
new Swiper("#slider-teacher", {
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  }
});
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
(() => {
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
})();
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
  const r = doc.querySelector(".style-source");
  let o = 0;
  if (r) {
    e.forEach(i => {
      const s = doc.createElement("link");
      s.rel = "stylesheet";
      s.href = i;
      s.onload = () => {
        o++;
        if (o === e.length) {
          doc.body.classList.add("style-loaded");
        }
      };
      r.insertAdjacentElement("afterend", s);
    });
  }
}
function fLBP() {
  var e = html.lang == "id" ? "Belum ada postingan dengan label ini!" : "No posts with this label yet!";
  var r = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  var o = "https://blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgfMvYAhAbdHksiBA24JKmb2Tav6K0GviwztID3Cq4VpV96HaJfy0viIu8z1SSw_G9n5FQHZWSRao61M3e58ImahqBtr7LiOUS6m_w59IvDYwjmMcbq3fKW4JSbacqkbxTo8B90dWp0Cese92xfLMPe_tg11g/h60/";
  function i(e) {
    return e.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
  }
  function c(e) {
    return e.trim().replace(/&nbsp;/g, " ").replace(/<br *\/?>|[\s]+/gi, " ").replace(/<.*?>|[<>]/g, "").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
  }
  function a(e, r) {
    const {
      h: i,
      w: c
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
    }[r];
    return e.replace(/\/default/g, "/hqdefault").replace(/(\/|=)s72.*?-c(?:-rw)?/g, "$1w" + c + "-h" + i + "-c-k-no-nu-rw");
  }
  win.cardTypeOne = function (s, d) {
    var f = s.feed.entry;
    if (f && f.length > 0) {
      var l = "";
      for (var p = 0; p < f.length; ++p) {
        for (var g = f[p], x = 0; x < g.link.length; ++x) {
          if (g.link[x].rel == "alternate") {
            var w = g.link[x].href;
          }
        }
        var b = i(g.title.$t);
        var h = c(g.summary.$t);
        var m = h.substring(0, h.lastIndexOf(" ", 150));
        var v = g.author[0].name.$t;
        var y = !!g.author[0].uri && g.author[0].uri.$t;
        var T = g.published.$t;
        var E = g.updated.$t;
        var I = g.media$thumbnail ? a(g.media$thumbnail.url, "ratio16to9") : r;
        l += "<article class='slider-inner'>" + ("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"" + w + "\"},\"headline\":\"" + b + "\",\"description\":\"" + m + "\",\"image\":\"" + I + "\",\"author\":{\"@type\":\"Person\",\"name\":\"" + v + "\",\"url\":\"" + y + "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Blogger\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"" + o + "\"}},\"datePublished\":\"" + T + "\",\"dateModified\":\"" + E + "\"}</script>") + "<div class='overflow-hidden h-100 border rounded-lg shadow-md bg-body bg-dm-dark-3'><a class='ratio ratio-w-16 ratio-h-9 d-block bg-dark bg-opacity-50 bg-dm-dark' aria-label='" + b + "' href='" + w + "'><img class='lazy' data-src='" + I + "' alt='" + b + "'/></a><div class='px-4 py-3'><h3 class='mb-1 fs-2 lh-22px text-hov-primary'><a class='clamp clamp-2' title='" + b + "' href='" + w + "'>" + b + "</a></h3><p class='clamp clamp-2 text-slate'>" + m + "</p></div></div></article>";
      }
      d.innerHTML = l;
    } else {
      d.setAttribute("title", e);
    }
  };
  win.cardTypeTwo = function (s, d) {
    var f = s.feed.entry;
    if (f && f.length > 0) {
      var l = "";
      for (var p = 0; p < f.length; ++p) {
        for (var j = f[p], k = 0; k < j.link.length; ++k) {
          if (j.link[k].rel == "alternate") {
            var A = j.link[k].href;
          }
        }
        var g = i(j.title.$t);
        var x = j.author[0].name.$t;
        var w = !!j.author[0].uri && j.author[0].uri.$t;
        var b = j.published.$t;
        var h = new Date(b).toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        var m = new Date(b).toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        });
        var v = j.updated.$t;
        var y = j.media$thumbnail ? a(j.media$thumbnail.url, "ratio16to9") : r;
        var T = j.content.$t;
        var E = new DOMParser().parseFromString(T, "text/html");
        var I = (t, n) => E.querySelector(t)?.textContent || n;
        var S = I(".agenda-date span", h);
        var _ = I(".agenda-time span", m + " s/d Selesai");
        var M = I(".agenda-location span", j.georss$featurename?.$t || "Indonesia");
        E.querySelector(".agenda-description")?.remove();
        var O = c(E.body.textContent);
        l += "<article class='slider-inner'>" + ("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"" + A + "\"},\"headline\":\"" + g + "\",\"description\":\"" + (O = O.substring(0, O.lastIndexOf(" ", 150))) + "\",\"image\":\"" + y + "\",\"author\":{\"@type\":\"Person\",\"name\":\"" + x + "\",\"url\":\"" + w + "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Blogger\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"" + o + "\"}},\"datePublished\":\"" + b + "\",\"dateModified\":\"" + v + "\"}</script>") + "<div class='position-relative overflow-hidden mb-3 rounded-lg'><a class='ratio ratio-w-16 ratio-h-9 d-block bg-dark bg-opacity-50 bg-dm-dark' aria-label='" + g + "' href='" + A + "'><img class='lazy' data-src='" + y + "' alt='" + g + "'/></a><div class='position-absolute top-0 d-flex align-items-center gap-2 px-3 py-1 rounded-br-lg fw-medium fs-n1 bg-secondary text-dark'><svg class='svg-icon' aria-hidden='true'><use xlink:href='#date'/></svg><span>" + S + "</span></div></div><h3 class='mb-1 fs-2 lh-22px'><a class='clamp clamp-1' title='" + g + "' href='" + A + "'>" + g + " </a></h3><div class='d-flex flex-wrap gap-x-3'><div class='d-flex align-items-center gap-1 fs-n1 lh-22px'><svg class='svg-icon flex-shrink-0' aria-hidden='true'><use xlink:href='#map'/></svg><span class='clamp clamp-1'>" + M + "</span></div><div class='d-flex align-items-center gap-1 fs-n1 lh-22px'><svg class='svg-icon flex-shrink-0' aria-hidden='true'><use xlink:href='#time'/></svg><span class='clamp clamp-1'>" + _ + "</span></div></div></article>";
      }
      d.innerHTML = l;
    } else {
      d.setAttribute("title", e);
    }
  };
  win.cardTypeThree = function (s, d) {
    var f = s.feed.entry;
    if (f && f.length > 0) {
      var l = "";
      for (var p = 0; p < f.length; ++p) {
        for (var g = f[p], x = 0; x < g.link.length; ++x) {
          if (g.link[x].rel == "alternate") {
            var w = g.link[x].href;
          }
        }
        var b = i(g.title.$t);
        var h = c(g.summary.$t);
        var m = h.substring(0, h.lastIndexOf(" ", 150));
        var v = g.author[0].name.$t;
        var y = !!g.author[0].uri && g.author[0].uri.$t;
        var T = g.published.$t;
        var E = g.updated.$t;
        var I = g.media$thumbnail ? a(g.media$thumbnail.url, "ratio16to10") : r;
        l += "<article class='slider-inner'>" + ("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"" + w + "\"},\"headline\":\"" + b + "\",\"description\":\"" + m + "\",\"image\":\"" + I + "\",\"author\":{\"@type\":\"Person\",\"name\":\"" + v + "\",\"url\":\"" + y + "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Blogger\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"" + o + "\"}},\"datePublished\":\"" + T + "\",\"dateModified\":\"" + E + "\"}</script>") + "<a class='group ratio ratio-w-16 ratio-h-10 overflow-hidden d-block rounded-lg bg-dark bg-opacity-90' href='" + w + "'><img class='group-hov-scale lazy' data-src='" + I + "' alt='" + b + "'/><div class='d-flex justify-content-center align-items-end p-3 text-center bg-gradient-2 bg-gradient-overlay'><h3 class='clamp clamp-2 fs-1 mb-0' title='" + b + "'>" + b + "</h3></div></a></article>";
      }
      d.innerHTML = l;
    } else {
      d.setAttribute("title", e);
    }
  };
  win.cardTypeFour = function (s, d) {
    var f = s.feed.entry;
    if (f && f.length > 0) {
      var l = "";
      for (var p = 0; p < f.length; ++p) {
        for (var x = f[p], w = 0; w < x.link.length; ++w) {
          if (x.link[w].rel == "alternate") {
            var b = x.link[w].href;
          }
        }
        var E = i(x.title.$t);
        var I = x.content.$t;
        var S = new DOMParser().parseFromString(I, "text/html");
        var _ = (t, n) => S.querySelector(t)?.textContent || n;
        var M = _(".teacher-name", E);
        var O = _(".teacher-position", "Guru Profesional");
        S.querySelector(".table")?.remove();
        var g = c(S.body.textContent);
        g = g.substring(0, g.lastIndexOf(" ", 150));
        var h = x.author[0].name.$t;
        var m = !!x.author[0].uri && x.author[0].uri.$t;
        var v = x.published.$t;
        var y = x.updated.$t;
        var T = x.media$thumbnail ? a(x.media$thumbnail.url, "ratio3to4") : r;
        l += "<article class='slider-inner'>" + ("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"" + b + "\"},\"headline\":\"" + E + "\",\"description\":\"" + g + "\",\"image\":\"" + T + "\",\"author\":{\"@type\":\"Person\",\"name\":\"" + h + "\",\"url\":\"" + m + "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Blogger\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"" + o + "\"}},\"datePublished\":\"" + v + "\",\"dateModified\":\"" + y + "\"}</script>") + "<div class='position-relative overflow-hidden mb-3 rounded-lg'><a class='ratio ratio-w-3 ratio-h-4 d-block bg-dark bg-opacity-50 bg-dm-dark' aria-label='" + E + "' href='" + b + "'><img class='lazy' data-src='" + T + "' alt='" + E + "'/></a><div class='position-absolute top-0 d-flex align-items-center gap-2 px-3 py-1 rounded-br-lg fw-medium fs-n1 bg-secondary text-dark'><svg class='svg-icon flex-shrink-0' aria-hidden='true'><use xlink:href='#user'/></svg><span class='clamp clamp-1'>" + O + "</span></div></div><h3 class='mb-0 fs-2 lh-22px'><a class='clamp clamp-1' title='" + E + "' href='" + b + "'>" + M + "</a></h3></article>";
      }
      d.innerHTML = l;
    } else {
      d.setAttribute("title", e);
    }
  };
  win.cardTypeFive = function (s, d) {
    var f = s.feed.entry;
    if (f && f.length > 0) {
      var l = "";
      for (var p = 0; p < f.length; ++p) {
        for (var g = f[p], x = 0; x < g.link.length; ++x) {
          if (g.link[x].rel == "alternate") {
            var w = g.link[x].href;
          }
        }
        var b = i(g.title.$t);
        var h = c(g.summary.$t);
        var m = h.substring(0, h.lastIndexOf(" ", 150));
        var v = g.author[0].name.$t;
        var y = !!g.author[0].uri && g.author[0].uri.$t;
        var T = g.published.$t;
        var E = g.updated.$t;
        var I = g.media$thumbnail ? a(g.media$thumbnail.url, "ratio16to10") : r;
        l += "<article>" + ("<script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"" + w + "\"},\"headline\":\"" + b + "\",\"description\":\"" + m + "\",\"image\":\"" + I + "\",\"author\":{\"@type\":\"Person\",\"name\":\"" + v + "\",\"url\":\"" + y + "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Blogger\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"" + o + "\"}},\"datePublished\":\"" + T + "\",\"dateModified\":\"" + E + "\"}</script>") + "<a class='group ratio ratio-w-16 ratio-h-10 overflow-hidden d-block rounded-lg shadow-lg bg-dark bg-opacity-90' href='" + w + "'><img class='group-hov-scale lazy' data-src='" + I + "' alt='" + b + "'/><div class='d-flex justify-content-center align-items-end p-3 text-center bg-gradient-2 bg-gradient-overlay'><h3 class='clamp clamp-2 fs-1 mb-0' title='" + b + "'>" + b + "</h3></div></a></article>";
      }
      d.innerHTML = l;
    } else {
      d.setAttribute("title", e);
    }
  };
  Array.from(doc.querySelectorAll(".fetch-load")).forEach(function (e) {
    const o = e.dataset.label;
    const i = e.dataset.variant;
    const c = e.dataset.result || 4;
    const a = e.dataset.cardtype;
    const s = encodeURIComponent(o);
    fetch(blogUrl + "feeds/posts/" + i + "/-/" + s + "?max-results=" + c + "&alt=json").then(t => t.json()).then(t => {
      const i = win[a];
      if (typeof i == "function") {
        i(t, e);
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
  function r() {
    body.innerHTML = "<div id=\"warning\" class=\"position-fixed top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center p-5 text-center bg-pattern bg-primary text-white entered\"><div class=\"p-5 border border-2 border-primary-subtle rounded-xl shadow-xl bg-primary\"><h4 class=\"fs-7\">Activate Templates</h4><p class=\"fs-lg-2\">Instalasi berhasil !! untuk mendapatkan kode lisensi silahkan <a id=\"generate-link\" class=\"fw-bold text-yellow\" href=\"#\" target=\"_blank\">klik disini</a>.</p><div id=\"warning-countdown\" class=\"fs-8 lh-1\">20</div></div></div>";
    var r = "https://wa.me/6285175006371?text=Generate+kode+lisensi+untuk+domain+ini+sekarang!%0A%0A" + blogUrl.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "") + "+%0A%0A";
    doc.getElementById("generate-link").href = r;
    var o = doc.getElementById("warning-countdown");
    var i = setInterval(function () {
      if (o.textContent <= 0) {
        win.location.href = "https://www.banjarmasinkota.go.id";
        clearInterval(i);
      } else {
        o.textContent -= 1;
      }
    }, 1000);
  }
  doc.addEventListener("DOMContentLoaded", function () {
    if (e) {
      var c = e.textContent.split("-");
      var a = c[0];
      var s = parseInt(c[1], 10);
      var d = new XMLHttpRequest();
      d.open("GET", "https://cdn.jsdelivr.net/gh/wzbakone/blogfile@main/decrypt/list.json", true);
      d.onerror = function () {
        if (d.status !== 0) {
          r();
        }
      };
      d.onload = function () {
        var e = JSON.parse(this.response).user;
        var c = new XMLHttpRequest();
        c.open("GET", "/feeds/posts/summary/?alt=json", true);
        c.onload = function () {
          var o = JSON.parse(this.response).feed.id.$t.split("-")[1];
          if (s >= 0 && s < e.length) {
            var c = e[s];
            if (c.id === o && c.code === a) {
              return;
            }
          }
          r();
        };
        c.send();
      };
      d.send();
    } else {
      r();
    }
  });
  fLExt = true;
}
fL();
(() => {
  const e = () => {
    const r = doc.querySelector(".navbar-fixed");
    if (win.scrollY > 250) {
      r.classList.add("fixed-top");
      body.style.paddingTop = r.offsetHeight + "px";
    } else {
      r.classList.remove("fixed-top");
      body.style.paddingTop = "0";
    }
  };
  if (win.scrollY > 250) {
    e();
  }
  win.addEventListener("scroll", e);
})();
doc.querySelectorAll(".navbar-nav").forEach(t => {
  const r = t.querySelectorAll(".nav-link");
  let o;
  let i;
  function c(t, r, o = false) {
    const c = doc.createElement("div");
    c.classList.add("dropdown");
    const a = doc.createElement("a");
    a.classList.add(o ? "dropdown-item" : "nav-link", "dropdown-toggle");
    a.href = t;
    a.setAttribute("role", "button");
    a.setAttribute("data-bs-toggle", "dropdown");
    a.setAttribute("data-bs-auto-close", "outside");
    a.setAttribute("aria-expanded", "false");
    a.textContent = r;
    const s = doc.createElement("div");
    s.classList.add("dropdown-menu");
    if (o) {
      s.classList.add("position-relative");
    }
    c.appendChild(a);
    c.appendChild(s);
    return {
      dropdown: c,
      menu: s
    };
  }
  r.forEach((t, a) => {
    const d = t.getAttribute("href");
    const u = d.match(/onclick="([^"]*)"/);
    if (u) {
      t.setAttribute("onclick", u[1]);
      t.setAttribute("href", "#!");
    }
    const f = t.textContent.trim();
    const l = f.startsWith("_") && !f.startsWith("__");
    if (f.startsWith("__")) {
      const n = f.substring(2);
      if (i) {
        const t = doc.createElement("a");
        t.classList.add("dropdown-item");
        t.href = d;
        t.textContent = n;
        i.appendChild(t);
      }
      t.remove();
    } else if (l) {
      const n = f.substring(1);
      if (a + 1 < r.length && r[a + 1].textContent.trim().startsWith("__")) {
        const {
          dropdown: t,
          menu: r
        } = c(d, n, true);
        i = r;
        if (o) {
          o.appendChild(t);
        }
      } else if (o) {
        const t = doc.createElement("a");
        t.classList.add("dropdown-item");
        t.href = d;
        t.textContent = n;
        o.appendChild(t);
      }
      t.remove();
    } else {
      if (a + 1 < r.length && r[a + 1].textContent.trim().startsWith("_") && !r[a + 1].textContent.trim().startsWith("__")) {
        const {
          dropdown: n,
          menu: r
        } = c(d, f);
        o = r;
        t.parentNode.insertBefore(n, t.nextSibling);
        t.remove();
      } else {
        o = null;
      }
      i = null;
    }
    if (a === r.length - 1 && !f.startsWith("_")) {
      let n = "#mortarboard";
      const r = f.indexOf("@");
      let o = f;
      if (r !== -1) {
        o = f.substring(r + 1).trim();
        n = "#" + f.substring(0, r).trim();
      }
      if (f.startsWith("noneBtn@")) {
        t.textContent = o;
      } else {
        const r = doc.createElement("a");
        r.classList.add("nav-link", "btn");
        r.setAttribute("role", "button");
        r.href = d;
        if (u) {
          r.href = "#!";
          r.setAttribute("onclick", u[1]);
        } else {
          r.setAttribute("target", "_blank");
        }
        if (!f.startsWith("noneIcon@")) {
          const t = "http://www.w3.org/2000/svg";
          const o = doc.createElementNS(t, "svg");
          o.classList.add("svg-icon");
          o.setAttribute("aria-hidden", "true");
          const i = doc.createElementNS(t, "use");
          i.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
          o.appendChild(i);
          r.appendChild(o);
        }
        r.appendChild(doc.createTextNode(" " + o));
        t.replaceWith(r);
      }
    }
  });
  t.querySelectorAll(".nav-link, .dropdown-item").forEach(t => {
    const o = t.innerText.trim();
    if (o.endsWith("_")) {
      t.setAttribute("target", "_blank");
      t.innerText = o.slice(0, -1);
    }
  });
  t.classList.remove("visually-hidden");
});
(() => {
  const e = doc.querySelectorAll(".svg-icon");
  for (const r of e) {
    r.setAttribute("aria-hidden", "true");
  }
})();
(function () {
  const e = doc.querySelectorAll(".count");
  const r = new IntersectionObserver(e => {
    e.forEach(t => {
      if (t.isIntersecting) {
        const o = t.target;
        const c = o.getAttribute("count-to");
        const a = c.endsWith("+");
        const s = parseInt(c.replace(/\+$/, ""));
        const d = s / 200;
        let u = 0;
        const f = t => t.toLocaleString("id-ID").replace(/\s/g, "");
        const l = () => {
          if (u < s) {
            u += d;
            o.textContent = a ? f(Math.ceil(u)) + "+" : f(Math.ceil(u));
            setTimeout(l, 10);
          } else {
            o.textContent = a ? f(s) + "+" : f(s);
          }
        };
        l();
        r.unobserve(o);
      }
    });
  });
  e.forEach(n => r.observe(n));
})();
(() => {
  const e = doc.getElementById("navfloat");
  const r = doc.querySelector(".i-whatsapp");
  const o = doc.getElementById("chatWrapper");
  const i = doc.querySelector(".chat-close");
  const c = doc.querySelector(".chat-form");
  const a = () => {
    if (win.scrollY > 10 && !s) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  };
  let s = false;
  let d = false;
  const u = new IntersectionObserver(r => {
    r.forEach(t => {
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
  const f = doc.getElementById("copyright");
  u.observe(f);
  if (win.scrollY > 10) {
    a();
  }
  win.addEventListener("scroll", a);
  r.addEventListener("click", () => {
    o.classList.add("active");
    e.classList.add("pending");
    if (!d) {
      new LazyLoad({
        elements_selector: ".lazy-chat"
      });
      d = true;
    }
  });
  i.addEventListener("click", () => {
    o.classList.remove("active");
    e.classList.remove("pending");
  });
  c.addEventListener("submit", e => {
    e.preventDefault();
    let o = c.getAttribute("data-nomor");
    let i = doc.getElementById("chat-input").value;
    if (o.startsWith("08")) {
      o = "628" + o.slice(2);
    }
    const a = "https://wa.me/" + o + "?text=" + encodeURIComponent(i);
    win.open(a, "_blank");
    c.reset();
  });
})();
doc.getElementById("searchCanv").addEventListener("shown.bs.offcanvas", function () {
  doc.getElementById("searchInput").focus();
});
(() => {
  const e = doc.querySelector(".i-main");
  function r() {
    const o = (win.scrollY || html.scrollTop) / (html.scrollHeight - html.clientHeight) * 100 * 3.6;
    e.style.setProperty("--ds-deg", o + "deg");
  }
  win.addEventListener("scroll", r);
  r();
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
  const r = doc.querySelector(".youtube-popup");
  const o = doc.querySelector(".youtube-confirm");
  const i = () => {
    e.classList.remove("active");
    o.classList.remove("active");
    r.innerHTML = "";
  };
  e.addEventListener("click", e => {
    if (!o.contains(e.target)) {
      o.classList.add("active");
    }
  });
  o.addEventListener("click", e => {
    if (e.target.matches(".confirm-watch")) {
      o.classList.remove("active");
    } else if (e.target.matches(".confirm-close")) {
      i();
    }
  });
  win.addEventListener("popstate", i);
  doc.querySelectorAll(".youtube").forEach(o => {
    let a = o.dataset.source;
    const s = o.dataset.title;
    const d = o.dataset.quality || "hqdefault";
    const u = a.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (u) {
      a = u[1];
    }
    const f = "https://img.youtube.com/vi/" + a + "/" + d + ".jpg";
    const l = new Image();
    l.className = "yt-img lazy";
    l.dataset.src = f;
    l.src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    l.alt = s;
    l.addEventListener("load", () => {
      if (o.prepend) {
        o.prepend(l);
      } else {
        o.insertBefore(l, o.firstChild);
      }
      lazyContent.update();
    });
    o.addEventListener("click", () => {
      e.classList.add("active");
      r.innerHTML = "<iframe class=\"border-0\" title=\"" + s + "\" allowfullscreen allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" src=\"https://www.youtube.com/embed/" + a + "?rel=0&showinfo=0&autoplay=1&loop=1&playlist=" + a + "\"></iframe>";
      history.pushState(null, "", "");
    });
  });
})();
(() => {
  var e;
  var r = doc.getElementById("current-year");
  if (r) {
    e = new Date().getFullYear();
    r.textContent = e;
  }
})();
if (typeof fL != "function" || !fLExt) {
  win.onload = function () {
    body.innerHTML = "";
  };
}
(() => {
  const e = doc.querySelector(".blog-posts");
  const r = doc.querySelector(".blog-older");
  if (r) {
    const o = r.textContent;
    const i = lang === "id" ? "Memuat..." : "Loading...";
    const c = lang === "id" ? "Dimuat!" : "Loaded!";
    r.addEventListener("click", a => {
      a.preventDefault();
      r.innerHTML = i;
      r.classList.add("disabled");
      const d = r.getAttribute("href");
      const u = new XMLHttpRequest();
      u.open("GET", d);
      u.onload = () => {
        if (u.status === 200) {
          const a = new DOMParser().parseFromString(u.response, "text/html");
          const s = a.querySelectorAll(".blog-post");
          const d = a.querySelector(".blog-older");
          if (s) {
            s.forEach(n => {
              e.appendChild(n);
              r.innerHTML = o;
              r.classList.remove("disabled");
            });
          }
          if (d) {
            r.href = d.href;
          } else {
            r.removeAttribute("href");
            r.setAttribute("aria-disabled", true);
            r.innerHTML = c;
          }
          lazyContent.update();
          fIW();
        }
      };
      u.send();
    });
  }
})();
(() => {
  if (body.classList.contains("postpage")) {
    let e = doc.querySelector("#article-content");
    if (!e) {
      return;
    }
    let r = e.querySelectorAll("h1,h2,h3,h4,h5,h6");
    if (r.length > 2) {
      let e = doc.querySelector(".init-toc");
      if (e && e.classList.contains("hidden")) {
        return;
      }
      let o = e || r[0];
      let i = doc.createElement("div");
      let c = e && e.classList.contains("close");
      i.className = "toc-wrap collapse-wrap";
      i.innerHTML = "<button class=\"toc-btn toggle-collapse\" type=\"button\" aria-expanded=\"" + (c ? "false" : "true") + "\"><svg class=\"svg-icon\"><use xlink:href=\"#list-ul\"/></svg>Daftar Isi</button><div class=\"collapse collapse-content" + (c ? "" : " show") + "\"><div class=\"toc-inner\"></div></div>";
      o.parentNode.insertBefore(i, o);
      i.setAttribute("data-track", "true");
      [].filter.call(doc.querySelectorAll(".toc-wrap"), n => !n.hasAttribute("data-track")).forEach(n => n.remove());
    }
    class o {
      constructor({
        from: e,
        to: r
      }) {
        this.e = e;
        this.t = r;
        this.h = e.querySelectorAll("h1,h2,h3,h4,h5,h6");
        this.i = doc.createElement("div");
      }
      lvl() {
        let r = 6;
        this.h.forEach(t => {
          let c = o.hl(t);
          if (c < r) {
            r = c;
          }
        });
        return r;
      }
      static id(n) {
        return n.textContent.toLowerCase().replace(/ /g, "_").replace(/\//g, "_").replace(/&lt;|&gt;|&amp;|&amp;nbsp;|&nbsp;|\xA0|[\n\r\f]+/g, "").replace(/[.,\#!$%\^&\*;:{}=\-@`~()<>?\"'“+”]/g, "");
      }
      static hl(e) {
        return parseInt(e.tagName[1]) || 1;
      }
      gen() {
        let r = this.lvl() - 1;
        let i = this.i;
        this.h.forEach(t => {
          let a = o.hl(t);
          let s = a - r;
          let d = doc.createElement("a");
          t.id ||= o.id(t);
          d.href = "#" + t.id;
          d.textContent = t.textContent;
          if (s > 0) {
            for (let t = 0; t < s; t++) {
              let t = doc.createElement("ul");
              t.className = "ul-tight";
              let e = doc.createElement("li");
              t.appendChild(e);
              i.appendChild(t);
              i = e;
            }
            i.appendChild(d);
          } else {
            for (let t = 0; t < -s; t++) {
              i = i.parentNode.parentNode;
            }
            let t = doc.createElement("li");
            t.appendChild(d);
            i.parentNode.appendChild(t);
            i = t;
          }
          r = a;
        });
        this.t.appendChild(this.i.firstChild);
      }
    }
    doc.addEventListener("DOMContentLoaded", () => {
      if (r.length > 2) {
        new o({
          from: e,
          to: doc.querySelector(".toc-inner")
        }).gen();
      }
    });
  }
})();
(() => {
  const e = (e, r, o) => {
    e.forEach((t, n) => {
      t.addEventListener("click", i => {
        i.preventDefault();
        e.forEach(t => t.classList.remove("active"));
        t.classList.add("active");
        r.forEach((e, r) => {
          const a = new bootstrap.Collapse(e, {
            toggle: false
          });
          if (o) {
            const n = t.getAttribute("href").substring(1);
            if (e.id === n) {
              a.show();
            } else {
              a.hide();
            }
          } else if (n === r) {
            a.show();
          } else {
            a.hide();
          }
        });
      });
    });
  };
  doc.querySelectorAll(".nav-tabs-wrap").forEach(r => {
    const i = r.querySelectorAll(".nav-tabs-link .nav-link");
    const c = r.querySelectorAll(".nab-tabs-content .collapse");
    e(i, c, false);
  });
  const r = doc.querySelector("#nav-tabs");
  if (r) {
    const o = r.querySelectorAll(".nav-link");
    const i = doc.querySelectorAll("#nav-tabs-content .collapse");
    e(o, i, true);
  }
})();
doc.querySelectorAll(".collapse-wrap").forEach(function (t) {
  const r = t.querySelector(".toggle-collapse");
  const o = t.querySelector(".collapse-content");
  r.addEventListener("click", function () {
    const i = r.getAttribute("aria-expanded") === "true";
    r.setAttribute("aria-expanded", !i);
    bootstrap.Collapse.getOrCreateInstance(o)[i ? "hide" : "show"]();
  });
});
doc.querySelectorAll(".accordion").forEach((t, n) => {
  const o = n > 0 ? "-" + String.fromCharCode(65 + n) : "";
  const i = new Set();
  let c = 2;
  if (o) {
    const n = "" + t.id + o;
    t.id = n;
  }
  t.querySelectorAll(".accordion-item").forEach(n => {
    const s = n.querySelector(".accordion-button");
    const d = n.querySelector(".accordion-collapse");
    let u = d.id + o;
    if (i.has(u)) {
      u = d.id + "-" + c++ + o;
      d.id = u;
    } else {
      d.id = u;
    }
    d.setAttribute("data-bs-parent", "#" + t.id);
    s.setAttribute("data-bs-target", "#" + u);
    s.setAttribute("aria-controls", u);
    i.add(u);
  });
});
(() => {
  if (doc.getElementById("article-comments")) {
    const e = doc.querySelector(".comment-sort");
    if (e) {
      e.addEventListener("click", () => {
        const r = doc.querySelector(".comment-newest");
        const o = doc.querySelector(".comment-oldest");
        const i = doc.querySelector(".comments-wrap");
        r.classList.toggle("d-none");
        o.classList.toggle("d-none");
        i.classList.toggle("flex-column-reverse");
      });
    }
    doc.querySelectorAll(".comment-response").forEach(function (e) {
      e.addEventListener("click", function () {
        const e = this.getAttribute("data-target");
        const o = doc.querySelector("[data-id=\"" + e + "\"].comments-thread");
        const i = doc.querySelector("[data-id=\"" + e + "\"].comment-reply");
        o.classList.toggle("d-none");
        i.classList.toggle("d-none");
      });
    });
    const r = doc.querySelectorAll(".comment-reply");
    const o = doc.querySelector(".comment-add");
    const i = doc.querySelector(".comment-form");
    const c = doc.querySelector(".comment-iframe");
    r.forEach(e => {
      e.addEventListener("click", () => {
        const n = e.dataset.id;
        doc.getElementById(n).appendChild(c);
        c.dataset.src = c.dataset.src.replace(/&parentID=\d+/, "") + "&parentID=" + n;
        c.src = c.dataset.src;
        c.classList.remove("border");
        o.classList.remove("d-none");
      });
    });
    if (o) {
      o.addEventListener("click", () => {
        i.appendChild(c);
        c.dataset.src = c.dataset.src.replace(/&parentID=\d+/, "");
        c.src = c.dataset.src;
        c.classList.add("border");
        o.classList.add("d-none");
      });
    }
  }
})();
(() => {
  const e = "googleTranslateElementInit";
  const r = doc.getElementById("translate-btn");
  if (r) {
    win[e] = function () {
      new google.translate.TranslateElement({
        pageLanguage: "id",
        includedLanguages: win.langugeEdz || "id,en",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, r.id);
    };
    var o = localStorage.getItem("transEdz");
    if (o !== "true") {
      var i = false;
      var c = false;
      win.addEventListener("scroll", () => {
        if (html.scrollTop !== 0 && !i || body.scrollTop !== 0 && !i) {
          s();
          i = true;
          c = true;
        }
      }, true);
      win.addEventListener("click", () => {
        if (!c && !i) {
          s();
          c = true;
          i = true;
        }
      }, true);
    }
    if (o === "true") {
      a();
    }
  }
  function a() {
    var o = doc.createElement("script");
    o.async = true;
    o.src = "https://translate.google.com/translate_a/element.js?cb=" + e;
    body.appendChild(o);
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

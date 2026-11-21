/* Tema Mini-CRM pentru Bursa: fundal degrade închis, accent roz, carduri de sticlă, cub 3D, setări de fundal.
   Se adaugă o singură linie în index.html, înainte de </body>:  <script src="tema.js"></script> */
(function () {
"use strict";
var d = document, R = d.documentElement;

var BGS = {
  smarald: ["Smarald", "radial-gradient(70% 38% at 0% 0%,rgba(18,130,96,.55),transparent 70%),radial-gradient(80% 45% at 100% 92%,rgba(40,120,210,.6),transparent 72%),linear-gradient(170deg,#0a3a31 0%,#0c2230 38%,#13224a 72%,#173a6b 100%)"],
  noapte: ["Noapte", "linear-gradient(170deg,#232d78 0%,#141b4e 55%,#0b1030 100%)"],
  aurora: ["Aurora", "radial-gradient(70% 40% at 15% 0%,rgba(20,184,166,.28),transparent 70%),radial-gradient(60% 35% at 100% 40%,rgba(34,197,94,.12),transparent 70%),linear-gradient(170deg,#04120f,#050b14)"],
  asfalt: ["Asfalt", "radial-gradient(60% 30% at 50% 0%,rgba(120,80,40,.28),transparent 70%),linear-gradient(170deg,#1c1714,#0b0908)"],
  apus: ["Apus", "linear-gradient(180deg,#2b1a52 0%,#82307a 48%,#f0683f 100%)"],
  ocean: ["Ocean", "linear-gradient(170deg,#06303a 0%,#0a4b5e 42%,#0b2c5a 100%)"],
  padure: ["Pădure", "linear-gradient(170deg,#082414 0%,#0b4025 55%,#04170c 100%)"]
};
var ACS = {
  pink: ["#f9a8d4", "#f472b6", "#8b5cf6"], blue: ["#93c5fd", "#60a5fa", "#6366f1"],
  purple: ["#c4b5fd", "#a78bfa", "#ec4899"], orange: ["#fdba74", "#fb923c", "#f43f5e"],
  teal: ["#5eead4", "#2dd4bf", "#3b82f6"], lime: ["#d9f99d", "#a3e635", "#22c55e"]
};
function ld(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function sv(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
var ST = { bg: ld("bursaBg") || "smarald", ac: ld("bursaAc") || "pink", rm: ld("bursaRm") === "1", gl: ld("bursaGl") != null ? Number(ld("bursaGl")) : 35, img: ld("bursaBgImg") || "" };
if (ST.bg === "poza" && !ST.img) ST.bg = "smarald";
if (!BGS[ST.bg] && ST.bg !== "poza") ST.bg = "smarald";
if (!ACS[ST.ac]) ST.ac = "pink";

var css = ':root{--ac1:#f9a8d4;--ac2:#f472b6;--ac3:#8b5cf6;--ca:.71;--g1:var(--ac2);--g2:var(--ac3);--g3:var(--ac1);--card:rgba(16,26,52,var(--ca));--glass:rgba(16,26,52,var(--ca));--glassb:rgba(255,255,255,.08);--glassh:rgba(255,255,255,.14);--glassd:0 18px 40px -18px rgba(0,0,0,.6);--mute:#9fb2cf;--fill:rgba(255,255,255,.08);--gain:#1fc88f}'
+ 'html{background:#0b1630!important}body{font-family:-apple-system,"SF Pro Display","SF Pro Text",system-ui,"Segoe UI",sans-serif}'
+ '.orbs{display:none}#bgl{position:fixed;inset:0;z-index:-2;pointer-events:none;background-size:cover}'
+ '.card,.alloc,.scene{background:var(--glass);border-color:rgba(255,255,255,.07);box-shadow:0 18px 40px -18px rgba(0,0,0,.6);border-radius:28px}.card:has(.pr){border-radius:30px}'
+ '.hero{background:radial-gradient(110% 90% at 100% 0%,color-mix(in srgb,var(--ac2) 30%,transparent),transparent 62%),var(--glass);animation:none;border:1px solid rgba(255,255,255,.1);box-shadow:0 22px 50px -20px rgba(0,0,0,.7),inset 0 1px 0 rgba(255,255,255,.12);border-radius:30px}'
+ '.hero::after{background:color-mix(in srgb,var(--ac2) 30%,transparent)}.hero .big{font-weight:800;letter-spacing:-1.5px}'
+ '#tabs,#tabs[data-tab]{--c1:var(--ac2);--c2:var(--ac2);--c3:var(--ac1)}'
+ '#add{width:auto;height:56px;border-radius:99px;padding:0 24px;font-size:17px;font-weight:800;line-height:1;color:#1a1020;background:linear-gradient(90deg,var(--ac2),var(--ac1));border:0;box-shadow:0 12px 30px color-mix(in srgb,var(--ac2) 45%,transparent)}#add:hover{transform:scale(1.04)}'
+ '.ok{background:linear-gradient(90deg,var(--ac2),var(--ac1));color:#1a1020}'
+ 'dialog{background:#101a34;border:1px solid rgba(255,255,255,.08);max-height:88vh;overflow:auto}'
+ '.hero>.tm-gear{right:56px}.tm-cw{position:absolute!important;right:100px;top:10px;width:44px;height:44px;perspective:300px;z-index:2;pointer-events:none}'
+ '.tm-cube{position:relative;width:44px;height:44px;transform-style:preserve-3d;animation:tmspin 16s linear infinite}'
+ '.tm-cube b{position:absolute;inset:0;display:grid;place-items:center;font-size:20px;font-weight:400;border-radius:12px;background:linear-gradient(135deg,rgba(120,230,210,.4),rgba(90,130,255,.12));border:1px solid rgba(255,255,255,.35);box-shadow:inset 0 0 12px rgba(120,220,255,.3);transform:var(--t) translateZ(22px)}'
+ '@keyframes tmspin{from{transform:rotateX(-22deg) rotateY(0)}to{transform:rotateX(-22deg) rotateY(360deg)}}'
+ '.tm-t{font-size:16px;font-weight:700;margin:18px 2px 6px}.tm-bgg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}'
+ '.tm-bgt{height:74px;border-radius:18px;border:2px solid rgba(255,255,255,.1);color:#fff;font-weight:800;font-size:13px;text-align:left;display:flex;align-items:flex-end;padding:9px;font-family:inherit}.tm-bgt.sel{border-color:var(--ac2)}'
+ '.tm-acr{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.tm-acd{width:34px;height:34px;border-radius:50%;border:3px solid transparent;padding:0}.tm-acd.sel{border-color:#fff}'
+ '.tm-row{display:flex;justify-content:space-between;align-items:center;margin:18px 2px 8px;font-weight:600}.tm-x{width:34px;height:34px;border-radius:50%;border:0;background:rgba(255,255,255,.08);color:#cdd8ee;font-size:18px;padding:0}'
+ 'html.rm *,html.rm *::before,html.rm *::after{animation:none!important;transition:none!important}';
var st = d.createElement("style"); st.textContent = css; d.head.appendChild(st);

d.body.insertAdjacentHTML("afterbegin", '<div id="bgl"></div>');
var add = d.getElementById("add"); if (add) add.textContent = "+ Adaugă";
var hero = d.querySelector(".hero");
if (hero) {
  var faces = ["📈", "💹", "🪙", "📊", "💰", "🏦"], ts = ["rotateY(0deg)", "rotateY(90deg)", "rotateY(180deg)", "rotateY(270deg)", "rotateX(90deg)", "rotateX(-90deg)"];
  hero.insertAdjacentHTML("beforeend",
    '<button id="tmgear" class="eye tm-gear" type="button" aria-label="Aspect și fundal"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1"/></svg></button>' +
    '<div class="tm-cw" aria-hidden="true"><div class="tm-cube">' + faces.map(function (f, i) { return '<b style="--t:' + ts[i] + '">' + f + '</b>'; }).join("") + '</div></div>');
}
d.body.insertAdjacentHTML("beforeend",
  '<dialog id="tema"><div style="display:flex;justify-content:space-between;align-items:center"><h2 style="margin:0">Aspect</h2><button class="tm-x" id="tmx" type="button" aria-label="Închide">×</button></div>' +
  '<div class="tm-t">Fundal</div><div class="tm-bgg" id="tmbg"></div>' +
  '<div class="tm-t">Culoare accent</div><div class="tm-acr" id="tmac"></div>' +
  '<div class="tm-t">Transparență carduri <small id="tmglv" style="color:var(--mute)"></small></div><input type="range" id="tmgl" min="0" max="100">' +
  '<div class="tm-row"><span>Animații reduse</span><input type="checkbox" id="tmrm" style="width:26px;height:26px;padding:0"></div>' +
  '<small style="color:var(--mute)">Alegerile se salvează pe acest dispozitiv.</small><input type="file" id="tmf" accept="image/*" hidden></dialog>');

function $(i) { return d.getElementById(i); }
function apply() {
  var b = BGS[ST.bg] || BGS.smarald, a = ACS[ST.ac], ph = ST.bg === "poza" && ST.img;
  $("bgl").style.background = ph ? "linear-gradient(rgba(6,12,28,.5),rgba(6,12,28,.5)),url('" + ST.img + "') center/cover" : b[1];
  R.style.setProperty("--ac1", a[0]); R.style.setProperty("--ac2", a[1]); R.style.setProperty("--ac3", a[2]);
  R.style.setProperty("--ca", (.92 - .6 * ST.gl / 100).toFixed(2));
  R.classList.toggle("rm", ST.rm);
}
function panel() {
  var t = Object.keys(BGS).map(function (k) { return '<button type="button" class="tm-bgt' + (ST.bg === k ? " sel" : "") + '" style="background:' + BGS[k][1] + '" data-bg="' + k + '">' + BGS[k][0] + '</button>'; }).join("");
  t += '<button type="button" class="tm-bgt' + (ST.bg === "poza" ? " sel" : "") + '" style="background:' + (ST.img ? "linear-gradient(rgba(6,12,28,.35),rgba(6,12,28,.35)),url('" + ST.img + "') center/cover" : "rgba(255,255,255,.08)") + '" data-bg="poza">📷 Poza mea</button>';
  $("tmbg").innerHTML = t;
  $("tmac").innerHTML = Object.keys(ACS).map(function (k) { return '<button type="button" class="tm-acd' + (ST.ac === k ? " sel" : "") + '" style="background:' + ACS[k][1] + '" data-ac="' + k + '" aria-label="' + k + '"></button>'; }).join("");
  $("tmgl").value = ST.gl; $("tmglv").textContent = ST.gl + "%"; $("tmrm").checked = ST.rm;
}
function loadImg(f) {
  if (!f) return; var fr = new FileReader();
  fr.onload = function () { var im = new Image(); im.onload = function () {
    var sc = Math.min(1, 1400 / Math.max(im.width, im.height)), c = d.createElement("canvas");
    c.width = Math.round(im.width * sc); c.height = Math.round(im.height * sc); c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
    var u = c.toDataURL("image/jpeg", .75);
    try { localStorage.setItem("bursaBgImg", u); } catch (e) { u = c.toDataURL("image/jpeg", .45); try { localStorage.setItem("bursaBgImg", u); } catch (e2) { alert("Poza e prea mare pentru acest dispozitiv."); return; } }
    ST.img = u; ST.bg = "poza"; sv("bursaBg", "poza"); apply(); panel(); };
    im.src = fr.result; };
  fr.readAsDataURL(f);
}
var dlg = $("tema");
if ($("tmgear")) $("tmgear").addEventListener("click", function () { panel(); dlg.showModal(); });
$("tmx").addEventListener("click", function () { dlg.close(); });
dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("click", function (e) {
  var b = e.target.closest("[data-bg]"), a = e.target.closest("[data-ac]");
  if (b) { var k = b.dataset.bg; if (k === "poza" && !(ST.img && ST.bg !== "poza")) { $("tmf").click(); return; } ST.bg = k; sv("bursaBg", k); apply(); panel(); }
  if (a) { ST.ac = a.dataset.ac; sv("bursaAc", ST.ac); apply(); panel(); }
});
$("tmgl").addEventListener("input", function () { ST.gl = Number(this.value); sv("bursaGl", ST.gl); $("tmglv").textContent = ST.gl + "%"; apply(); });
$("tmrm").addEventListener("change", function () { ST.rm = this.checked; sv("bursaRm", ST.rm ? "1" : ""); apply(); });
$("tmf").addEventListener("change", function () { loadImg(this.files[0]); });
apply();
})();

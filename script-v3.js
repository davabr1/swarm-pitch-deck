// Swarm pitch deck · v3 · 16:9 stage lock + auto-hide HUD
// --------------------------------------------------------------
// #stage is sized each resize to the largest 16:9 rectangle that fits the
// viewport (letterbox/pillarbox bars show in black outside). Slides live at
// their native 1920×1080 and are scaled uniformly into the stage via --scale.
//
// HUD: hidden by default. On pointermove anywhere, show and start a 3-second
// inactivity timer; hide on timeout. Cursor over the HUD or the bottom hot
// zone keeps it visible (timer is reset while hovering).
//
// ?export=1 → render at fixed 1920×1080 with no transitions and no HUD, for
// Playwright/headless screenshotting.

(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const total = slides.length;

  const stage = document.getElementById("stage");
  const hud = document.querySelector(".nav-hud");
  const hotZone = document.querySelector(".nav-hot-zone");
  const prevBtn = hud ? hud.querySelector("[data-nav=prev]") : null;
  const nextBtn = hud ? hud.querySelector("[data-nav=next]") : null;
  const counter = hud ? hud.querySelector(".count") : null;

  const params = new URLSearchParams(location.search);
  const exportMode = params.get("export") === "1";
  if (exportMode) document.body.classList.add("export");

  const TRANSITION_MS = 480;
  const HUD_HIDE_MS = 3000;
  let currentIdx = -1;
  let animating = false;
  let hudTimer = null;
  let hoveringHud = false;

  function fitStage() {
    if (exportMode) {
      document.documentElement.style.setProperty("--scale", "1");
      return;
    }
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(vw / 1920, vh / 1080);
    const w = Math.floor(1920 * scale);
    const h = Math.floor(1080 * scale);
    if (stage) {
      stage.style.width = w + "px";
      stage.style.height = h + "px";
    }
    document.documentElement.style.setProperty("--scale", String(scale));
  }

  function indexFromHash() {
    const n = parseInt(location.hash.replace("#", ""), 10);
    if (Number.isFinite(n) && n >= 1 && n <= total) return n - 1;
    return 0;
  }

  function updateHud(idx) {
    if (location.hash !== `#${idx + 1}`) {
      history.replaceState(null, "", `#${idx + 1}`);
    }
    if (counter) {
      counter.innerHTML = `<b>${idx + 1}</b>/ ${total}`;
    }
    if (prevBtn) prevBtn.disabled = idx <= 0;
    if (nextBtn) nextBtn.disabled = idx >= total - 1;
  }

  function clearMotionClasses(el) {
    el.classList.remove(
      "entering-fwd",
      "entering-back",
      "leaving-fwd",
      "leaving-back",
      "no-transition"
    );
  }

  function showInstant(idx) {
    idx = Math.max(0, Math.min(total - 1, idx));
    slides.forEach((s, i) => {
      clearMotionClasses(s);
      s.classList.toggle("active", i === idx);
    });
    currentIdx = idx;
    updateHud(idx);
  }

  function navigate(targetIdx, dir) {
    targetIdx = Math.max(0, Math.min(total - 1, targetIdx));
    if (targetIdx === currentIdx) return;
    if (exportMode) {
      showInstant(targetIdx);
      return;
    }
    if (animating) return;
    if (currentIdx === -1) {
      showInstant(targetIdx);
      return;
    }

    animating = true;
    const outgoing = slides[currentIdx];
    const incoming = slides[targetIdx];

    incoming.classList.add("no-transition");
    incoming.classList.add(dir === "fwd" ? "entering-fwd" : "entering-back");
    // force reflow so the no-transition starting state is committed
    // eslint-disable-next-line no-unused-expressions
    incoming.offsetWidth;
    incoming.classList.remove("no-transition");

    requestAnimationFrame(() => {
      incoming.classList.remove("entering-fwd", "entering-back");
      incoming.classList.add("active");

      outgoing.classList.remove("active");
      outgoing.classList.add(dir === "fwd" ? "leaving-fwd" : "leaving-back");

      currentIdx = targetIdx;
      updateHud(targetIdx);
    });

    setTimeout(() => {
      clearMotionClasses(outgoing);
      animating = false;
    }, TRANSITION_MS);
  }

  function goTo(idx) {
    idx = Math.max(0, Math.min(total - 1, idx));
    if (idx === currentIdx) return;
    navigate(idx, idx > currentIdx ? "fwd" : "back");
  }

  // -------- HUD visibility --------
  function showHud() {
    if (!hud || exportMode) return;
    hud.classList.add("visible");
  }
  function hideHud() {
    if (!hud || exportMode) return;
    if (hoveringHud) return;
    hud.classList.remove("visible");
  }
  function resetHudTimer() {
    if (hudTimer) clearTimeout(hudTimer);
    hudTimer = setTimeout(hideHud, HUD_HIDE_MS);
  }
  function pokeHud() {
    showHud();
    resetHudTimer();
  }

  if (!exportMode) {
    window.addEventListener("pointermove", pokeHud, { passive: true });

    if (hud) {
      hud.addEventListener("pointerenter", () => { hoveringHud = true; showHud(); });
      hud.addEventListener("pointerleave", () => { hoveringHud = false; resetHudTimer(); });
    }
    if (hotZone) {
      hotZone.addEventListener("pointerenter", () => { hoveringHud = true; showHud(); });
      hotZone.addEventListener("pointerleave", () => { hoveringHud = false; resetHudTimer(); });
      hotZone.style.pointerEvents = "auto";
    }
  }

  if (prevBtn) prevBtn.addEventListener("click", () => navigate(currentIdx - 1, "back"));
  if (nextBtn) nextBtn.addEventListener("click", () => navigate(currentIdx + 1, "fwd"));

  window.addEventListener("keydown", (e) => {
    if (exportMode) return;
    pokeHud();
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      navigate(currentIdx + 1, "fwd"); e.preventDefault();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      navigate(currentIdx - 1, "back"); e.preventDefault();
    } else if (e.key === "Home") {
      goTo(0); e.preventDefault();
    } else if (e.key === "End") {
      goTo(total - 1); e.preventDefault();
    } else if (/^[0-9]$/.test(e.key)) {
      const n = parseInt(e.key, 10);
      goTo(n === 0 ? 9 : n - 1);
      e.preventDefault();
    }
  });

  window.addEventListener("hashchange", () => {
    const idx = indexFromHash();
    if (idx !== currentIdx) goTo(idx);
  });
  window.addEventListener("resize", fitStage);

  fitStage();
  showInstant(indexFromHash());
})();

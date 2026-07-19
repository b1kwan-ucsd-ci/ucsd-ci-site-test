/* ============================================================
   UCSD CI Fellowship — Tweaks Panel (vanilla, cross-page via localStorage)
   ============================================================ */
(function(){
  'use strict';

  const STORAGE_KEY = 'ucsd-ci-tweaks-v1';
  const DEFAULTS = {
    accent: '#ffcd00',           // gold
    grid: 'on',                  // bg grid on/off
    topbar: 'on',                // status bar
    anim: 'on',                  // ticker + cursor animations
  };

  const ACCENT_OPTIONS = [
    { name: 'UCSD Gold', value: '#ffcd00' },
    { name: 'Cyan',      value: '#79c0ff' },
    { name: 'Mint',      value: '#7ee787' },
    { name: 'Coral',     value: '#ff7b72' },
  ];

  // ---- state
  let state = load();

  function load() {
    try { return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); }
    catch(_) { return Object.assign({}, DEFAULTS); }
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(_) {}
  }

  function apply() {
    const root = document.documentElement;
    root.style.setProperty('--accent', state.accent);
    document.body.setAttribute('data-grid', state.grid);
    document.body.setAttribute('data-topbar', state.topbar);
    document.body.setAttribute('data-anim', state.anim);
  }

  function setKey(k, v) {
    state[k] = v;
    save();
    apply();
    if (panelEl) renderPanel();
  }

  // ---- panel UI
  let panelEl = null;
  let panelOpen = false;

  function panelHTML() {
    const accentRow = ACCENT_OPTIONS.map(o => `
      <button class="tw-swatch ${state.accent===o.value?'on':''}" data-tw-accent="${o.value}" title="${o.name}">
        <span style="background:${o.value}"></span>
      </button>
    `).join('');

    const seg = (k, opts) => opts.map(o => `
      <button class="tw-seg ${state[k]===o.value?'on':''}" data-tw-key="${k}" data-tw-val="${o.value}">${o.label}</button>
    `).join('');

    return `
      <div class="tw-head">
        <div class="tw-title">/ Tweaks</div>
        <button class="tw-close" data-tw-close>×</button>
      </div>
      <div class="tw-body">
        <div class="tw-section">
          <div class="tw-label">Accent color</div>
          <div class="tw-swatches">${accentRow}</div>
        </div>
        <div class="tw-section">
          <div class="tw-label">Background grid</div>
          <div class="tw-segs">${seg('grid', [{label:'On',value:'on'},{label:'Off',value:'off'}])}</div>
        </div>
        <div class="tw-section">
          <div class="tw-label">Status bar</div>
          <div class="tw-segs">${seg('topbar', [{label:'On',value:'on'},{label:'Off',value:'off'}])}</div>
        </div>
        <div class="tw-section">
          <div class="tw-label">Animations</div>
          <div class="tw-segs">${seg('anim', [{label:'On',value:'on'},{label:'Off',value:'off'}])}</div>
        </div>
        <div class="tw-foot">
          <button class="tw-reset" data-tw-reset>Reset to defaults</button>
        </div>
      </div>
    `;
  }

  function renderPanel() {
    if (!panelEl) return;
    panelEl.innerHTML = panelHTML();
    bindPanel();
  }

  function bindPanel() {
    panelEl.querySelectorAll('[data-tw-accent]').forEach(b => {
      b.addEventListener('click', () => setKey('accent', b.dataset.twAccent));
    });
    panelEl.querySelectorAll('[data-tw-key]').forEach(b => {
      b.addEventListener('click', () => setKey(b.dataset.twKey, b.dataset.twVal));
    });
    const close = panelEl.querySelector('[data-tw-close]');
    if (close) close.addEventListener('click', () => deactivate());
    const reset = panelEl.querySelector('[data-tw-reset]');
    if (reset) reset.addEventListener('click', () => {
      state = Object.assign({}, DEFAULTS);
      save(); apply(); renderPanel();
    });
  }

  function ensurePanel() {
    if (panelEl) return panelEl;
    panelEl = document.createElement('div');
    panelEl.id = 'tw-panel';
    panelEl.style.cssText = `
      position:fixed;z-index:9999;right:20px;bottom:20px;width:300px;
      background:rgba(7,11,24,0.96);backdrop-filter:blur(14px);
      border:1px solid rgba(255,255,255,0.18);
      border-radius:12px;color:#e6ebf5;
      font-family:'Inter',system-ui,sans-serif;
      box-shadow:0 30px 60px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,205,0,0.05);
      transform:translateY(8px);opacity:0;pointer-events:none;
      transition:opacity .15s,transform .15s;
    `;
    document.body.appendChild(panelEl);

    // styles for inner controls — injected once
    if (!document.getElementById('tw-styles')) {
      const s = document.createElement('style');
      s.id = 'tw-styles';
      s.textContent = `
        #tw-panel .tw-head{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.08)}
        #tw-panel .tw-title{font-family:'JetBrains Mono',monospace;font-size:11px;color:#ffcd00;letter-spacing:0.14em;text-transform:uppercase}
        #tw-panel .tw-close{background:none;border:0;color:#8a96b0;font-size:20px;cursor:pointer;line-height:1;padding:0 4px;font-family:monospace}
        #tw-panel .tw-close:hover{color:#fff}
        #tw-panel .tw-body{padding:14px 16px 16px;display:grid;gap:18px}
        #tw-panel .tw-section{display:grid;gap:8px}
        #tw-panel .tw-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:#5b6885;letter-spacing:0.1em;text-transform:uppercase}
        #tw-panel .tw-swatches{display:flex;gap:8px}
        #tw-panel .tw-swatch{width:36px;height:36px;border-radius:8px;background:transparent;border:1px solid rgba(255,255,255,0.1);cursor:pointer;padding:4px;transition:all .15s}
        #tw-panel .tw-swatch span{display:block;width:100%;height:100%;border-radius:5px}
        #tw-panel .tw-swatch:hover{border-color:rgba(255,255,255,0.3)}
        #tw-panel .tw-swatch.on{border-color:#fff;box-shadow:0 0 0 1px #fff}
        #tw-panel .tw-segs{display:flex;gap:0;border:1px solid rgba(255,255,255,0.1);border-radius:6px;overflow:hidden}
        #tw-panel .tw-seg{flex:1;background:transparent;border:0;color:#8a96b0;padding:8px 10px;font-size:12px;font-family:'JetBrains Mono',monospace;cursor:pointer;border-right:1px solid rgba(255,255,255,0.06);letter-spacing:0.04em;transition:all .15s}
        #tw-panel .tw-seg:last-child{border-right:0}
        #tw-panel .tw-seg:hover{color:#e6ebf5;background:rgba(255,255,255,0.03)}
        #tw-panel .tw-seg.on{background:var(--accent);color:#1a1100;font-weight:600}
        #tw-panel .tw-foot{padding-top:8px;border-top:1px solid rgba(255,255,255,0.06)}
        #tw-panel .tw-reset{background:none;border:1px solid rgba(255,255,255,0.12);color:#8a96b0;padding:8px 12px;border-radius:6px;font-size:11px;font-family:'JetBrains Mono',monospace;cursor:pointer;letter-spacing:0.04em;width:100%}
        #tw-panel .tw-reset:hover{color:#fff;border-color:rgba(255,255,255,0.3)}
      `;
      document.head.appendChild(s);
    }

    return panelEl;
  }

  function activate() {
    ensurePanel();
    renderPanel();
    panelOpen = true;
    requestAnimationFrame(() => {
      panelEl.style.transform = 'translateY(0)';
      panelEl.style.opacity = '1';
      panelEl.style.pointerEvents = 'auto';
    });
  }

  function deactivate() {
    if (!panelEl) return;
    panelOpen = false;
    panelEl.style.transform = 'translateY(8px)';
    panelEl.style.opacity = '0';
    panelEl.style.pointerEvents = 'none';
    try { window.parent.postMessage({type:'__edit_mode_dismissed'}, '*'); } catch(_) {}
  }

  // ---- host protocol
  window.addEventListener('message', (e) => {
    const d = e.data || {};
    if (d.type === '__activate_edit_mode') activate();
    else if (d.type === '__deactivate_edit_mode') deactivate();
  });

  // apply on load
  apply();

  // announce tweak availability — after listener is registered
  try { window.parent.postMessage({type:'__edit_mode_available'}, '*'); } catch(_) {}

  // sync state across pages (storage event when other tab/window changes)
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      state = load();
      apply();
      if (panelEl && panelOpen) renderPanel();
    }
  });
})();

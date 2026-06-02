/* 广州市乐莎美容用具有限公司 - Main JS */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar(); initMobileMenu(); initBackToTop(); initScrollReveal();
  initProductFilters(); initContactForm(); highlightCurrentNav();
  loadTheme(); loadCompanyGlobals();
});

function initNavbar() {
  const n = document.querySelector('.navbar');
  if (!n) return;
  window.addEventListener('scroll', () => n.classList.toggle('scrolled', window.scrollY > 50));
}

function initMobileMenu() {
  const t = document.querySelector('.nav-toggle'), l = document.querySelector('.nav-links');
  if (!t || !l) return;
  t.addEventListener('click', () => l.classList.toggle('open'));
  l.querySelectorAll('a').forEach(a => a.addEventListener('click', () => l.classList.remove('open')));
}

function initBackToTop() {
  const b = document.querySelector('.back-to-top');
  if (!b) return;
  window.addEventListener('scroll', () => b.classList.toggle('visible', window.scrollY > 500));
  b.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initScrollReveal() {
  const r = document.querySelectorAll('.reveal');
  if (r.length === 0) return;
  const o = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); o.unobserve(e.target); } });
  }, { threshold: 0.15 });
  r.forEach(el => o.observe(el));
}

function initProductFilters() {
  const f = document.querySelectorAll('.filter-btn'), c = document.querySelectorAll('.product-card');
  if (f.length === 0 || c.length === 0) return;
  f.forEach(b => b.addEventListener('click', () => {
    f.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const cat = b.dataset.category;
    c.forEach(card => card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none');
  }));
}

function initContactForm() {
  const f = document.getElementById('contact-form');
  if (!f) return;
  f.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(f);
    const data = Object.fromEntries(formData.entries());
    const btn = f.querySelector('button[type="submit"]'), ot = btn.textContent;
    btn.textContent = '\u63d0\u4ea4\u4e2d...'; btn.disabled = true;
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        btn.textContent = '\u2713 \u63d0\u4ea4\u6210\u529f'; btn.style.background = '#2d6a4f';
        setTimeout(() => { btn.textContent = ot; btn.style.background = ''; btn.disabled = false; f.reset(); }, 3000);
      } else {
        btn.textContent = '\u2717 \u63d0\u4ea4\u5931\u8d25'; btn.style.background = '#e74c3c';
        setTimeout(() => { btn.textContent = ot; btn.style.background = ''; btn.disabled = false; }, 3000);
      }
    } catch(err) {
      btn.textContent = '\u2717 \u7f51\u7edc\u9519\u8bef'; btn.style.background = '#e74c3c';
      setTimeout(() => { btn.textContent = ot; btn.style.background = ''; btn.disabled = false; }, 3000);
    }
  });
}

function highlightCurrentNav() {
  const p = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === p || (p === '' && a.getAttribute('href') === 'index.html')) a.classList.add('active');
  });
}

async function loadProducts() {
  const g = document.getElementById('products-grid');
  if (!g) return;
  try {
    const r = await fetch('data/products.json');
    if (!r.ok) throw new Error('fail');
    const d = await r.json();
    g.innerHTML = d.products.map(p => '<div class="product-card reveal" data-category="'+p.category+'"><div class="product-card-image">'+(p.image?'<img src="'+p.image+'" alt="'+p.name+'" loading="lazy">':'<span class="placeholder-icon">\ud83d\udce6</span>')+'</div><div class="product-card-body"><span class="product-tag">'+p.categoryName+'</span><h3>'+p.name+'</h3><p>'+p.description+'</p></div><div class="product-card-footer"><span style="color:var(--gold);font-weight:600;">'+(p.spec||'规格齐全')+'</span><a href="contact.html" class="btn btn-outline">询价</a></div></div>').join('');
    initScrollReveal();
  } catch(e) {
    g.innerHTML = '<div class="empty-state"><div class="icon">\ud83d\udce6</div><p>产品信息加载中，请稍后再试</p></div>';
  }
}

async function loadNews() {
  const g = document.getElementById('news-grid');
  if (!g) return;
  try {
    const r = await fetch('data/news.json');
    if (!r.ok) throw new Error('fail');
    const d = await r.json();
    g.innerHTML = d.news.map(n => '<article class="news-card reveal"><div class="news-card-body"><span class="news-date">'+n.date+'</span><h3>'+n.title+'</h3><p>'+n.summary+'</p></div><div class="news-card-footer"><a href="'+(n.link||'#')+'">阅读全文 →</a></div></article>').join('');
    initScrollReveal();
  } catch(e) {
    g.innerHTML = '<div class="empty-state"><div class="icon">\ud83d\udcf0</div><p>暂无新闻资讯</p></div>';
  }
}

async function loadBrands(){
  const c=document.getElementById('brands-container');if(!c)return;
  try{
    const r=await fetch('data/brands.json');if(!r.ok)throw new Error('fail');
    const d=await r.json();const brands=d.brands||[];
    const catMap={cotton:{icon:'\ud83e\uddfb',name:'\u5316\u5986\u68c9',desc:'\u65e0\u7eba\u5e03/\u7eaf\u68c9\u7cfb\u5217'},swab:{icon:'\ud83e\udea5',name:'\u68c9\u7b7e',desc:'\u7eaf\u68c9\u53cc\u5934\u7cfb\u5217'},puff:{icon:'\ud83d\udca8',name:'\u7c89\u6251',desc:'\u4e1d\u7ed2/\u7845\u80f6\u7cfb\u5217'},blender:{icon:'\ud83e\udd5a',name:'\u7f8e\u5986\u86cb',desc:'\u4eb2\u6c34\u6027\u805a\u6c28\u916f'},eyebrow:{icon:'\u2702\ufe0f',name:'\u7709\u5200\u7709\u526a',desc:'\u4e0d\u9508\u94a2\u7cfb\u5217'},bottle:{icon:'\ud83d\udca7',name:'\u55b7\u96fe\u74f6',desc:'PET\u900f\u660e\u7cfb\u5217'},hair:{icon:'\ud83d\udc87',name:'\u5377\u53d1\u5de5\u5177',desc:'\u5218\u6d77\u5377\u53d1\u7b52'}};
    if(brands.length===0){c.innerHTML='<div class="empty-state" style="padding:4rem"><div class="icon">\ud83d\udc51</div><p>暂无品牌信息</p></div>';return;}
    const tpl=document.getElementById('brand-template');
    c.innerHTML='';
    brands.forEach(b=>{
      const clone=tpl.cloneNode(true);clone.style.display='';
      const hi=clone.querySelector('.brand-hero-image');
      if(b.image){hi.innerHTML='<img src="'+b.image+'" style="width:100%;height:100%;object-fit:cover" alt="'+esc(b.name)+'">';}
      clone.querySelector('.brand-name').textContent=b.name||'';
      clone.querySelector('.brand-slogan').textContent=b.slogan||'';
      clone.querySelector('.brand-desc').textContent=b.description||'';
      const featGrid=clone.querySelector('.brand-features');
      const features=b.features||[];const featDescs=b.featureDescs||[];
      const emojis=['\ud83d\udc8e','\ud83c\udfaf','\ud83e\udd1d','\ud83c\udf0d','\u2b50','\ud83d\udd2c','\ud83c\udfc6','\ud83d\udca1'];
      featGrid.innerHTML=features.map((f,i)=>'<div class="product-card reveal"><div class="product-card-body" style="text-align:center;padding:2rem;"><div style="font-size:2.5rem;margin-bottom:1rem;">'+(emojis[i]||'\u2728')+'</div><h3>'+esc(f)+'</h3><span class="accent-line" style="margin:0.8rem auto 1rem;"></span><p>'+esc(featDescs[i]||'')+'</p></div></div>').join('');
      const catGrid=clone.querySelector('.brand-categories');
      const cats=b.categories||[];
      catGrid.innerHTML=cats.map(cat=>{const m=catMap[cat]||{icon:'\ud83d\udce6',name:cat,desc:''};return'<a href="products.html?category='+cat+'" class="product-card reveal" style="text-decoration:none;color:inherit;"><div class="product-card-body" style="text-align:center;padding:1.5rem;"><div style="font-size:2rem;margin-bottom:.8rem;">'+m.icon+'</div><h4>'+m.name+'</h4><p style="font-size:.85rem;color:var(--text-secondary);">'+m.desc+'</p></div></a>';}).join('')+'<a href="contact.html" class="product-card reveal" style="text-decoration:none;color:inherit;"><div class="product-card-body" style="text-align:center;padding:1.5rem;border:1px dashed var(--border-gold);border-radius:8px;"><div style="font-size:2rem;margin-bottom:.8rem;">\ud83d\udce6</div><h4>OEM/ODM定制</h4><p style="font-size:.85rem;color:var(--text-secondary);">贴牌代工服务</p></div></a>';
      c.appendChild(clone);c.appendChild(document.createElement('hr'));
    });
    initScrollReveal();
  }catch(e){c.innerHTML='<div class="empty-state" style="padding:4rem"><div class="icon">\ud83d\udc51</div><p>品牌信息加载中，请稍后再试</p></div>';}
}

function esc(s){return(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

// ===== Theme System =====
async function loadTheme(){
  try{
    const r=await fetch('data/theme.json');
    if(!r.ok)return;
    const t=await r.json();
    const root=document.documentElement;
    if(t.primary) root.style.setProperty('--gold',t.primary);
    if(t.primaryLight) root.style.setProperty('--gold-light',t.primaryLight);
    if(t.bg) root.style.setProperty('--bg-deep',t.bg);
    if(t.bgCard) root.style.setProperty('--bg-card',t.bgCard);
    if(t.bgSurface) root.style.setProperty('--bg-surface',t.bgSurface);
    if(t.bgFooter) root.style.setProperty('--bg-footer',t.bgFooter);
    if(t.bannerBg) root.style.setProperty('--banner-bg',t.bannerBg);
    if(t.navbarBg){const{r,g,b}=hexToRgb(t.navbarBg);root.style.setProperty('--navbar-bg',`rgba(${r},${g},${b},0.92)`);}
    if(t.textPrimary) root.style.setProperty('--text-primary',t.textPrimary);
    if(t.textSecondary) root.style.setProperty('--text-secondary',t.textSecondary);
    // Logo
    if(t.logo){
      document.querySelectorAll('.brand-icon').forEach(el=>{
        el.style.backgroundImage='url('+t.logo+')';
        el.style.backgroundSize='cover';
        el.style.backgroundPosition='center';
        el.style.border='none';
        el.textContent='';
      });
    }
    // Derived colors
    if(t.primary&&t.bg){const dim=lerpColor(t.primary,t.bg,0.5);root.style.setProperty('--gold-dim',dim);}
    if(t.primary){const{r,g,b}=hexToRgb(t.primary);root.style.setProperty('--border-subtle',`rgba(${r},${g},${b},0.15)`);root.style.setProperty('--border-gold',`rgba(${r},${g},${b},0.35)`);}
  }catch(e){console.error(e);}
}
function hexToRgb(h){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:{r:201,g:169,b:110};}
function lerpColor(c1,c2,t){const a=hexToRgb(c1),b=hexToRgb(c2);const r=Math.round(a.r+(b.r-a.r)*t),g=Math.round(a.g+(b.g-a.g)*t),bl=Math.round(a.b+(b.b-a.b)*t);return '#'+[r,g,bl].map(v=>Math.max(0,Math.min(255,v)).toString(16).padStart(2,'0')).join('');}

async function loadCompanyGlobals(){
  try{
    const r=await fetch('data/company.json');
    if(!r.ok)return;
    const d=await r.json();
    const m={name:d.name||'',nameEn:d.nameEn||'',brand:d.brand||'',desc:d.description||'',descFull:d.descriptionFull||'',address:d.address||'',phone:d.phone||'',email:d.email||'',website:d.website||''};
    // Update text elements
    document.querySelectorAll('[data-c]').forEach(el=>{
      const k=el.dataset.c;
      if(k==='copyright'){el.textContent=(el.textContent||'').replace(/\d{4}/,new Date().getFullYear().toString());return;}
      if(m[k]!==undefined)el.textContent=m[k];
    });
    // Update href elements
    document.querySelectorAll('[data-c-href]').forEach(el=>{
      const k=el.dataset.cHref;
      if(m[k])el.href=m[k];
    });
    // Stats
    const statsEl=document.getElementById('company-stats');
    if(statsEl&&d.stats&&d.stats.length){
      statsEl.innerHTML=d.stats.map(s=>'<div class="stat-card"><span class="stat-number">'+esc(s.number)+'</span><span class="stat-label">'+esc(s.label)+'</span></div>').join('');
    }
    // Company info section (index page about section)
    const infoEl=document.getElementById('company-info');
    if(infoEl){
      infoEl.innerHTML='<h3>'+esc(d.name)+'</h3><span class="accent-line"></span><p>'+esc(d.description)+'</p><div class="stats-row" id="company-stats">'+(d.stats||[]).map(s=>'<div class="stat-card"><span class="stat-number">'+esc(s.number)+'</span><span class="stat-label">'+esc(s.label)+'</span></div>').join('')+'</div>';
    }
    // About page dynamic sections
    const aboutName=document.getElementById('about-name');
    if(aboutName)aboutName.textContent='关于'+(d.brand||d.name||'');
    const aboutDesc=document.getElementById('about-desc');
    if(aboutDesc)aboutDesc.textContent=d.description||'';
    const aboutBrand=document.getElementById('about-brand');
    if(aboutBrand)aboutBrand.textContent=d.brand||'';
  }catch(e){console.error(e);}
}

if (document.getElementById('products-grid')) loadProducts();
if (document.getElementById('news-grid')) loadNews();

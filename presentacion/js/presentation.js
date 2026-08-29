const slides = [...document.querySelectorAll('.slide')];
let current = 0;
const counter = document.getElementById('counter');
const progress = document.getElementById('progress');
const menu = document.getElementById('menu');

function show(n) {
  current = Math.max(0, Math.min(slides.length-1, n));
  slides.forEach((s,i) => s.classList.toggle('active', i===current));
  counter.textContent = String(current+1).padStart(2,'0') + ' / ' + String(slides.length).padStart(2,'0');
  progress.style.width = ((current+1)/slides.length*100) + '%';
  slides[current].focus({preventScroll:true});
  history.replaceState(null,'','#slide-' + String(current+1).padStart(2,'0'));
}
function next() { show(current+1); }
function prev() { show(current-1); }
document.getElementById('next').onclick = next;
document.getElementById('prev').onclick = prev;
document.getElementById('menuBtn').onclick = () => menu.classList.add('open');
document.getElementById('menuClose').onclick = () => menu.classList.remove('open');
document.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { show(Number(b.dataset.go)-1); menu.classList.remove('open'); });

document.addEventListener('keydown', e => {
  if (['ArrowRight','PageDown',' '].includes(e.key)) { e.preventDefault(); next(); }
  if (['ArrowLeft','PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
  if (e.key === 'Home') { e.preventDefault(); show(0); }
  if (e.key === 'End') { e.preventDefault(); show(slides.length-1); }
  if (e.key === 'Escape') menu.classList.toggle('open');
  if (e.key.toLowerCase() === 'f') {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }
});
document.addEventListener('click', e => {
  if (menu.classList.contains('open') && !menu.contains(e.target) && e.target.id !== 'menuBtn') menu.classList.remove('open');
});
window.addEventListener('hashchange', () => {
  const m = location.hash.match(/slide-(\d+)/);
  if (m) show(Number(m[1])-1);
});
const initial = location.hash.match(/slide-(\d+)/);
show(initial ? Number(initial[1])-1 : 0);

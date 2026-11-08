/* Six scroll stops inside one persistent scene: the list stays in view while images crossfade. */
(async () => {
  coreInit();
  Mosaic.init($('#mosaic'));
  Mosaic.world();
  Mosaic.state.reveal = 1;
  Mosaic.state.dark = 0;
  gsap.set('.veil', { autoAlpha: 1 });
  const buttons = $$('[data-need]');
  const pictures = $$('.needs-picture');
  const progress = $$('.needs-progress i');
  const names = ['needs', 'visible-improvement', 'multimodal', 'daily-routine', 'flexibility', 'oral-therapy'];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active = -1;
  function select(index) {
    if (index === active) return;
    const previous = active;
    active = index;
    buttons.forEach((button, i) => {
      button.classList.toggle('is-active', i === index);
      button.setAttribute('aria-pressed', String(i === index));
      progress[i].classList.toggle('is-active', i === index);
      pictures[i].setAttribute('aria-hidden', String(i !== index));
      pictures[i].classList.toggle('is-active', i === index);
    });
    gsap.killTweensOf(pictures);
    if (previous >= 0) gsap.to(pictures[previous], { autoAlpha: 0, duration: reduced ? 0 : .45 });
    gsap.fromTo(pictures[index], { autoAlpha: previous < 0 ? 1 : 0 }, { autoAlpha: 1, duration: reduced ? 0 : .55, overwrite: true });
    $('.needs-count').textContent = `${String(index + 1).padStart(2, '0')} / 06`;
    $('.needs-caption h3').textContent = buttons[index].querySelector('strong').textContent;
    $('.needs-caption p').textContent = index === 5 ? 'Scroll to Treatment Guidelines' : 'Scroll to explore the next need';
  }
  await document.fonts.ready;
  gsap.set('.needs-scene', { autoAlpha: 1 });
  const beat = { value: 0 };
  const timeline = gsap.timeline({ paused: true });
  timeline.addLabel('s0', 0);
  names.slice(1).forEach((_, i) => timeline.to(beat, { value: i + 1, duration: reduced ? .2 : .55 }).addLabel('s' + (i + 1)));
  document.addEventListener('stop', event => select(event.detail.i));
  buttons.forEach((button, i) => {
    button.addEventListener('click', () => Stops.go(i, true));
    button.addEventListener('keydown', event => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault(); event.stopPropagation(); Stops.go(i, true);
      }
    });
  });
  Stops.init(timeline, names);
  $$('.pager li button').forEach((button, i) => button.setAttribute('aria-label', 'Go to ' + buttons[i].querySelector('strong').textContent));
  Wipe.reveal();
  if (!reduced) gsap.from('.needs-scene .head, .needs-list, .needs-visual', { y: 14, opacity: 0, duration: .7, stagger: .08, delay: .2, clearProps: 'transform,opacity' });
})();

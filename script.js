var textWrapper = document.querySelector('.hello');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.hello .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    duration: 10000,
    delay: (el, i) => 600 + 30 * i
  }).add({
    targets: '.hello .letter',
    translateX: [0, -30],
    opacity: [1, 0],
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

// src code with minor tweaks to create a slower interval and loop time

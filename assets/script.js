const item1 = document.querySelector('.item_1');
const item2 = document.querySelector('.item_2');
const item3 = document.querySelector('.item_3');
const item4 = document.querySelector('.item_4');
const item5 = document.querySelector('.item_5');
const item6 = document.querySelector('.item_6');

let item1animation = anime({
  targets: item1,
  backgroundColor: '#182339',
  loop: true,
  duration: 1000,
  easing: 'easeInOutSine',
  direction: 'alternate'
});

let item2animation = anime({
  targets: item2,
  rotate: 45,
  scale: 2,
  loop: true,
  duration: 1000,
  easing: 'easeInOutSine',
  direction: 'alternate',
});

// черный прямоугольник
let item3animation = anime({
  targets: item3,
  rotate: [ -45, 45 ],
  loop: true,
  duration: 1000,
  easing: 'easeInOutSine',
  direction: 'alternate'
});

// шар
let item5animation = anime({
  targets: item5,
  translateX: '100%',
  easing: 'easeInOutQuad',
  loop: true,
  duration: 1000,
  easing: 'easeInOutSine',
  direction: 'alternate'
});

//желтый прямоугольник
let item4animation = anime({
  targets: item4,
  rotate: [ 45, 45 ],
  translateY: '-100%',
  translateX: '-20%',
  loop: true,
  duration: 1000,
  easing: 'easeInOutSine',
  direction: 'alternate'
});

//треугольник
let item6animation = anime({
  targets: item6,
  rotate: [ -130, 45 ],
  borderLeftWidth: [50, 0],
  borderRightWidth: [50, 0],
  borderBottomWidth: [150, 0],
  width: [0, 100],
  height: [0, 100],
  borderRadius: '50%',
  backgroundColor: '#24375B',
  loop: true,
  duration: 1000,
  easing: 'easeInOutSine',
  direction: 'alternate'
});

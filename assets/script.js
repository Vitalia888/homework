const item1 = document.querySelector('.item_1');
const item2 = document.querySelector('.item_2');
const item3 = document.querySelector('.item_3');
const item4 = document.querySelector('.item_4');
const item5 = document.querySelector('.item_5');
const item6 = document.querySelector('.item_6');

item1.onclick = function() {
  item1.style.backgroundColor = '#182339';
};

item2.onclick = function() {
  item2.style.transform = 'scale(2) rotate(45deg)';
};

// черный прямоугольник
let item3animation = anime({
  targets: item3,
  rotate: [ -45, 45 ],
  autoplay: false
});
item3.onclick = item3animation.play;

// шар
let item5animation = anime({
  targets: item5,
  translateX: '100%',
  autoplay: false,
  easing: 'easeInOutQuad'
});
item5.onclick = item5animation.play;

//желтый прямоугольник
let item4animation = anime({
  targets: item4,
  rotate: [ 45, 45 ],
  translateY: '-100%',
  translateX: '-20%',
  autoplay: false,
});
item4.onclick = item4animation.play;

//треугольник
item6.onclick = function() {
  item6.style.transform = 'scale(2) rotate(45deg)',
  item6.borderRadius = '50%';
};

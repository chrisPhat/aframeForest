function setup() {
  noCanvas();
  console.log('p5');

  const trees = createElement('a-entity').parent('scene').attribute('position', '0 0 0');
  for(let i = 0; i < 50; i++){
    const X = 10;
    // console.log(random(random(-15, -10),random(10, 15)));
    let lowX = Math.floor(random(-15, -14));
    let highX = Math.floor(random(14, 15));
    const x = random(lowX, highX);
    const z = random(random(-15, -14), random(14, 15));
    createElement('a-entity').parent(trees)
    .attribute('position', `${x} 2 ${z}`)
    .attribute('obj-model', 'obj: #treeObj; mtl: #treeMtl')
  }

  // const bubbles = createElement('a-entity').parent('scene').attribute('position', '0 5 0');
  // for (let i = 0; i < 50; i++) {
  //   const x = 15;
  //   const y = 4;
  //   createElement('a-sphere').parent(bubbles)
  //     .attribute('position', `${Math.random() * x - x / 2} ${Math.random() * y - y / 2} ${Math.random() * x - x / 2}`)
  //     .attribute('radius', Math.random() * 1 + .1)
  //     .attribute('color', '#dfbe99')
  //     .attribute('opacity', 0.5);
  // }

  // const houses = createElement('a-entity').parent('scene').attribute('position', '0 0 0');
  // for (let i = 0; i < 6; i++) {
  //   const X = 10;
  //   const x = Math.random() * X - X / 2;
  //   const z = Math.random() * X - X / 2;

  //   const house = createElement('a-entity').parent(houses)
  //     .attribute('position', `${x} 0 ${z}`);

  //   createElement('a-cone').parent(house)
  //     .attribute('position', '0 0 0')
  //     .attribute('radius-bottom', .85)
  //     .attribute('radius-top', .1)
  //     .attribute('height', 2)
  //     .attribute('color', '#db5375')
  //     .attribute('shadow');

  // }
}
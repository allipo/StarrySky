let stars = Array(200).fill(0);
function setup() {
  createCanvas(innerWidth, innerHeight);
  stars = stars.map((s) => new Star());
  // background(0, 0, 30);
}
function draw() {
  background(0, 0, 20);
  stars.forEach((s) => {
    s.create();
    s.move()
  });
}

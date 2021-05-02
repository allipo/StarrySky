let stars = Array(200).fill(0);
function setup() {
  createCanvas(innerWidth, innerHeight);
  stars = stars.map((s) => new Star());
}
function draw() {
  background(0, 0, 15);
  stars.forEach((s) => {
    s.create();
    s.move()
  });
}

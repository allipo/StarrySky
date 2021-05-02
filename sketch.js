let stars = Array(100).fill(0)
function setup() {
  createCanvas(500, 500);
  stars = stars.map(s=>new Star())
  // background(0, 0, 30);

}
function draw() {
  background(0, 0, 30);
  stars.forEach(s=>{
    s.create()
    // s.move()
  })
}
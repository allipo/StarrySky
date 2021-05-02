class Star{
  
    constructor(){
      this.x = random(width);
      this.y = random(height);
      this.scale = random(4)
      this.detail = this.scale + 5
      this.opacity = random(255)
      this.speed = random()
    }
    
    create(){
      stroke(250,this.opacity);
      strokeWeight(0.5);
      
      for (let i = 0; i<this.detail;i++){
            line(this.x, this.y, this.x + random(-this.scale,this.scale), this.y + random(-this.scale,this.scale))
      }
    }
    
    move(){
      
      this.x = this.x> width ? 0 : this.x
      this.y = this.y > height ? 0 : this.y
      
      this.x += this.speed
      this.y+=this.speed
      
  
        
    
    }
      
  }
   
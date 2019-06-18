class Food{
 constructor(){
    this.dim = 1;
    this.w = width/rez;
    this.h = height/rez
    this.food = createVector(floor(random(this.w)),floor(random(this.h)));   
   //this.food = createVector(20,10);
 }
  update(){
     this.food.x = floor(random(this.w));
     this.food.y = floor(random(this.h));
  }
  
  show(){
    rect(this.food.x, this.food.y, this.dim, this.dim);
  }
  
  getXpos(){
   return this.food.x; 
  }
  getYpos(){
   return this.food.y; 
  }
  
}
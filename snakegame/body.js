class Body{
  constructor(x, y, prevx, prevy){
    this.x = x;
    this.y = y;
    this.prevx = prevx;
    this.prevy = prevy;
  }
  
  
  setY(y){
    this.y = y; 
  }
  setX(x){
    this.x = x; 
  }
  setX(prevx){
    this.prevx = prevx; 
  }
  setX(prevy){
    this.prevy = prevy; 
  }
  
  
  getX(){
   return this.x; 
  }
  getY(){
   return this.y; 
  }
  getPrevx(){
   return this.prevx; 
  }
  getPrevy(){
   return this.prevy; 
  }
}
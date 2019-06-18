class Snake{
  constructor(){
    this.body = [];
    this.body[0] = new Body((width/rez)/2, (height/rez)/2,0,0);
    this.yspeed = 0;
    this.xspeed = 0;
  }
  update(){
    this.body[0].prevy = this.body[0].y;
    this.body[0].prevx = this.body[0].x;
    this.body[0].y = this.body[0].getY()+this.yspeed;
    this.body[0].x = this.body[0].getX()+this.xspeed;
    for(let i = 1; i < this.body.length; i++){
      this.body[i].prevy = this.body[i].y;
      this.body[i].prevx = this.body[i].x;
      this.body[i].y = this.body[i-1].prevy;
      this.body[i].x = this.body[i-1].prevx;
    }
  
    
    
    
  }
  show(){
    //rect(this.body[0].x, this.body[0].y, 1, 1);
    for(let i = 0; i < this.body.length; i++){
      noStroke();
      fill(0);
      rect(this.body[i].getX(), this.body[i].getY(), 1, 1);
    }
  }
  
  setDir(x ,y){
    if(this.body.length > 1){
      if(this.xspeed != (x*-1)){this.xspeed = x;}
      if(this.yspeed != (y*-1)){this.yspeed = y;}
    }else{
      this.xspeed = x;
      this.yspeed = y;
    }
  }
  
  grow(){
   this.body.push(new Body(this.body[0].prevx, this.body[0].prevy, 0, 0)); 
  }
  
  dieCheck(){
    for(let i = 1; i < this.body.length; i++){
      if(this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y){
         return true; 
      }
    }
      if(this.body[0].x < 0 || this.body[0].y < 0){
        return true; 
      }
      if(this.body[0].x > (width/rez)-1 || this.body[0].y > (height/rez)-1){
        
        return true; 
      }
      return false;
        
    
  }
  
  getXpos(){
   return this.body[0].getX(); 
  }
  getYpos(){
   return this.body[0].getY(); 
  }
  
}
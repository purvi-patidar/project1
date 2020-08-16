class Form{
    constructor(){
        this.input = createInput("");
        this.button = createButton('START');
        this.title = createElement('h1'); 
        this.title1 = createElement('h4');
        this.title2 = createElement('h5');
        this.ballon = createButton('BALLON');
        
    }

    hide(){
        
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.title1.hide();
        this.title2.hide();
        

             }

      display(){
    
        this.title.html("Typing Speed Test Game");
        this.title1.html("Hello!!! Welcome to Typing Speed Test Game");
        this.title2.html("Enter your name here:")

        this.title.position(displayWidth/2 - 50, 0);
        this.title1.position(displayWidth/2 - 10, 150);
        this.title2.position(displayWidth/2 + 50, 240);

        this.input.position(displayWidth/2 + 40 , displayHeight/2 - 150);
        this.button.position(displayWidth/2 + 85, displayHeight/2.5);
        
        // this.button.BackColor=Color.red;
        // this.button.Width=100;
    
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.title1.hide();
        this.title2.hide();
        this.ballon.hide();
        this.ballon.position(displayWidth/2 + 85, displayHeight/2.5);
        player.name = this.input.value();
       // form1.display();
        //gameState = 1;
       // window.location.replace("form1.js")
       //myFunction();
        });
    
      }
      //  myFunction() { 
      //  location.replace("form1.js") }
}
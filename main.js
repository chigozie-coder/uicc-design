let isOpen=false;

function onav(){ 
/*is sidebar is not open ,then open it*/
if(!isOpen)
  {
        if (navigator.vibrate) {
          navigator.vibrate(50)
        }
        document.getElementById('snav').
        style.transform="translateX(0px)";      
        isOpen=true;
  }
else
  {
    if (navigator.vibrate) {
          navigator.vibrate(50)
    }
   document.getElementById('snav').
   style.transform="translateX(-100vw)";
   isOpen =false;
  }
}
//useless code
/*
class Card {
  constructor(arg) {
    this.card=document.createElement("card")
    this.el=arg.el
    this.img=arg.img
    this.name=arg.name
    this.abt=arg.about
  
    this.el=document.querySelector(this.el)
    this.img=`<img src="${this.img}" class="rounded" height="100px" width="100px"/>`
    this.abt=`<div class="abt">${this.abt} </div>`
    this.name=`<div class="name">${this.name}</div>`
    this.card.appendChild(this.img)
    this.card.appendChild(this.name)
    this.card.appendChild(this.abt)
    this.el.appendChild(this.card)
    document.body.appendChild(this.el)
  }
}
var t= new Card({
  el:"#cv",
  img:"/download.jpg"
})
*/

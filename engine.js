var canvas=document.querySelector('canvas')

canvas.width=window.innerWidth
canvas.height=window.innerHeight



var c=canvas.getContext('2d')


var mouse={
	x:undefined,
	y:undefined,
}

document.addEventListener('mousemove',function(e){

	mouse.x=e.clientX
	mouse.y=e.clientY

   
	// body...
})



function line(x,y,tox,toy){


	this.x=x
	this.y=y
	this.tox=tox
	this.toy=toy

	c.beginPath();
	c.strokeStyle="grey"
    c.moveTo(this.x, this.y);
    c.lineTo(this.tox, this.toy);
    c.fill()

    c.stroke();


}


function clear(){
        c.clearRect(0,0,innerWidth,innerHeight);
    }


var len=180
var origin= {
	x:canvas.width/2,
	y:0,
}
var bob= {
	x:canvas.width/2,
	y:len,
}

 var angle=Math.PI/4;
 var aVel=0.0;
 var aAcc=0.0;

function animate(){
	requestAnimationFrame(animate);
    clear()
      
         bob.x=origin.x +len*Math.sin(angle)
         bob.y=origin.y +len*Math.cos(angle)
        c.beginPath();

        c.fillStyle = "grey";
        c.arc(bob.x,bob.y,25,0,2*Math.PI);
        c.fill()
        c.stroke();
        line(origin.x,origin.y,bob.x,bob.y)
      
       aAcc =-0.01 *Math.sin(angle);
       angle+=aVel
       aVel+=aAcc
       aVel*=0.99

      


}




animate();
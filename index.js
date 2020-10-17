
var p=document.querySelectorAll(".drum").length;
for(var i=0; i<p; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        var key1=this.innerHTML;
        sound(key1);
        
    });
    
}
document.addEventListener("keypress",function(event){
    sound(event.key);
});

function sound(key){
    switch (key) {
        case "w":
            var sound1 = new Audio("sounds/tom-1.mp3");
            sound1.play();
            break;
        case "a":
            var sound1 = new Audio("sounds/tom-2.mp3");
            sound1.play();
            break;
        case "s":
            var sound1 = new Audio("sounds/tom-3.mp3");
            sound1.play();
            break;
        case "d":
            var sound1 = new Audio("sounds/tom-4.mp3");
            sound1.play();
            break;
        case "j":
            var sound1 = new Audio("sounds/snare.mp3");
            sound1.play();
            break;
        case "k":
                var sound1 = new Audio("sounds/crash.mp3");
                sound1.play();
                break;    
        case "l":
                    var sound1 = new Audio("sounds/kick-bass.mp3");
                    sound1.play();
                    break;        
        default:
            break;
    }
}
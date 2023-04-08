var NumberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<NumberofDrumButtons; i++)


document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
});
        
    {}
    document.addEventListener('keypress',function(event){
        makeSound(event.key)
    });
    
    function makeSound (key){
        switch (key) {
            case "w":
                var Siren = new Audio('/Users/whris/Documents/Drum\ Kit\ Files/808siren.wav');
                Siren.play();
                break;
    
                case "a":
                    var Kick = new Audio("/Users/whris/Documents/Drum\ Kit\ Files/SouthsideKick.wav");
                    Kick.play();
                    break;
                    
                    case 's':
                        var Snare = new Audio ("/Users/whris/Documents/Drum\ Kit\ Files/MetroSnare.wav");
                        Snare.play();
                        break;
    
                        case 'd':
                    var Clap = new Audio("/Users/whris/Documents/Drum\ Kit\ Files/MetroClap.wav");
                    Clap.play();
                    break;
    
                    case 'j':
                    var HiHat = new Audio("/Users/whris/Documents/Drum\ Kit\ Files/MetroHiHat.wav");
                    HiHat.play();
                    break;
    
                    case 'k':
                    var Southside808 = new Audio("/Users/whris/Documents/Drum\ Kit\ Files/Southside808.wav");
                    Southside808.play();
                    break; 
    
                    case 'l':
                    var Cymbol = new Audio("/Users/whris/Documents/Drum\ Kit\ Files/CartelCymbol.wav");
                    Cymbol.play();
                    break;
    }}
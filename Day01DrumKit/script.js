(function(){
    "use strict";
     function soundPlay(e) {
            const audio=document.querySelector(`audio[data-key="${e.keyCode}"`);
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if (!audio) return; //if no audio is present
            audio.currentTime = 0; //Rewind to the start
            audio.play();
            key.classList.add("playing");
         }

         function removeTransition(e) {
                //console.log(e);
                if (e.propertyName !== "transform") return;
                this.classList.remove("playing");
         }
         const keys = document.querySelectorAll('.key');
         keys.forEach(key => { key.addEventListener('transitionend', removeTransition) });
         window.addEventListener('keydown', soundPlay);
}());
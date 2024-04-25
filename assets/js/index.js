//efecto de tipeo 

function textoTipeo(elementId, text, speed) {
    let index = 0;
    const element = document.getElementById(elementId);
  
    function type() {
      element.textContent += text[index];
      index++;
      if (index < text.length) {
        setTimeout(type, speed);
      } else {
        setTimeout(function() {
            index = 0;
            element.textContent = "";
            type();
        }, 2000); 
      }
    }
  
    type();

}

document.addEventListener("DOMContentLoaded", function(){
    textoTipeo("textoTipeo", "Web Developer ", 200)
});
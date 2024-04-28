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

//Form

function submitForm() {
  const email = document.getElementById('exampleInputEmail1').value;
  const password = document.getElementById('exampleInputPassword1').value;
  
  if (email.trim() === '' || password.trim() === '') {
    alert('Please, fill all the fields');
    return;
  }
  document.getElementById('successAlert').style.display = 'block';
}
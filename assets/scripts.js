const inptEmail = document.getElementById('email-id');
const btnSubmit = document.getElementById('btn-submit');
const errMessage = document.querySelector('.err-message');
const mainForm = document.querySelector('.sbmt-form');
const modalSuccess = document.getElementById('modal-success');
const insertEmail = document.getElementById('insert-email');
const btnSuccess = document.getElementById('btn-success');


function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function toggleClasse (elem, class0, class1) {
    elem.classList.remove(class0);
    elem.classList.add(class1);
    return true;
}

    function activeBtnClose(){
        toggleClasse(btnSuccess, 'btn-usal', 'active-button');
        modalSuccess.addEventListener('click', function(){
            modalSuccess.style.display = 'none';
        });
    }

window.onload = function() {    
    inptEmail.addEventListener('input', function(e){
        let content_input = inptEmail.value;
        if(content_input.length > 2 && content_input.includes('@')) {
            btnSubmit.disabled = false;
            toggleClasse(btnSubmit, 'btn-usal', 'active-button');
        } else {
            if(btnSubmit.disabled === false) {
                btnSubmit.disabled = true;
            }
            if(btnSubmit.classList.contains('active-button')) {
                toggleClasse(btnSubmit, 'active-button', 'btn-usal');
            }
        }
        if(inptEmail.classList.contains('err-inpt')) {
            toggleClasse(inptEmail, 'err-inpt', 'norm-inpt');
        }
    });
    btnSubmit.addEventListener('click', function(e) {
        e.preventDefault(e);
        let email = inptEmail.value;
        if(validateEmail(email)) {
            modalSuccess.style.display = "block";
            insertEmail.innerHTML = email;
            mainForm.reset();
            btnSubmit.disabled = true;
            setInterval(activeBtnClose, 2000);
        } else {            
            btnSubmit.disabled = true;
            /* TO DO
            Ajax verification via the mail reality backend
            */
            toggleClasse(btnSubmit, 'active-button', 'btn-usal');
            toggleClasse(inptEmail, 'norm-inpt', 'err-inpt');
            errMessage.style.display = 'block';
        }
    });
}
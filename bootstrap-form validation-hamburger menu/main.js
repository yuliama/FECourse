function toggleBar(x) {
    x.classList.toggle("change");


    var nav = document.getElementsByTagName("nav")[0];
    if (nav.className === "") {
        nav.className += " responsive";
    } else {
        nav.className = "";
    }
  }

  $(document).ready(function(){
    $('.SignUp').click(function(){
        $("#myModal").modal();
      });
});

function submitForm(){
    document.getElementsByClassName("contactUsForm")[0].className += " submitted";

    if(document.getElementById('email').validity.typeMismatch) {
        document.querySelector('#email + .error').style.opacity = 1;
        document.querySelector('#email + .error').textContent = 'Error Email!';
    }
    else if(document.getElementById('email').validity.valueMissing){
        document.querySelector('#email + .error').style.opacity = 1;
        document.querySelector('#email + .error').textContent = 'The field is required!';
    }
    else{
        document.querySelector('#email + .error').style.opacity = 0;
    }
    var isValidForm = true;
    $("input").each(function(){
        if(!this.validity.valid)
        {
            isValidForm = false;
        }
    });
    if(isValidForm){
        //send to server
        $("#myModal").modal("hide");
    }
    
}

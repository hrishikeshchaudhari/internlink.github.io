// checkboxtck
var ele=document.getElementsByClassName('signup');
var v=document.getElementsByClassName("check");
    function check_click(e)
    {
            for(let i=0;i< v.length;i++)
            {
               
                    v.item(i).checked=false;
            }
            e.target.checked=true;
    }
    for(let i=0;i<v.length;i++)
    {
            v[i].addEventListener('click',check_click);
    }
        // window.addEventListener('DOMContentLoaded', function() 
        // {
        //     var checkboxes = document.getElementsByClassName("check");
            
        //     function checkClick(e) 
        //     {
        //         for (let i = 0; i < checkboxes.length; i++) {
        //             checkboxes[i].checked = false;
        //         }
        //         e.target.checked = true;
        //     }

        //     for (let i = 0; i < checkboxes.length; i++) 
        //     {
        //         checkboxes[i].addEventListener('click', checkClick);
        //     }
        // });
// showpassword
var star=document.getElementById("inpt");
var pass=document.getElementById("show_password");
function addstar()
{
    if(pass.checked)
    {
        star.type="text";
    }
    else if(!pass.checked)
    {
        star.type="password";
    }    
}
pass.addEventListener('click',addstar);


// var signup_popup=document.getElementById("signup");
// var pop_sec=document.getElementById("create_account");
// var log=document.getElementsByClassName("login");
// function open_pop()
// {
//     log[0].style.display="none";
//     pop_sec.style.display="block";
// }
// signup_popup.addEventListener('click',open_pop);

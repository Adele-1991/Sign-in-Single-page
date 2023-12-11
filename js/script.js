var flag = false;
const change_form = (b) => {
    if (b && flag) {

        document.getElementById("login").style.transform = "translateY(0px)";
        flag=false;
        var elements = document.querySelectorAll(".register input[type='text'],input[type='password']");
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.background = "aqua";
            element.style.transition = "all 3s";

        }
    } else if (!flag && !b) {
        document.getElementById("login").style.transform = "translateY(-430px)";
        flag=true;
        var input = document.querySelectorAll(".login input[type='password']");
        for (let i = 0; i < input.length; i++) {
            const element = input[i];
            element.style.background = "white";
            element.style.transition = "all 0s";
        }
    }
}  

function checkPassword(){

    let password = document.getElementById("password").value;

    let score = 0;
    let suggestion = "";

    if(password.length >= 8)
        score++;
    else
        suggestion += "Use at least 8 characters.<br>";

    if(/[A-Z]/.test(password))
        score++;
    else
        suggestion += "Add an uppercase letter.<br>";

    if(/[a-z]/.test(password))
        score++;
    else
        suggestion += "Add a lowercase letter.<br>";

    if(/[0-9]/.test(password))
        score++;
    else
        suggestion += "Add a number.<br>";

    if(/[!@#$%^&*]/.test(password))
        score++;
    else
        suggestion += "Add a special character.<br>";

    let result="";

    if(score<=2)
        result="Weak";
    else if(score==3 || score==4)
        result="Medium";
    else
        result="Strong";

    document.getElementById("result").innerHTML="Strength: "+result;
    document.getElementById("suggestion").innerHTML=suggestion;
}

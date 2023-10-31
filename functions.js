



function passwordMatch(){
    if(document.querySelector("#confirmPassword").value != document.querySelector("#password").value) {
        document.querySelector(".notMatch").style.display = "block";
        document.querySelector(".notMatch").style.color = "red";
        document.querySelector(".notMatch").style.opacity = 1;
        console.log("1");
    }
    else if(document.querySelector("#confirmPassword").value == document.querySelector("#password").value){
       // document.querySelector(".notMatch").style.opacity = 0;
        document.querySelector(".notMatch").style.display = "none"
        console.log("2");
    }
}


//document.querySelector("#confirmPassword").addEventListener("active", passwordMatch);
document.querySelector('#confirmPassword').addEventListener('input', passwordMatch);
document.querySelector('#password').addEventListener('input', passwordMatch);




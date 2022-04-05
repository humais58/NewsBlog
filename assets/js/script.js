function clear_error(){
    document.getElementById("error").innerHTML = "";
}
function validate(){
    clear_error();
    var email = document.getElementById("email").value;
    if(email==""){
        var err = "*Please enter your email";
        document.getElementById("error").innerHTML = err;
    }
    else{
        alert(email+" subscribed");
    }
}

function category(){
    var select_value = document.getElementById("select").value;
    var div1 = document.getElementById("category_1");
    var div2 = document.getElementById("category_2");
    var div3 = document.getElementById("category_3");
    if(select_value == ""){
        document.getElementById("heading").innerHTML = "ALL NEWS";
        div1.style.display = "flex";
        div2.style.display = "flex";
        div3.style.display = "flex";
    }
    else if(select_value == "category1"){
        document.getElementById("heading").innerHTML = "Category 1";
        div1.style.display = "flex";
        div2.style.display = "none";
        div3.style.display = "none";
    }
    else if(select_value == "category2"){
        document.getElementById("heading").innerHTML = "Category 2";
        div2.style.display = "flex";
        div1.style.display = "none";
        div3.style.display = "none";
    }
    else if(select_value == "category3"){
        document.getElementById("heading").innerHTML = "Category 3";
        div3.style.display = "flex";
        div1.style.display = "none";
        div2.style.display = "none";
    }
}




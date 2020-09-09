function login() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    var requestData={
        "userName": username,
        "password": password
    };

    if (postModel(url+"/user/login",requestData).data===null){
        alert("Kullanıcı Adı Veya Şifre Hatalı");
    }
    else{
        location.href=""+urlAdminFrontend+"/index.html";
    }
}

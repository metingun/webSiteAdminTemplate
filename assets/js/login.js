function login() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    var requestData={
        "userName": username,
        "password": password
    };
    var post=postModel(url+"/user/login",requestData).data;
    if (post===null){
        alert("Kullanıcı Adı Veya Şifre Hatalı");
    }
    else{
        document.cookie = "username="+post.userName+"; path=/; max-age="+60*60*60*2+";";
        document.cookie = "password="+post.password+"; path=/; max-age="+60*60*60*2+";";

        location.href=""+urlAdminFrontend+"/index.html";

        document.cookie = "token="+post.session+"; path=/; max-age="+60*60*60*2+";";
    }
}

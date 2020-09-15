function htmlTemplate(responseData) {
    return '<tr id="referanceRow' + responseData.id + '" data-value="' + responseData.id + '">' +
        '<th scope="row">' +
        '<div class="media align-items-center">' +
        '<div class="media-body">' +
        '<span class="name mb-0 text-sm">'+responseData.id+'</span>' +
        '</div></div>' +
        '</th>' +
        '<td class="budget">'+responseData.pic1.substring(0, 25)+'</td>' +
        '<td class="constantProp">'+responseData.companyName.substring(0, 25)+'</td>' +
        '<td>'+responseData.comment.substring(0, 20)+'</td>' +
        '<td><button class="btn btn-info btn-lg" onclick="deleteReferance(' + responseData.id + ')">' +
        '<i class="far fa-trash-alt"></i></button></td>' +
        '</tr>';
}
function referancePageAdmin() {
    const response = getModel(url+"/referance/getAllData");
    for (let i=0; i<response.data.length; i++){
        document.getElementById("referanceList").innerHTML+=htmlTemplate(response.data[i]);
    }

}
function deleteReferance(id) {
    document.getElementById("referanceRow"+id).remove();
    getModel(url+"/referance/deleteData/"+id);
}

function createReferance() {
    var pic1=document.getElementById("inputPic1").value;
    var companyName=document.getElementById("inputCompanyName").value;
    var comment=document.getElementById("inputComment").value;

    var requestData={
        "pic1": pic1,
        "companyName": companyName,
        "comment": comment
    };

    var post=postModel(url+"/referance/saveData",requestData);
    if (post.code===200){
        document.getElementById("referanceList").innerHTML+=htmlTemplate(post.data);

        document.getElementById("inputPic1").value="";
        document.getElementById("inputCompanyName").value="";
        document.getElementById("inputComment").value="";
        alert("Referans başarıyla eklendi...");
    }
    else{
        alert("Aynı isimde referans mevcut !!! Lütfen eklediğiniz referansı sayfayı yenileyip siliniz...")
    }
}

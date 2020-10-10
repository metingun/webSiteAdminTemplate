function htmlTemplate(responseData) {
    return '<tr id="certificateRow' + responseData.id + '" data-value="' + responseData.id + '">' +
        '<th scope="row">' +
        '<div class="media align-items-center">' +
        '<div class="media-body">' +
        '<span class="name mb-0 text-sm">'+responseData.id+'</span>' +
        '</div></div>' +
        '</th>' +
        '<td class="budget">'+responseData.pic1.substring(0, 25)+'</td>' +
        '<td class="constantProp">'+responseData.certificateName.substring(0, 25)+'</td>' +
        '<td>'+responseData.comment.substring(0, 20)+'</td>' +
        '<td>'+responseData.language+'</td>' +
        '<td><button class="btn btn-info btn-lg" onclick="deleteCertificate(' + responseData.id + ')">' +
        '<i class="far fa-trash-alt"></i></button></td>' +
        '</tr>';
}
function certificatesPageAdmin() {
    const response = getModel(url+"/certificates/getAllData");
    for (let i=0; i<response.data.length; i++){
        document.getElementById("certificateList").innerHTML+=htmlTemplate(response.data[i]);
    }

}
function deleteCertificate(id) {
    document.getElementById("certificateRow"+id).remove();
    getModel(url+"/certificates/deleteData/"+id);
}

function createCertificate() {
    var pic1=document.getElementById("inputPic1").value;
    var certificateName=document.getElementById("inputCertificateName").value;
    var comment=document.getElementById("inputComment").value;
    var inputLang=document.getElementById("inputLang").value;

    var requestData={
        "pic1": pic1,
        "certificateName": certificateName,
        "comment": comment,
        "language": inputLang,
    };

    var post=postModel(url+"/certificates/saveData",requestData);
        document.getElementById("certificateList").innerHTML+=htmlTemplate(post.data);

        document.getElementById("inputPic1").value="";
        document.getElementById("inputCertificateName").value="";
        document.getElementById("inputComment").value="";
        alert("Sertifika başarıyla eklendi...");
}

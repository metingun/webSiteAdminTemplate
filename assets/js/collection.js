function htmlTemplate(responseData) {
    return '<tr id="collectionRow' + responseData.id + '" data-value="' + responseData.id + '">' +
        '<th scope="row">' +
        '<div class="media align-items-center">' +
        '<div class="media-body">' +
        '<span class="name mb-0 text-sm">' + responseData.pic1.substring(0, 12) + '</span>' +
        '</div></div>' +
        '</th>' +
        '<td class="budget">' + responseData.pic2.substring(0, 12) + '</td>' +
        '<td class="constantProp">' + responseData.productName.substring(0, 12) + '</td>' +
        '<td>' + responseData.comment.substring(0, 10) + '</td>' +
        '<td>' + responseData.productProperties.substring(0, 15) + '</td>' +
        '<td>' + responseData.sex + '</td>' +
        '<td>' + responseData.language + '</td>' +
        '<td><button class="btn btn-info btn-lg" onclick="deleteCollection(' + responseData.id + ')">' +
        '<i class="far fa-trash-alt"></i></button></td>' +
        '</tr>';
}

function collectionPageAdmin() {
    const response = getModel(url+"/collection/getAllData");
    for (let i=0; i<response.data.length; i++){
        document.getElementById("collectionList").innerHTML+=htmlTemplate(response.data[i]);
    }

}

function deleteCollection(id) {
    document.getElementById("collectionRow"+id).remove();
    getModel(url+"/collection/deleteData/"+id);
}

function createCollection() {
    var pic1=document.getElementById("inputPic1").value;
    var pic2=document.getElementById("inputPic2").value;
    var productName=document.getElementById("inputProductName").value;
    var comment=document.getElementById("inputComment").value;
    var productProperties=document.getElementById("inputProductProperties").value;
    var inputSex=document.getElementById("inputSex").value;
    var inputLang=document.getElementById("inputLang").value;

    var requestData={
        "pic1": pic1,
        "productName": productName,
        "comment": comment,
        "productProperties": productProperties,
        "pic2": pic2,
        "sex": inputSex,
        "language": inputLang
    };

    var post=postModel(url+"/collection/saveData",requestData);
    if (post.code===200){
        document.getElementById("collectionList").innerHTML+=htmlTemplate(post.data);

        document.getElementById("inputPic1").value="";
        document.getElementById("inputPic2").value="";
        document.getElementById("inputProductName").value="";
        document.getElementById("inputComment").value="";
        document.getElementById("inputProductProperties").value="";
        alert("Ürün başarıyla eklendi...");
    }
    else{
        alert("Aynı isimde ürün mevcut !!! Lütfen eklediğiniz ürünü sayfayı yenileyip siliniz...");
    }

}

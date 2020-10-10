function htmlTemplate(responseData) {
    return '<tr id="productRow' + responseData.id + '" data-value="' + responseData.id + '">' +
        '<th scope="row">' +
        '<div class="media align-items-center">' +
        '<div class="media-body">' +
        '<span class="name mb-0 text-sm">'+responseData.id+'</span>' +
        '</div></div>' +
        '</th>' +
        '<td class="budget">'+responseData.pic1.substring(0, 25)+'</td>' +
        '<td class="constantProp">'+responseData.productTitle.substring(0, 25)+'</td>' +
        '<td>'+responseData.comment.substring(0, 20)+'</td>' +
        '<td>'+responseData.language+'</td>' +
        '<td><button class="btn btn-info btn-lg" onclick="deleteProduct(' + responseData.id + ')">' +
        '<i class="far fa-trash-alt"></i></button></td>' +
        '</tr>';
}
function productPageAdmin() {
    const response = getModel(url+"/product/getAllData");
    for (let i=0; i<response.data.length; i++){
        document.getElementById("productList").innerHTML+=htmlTemplate(response.data[i]);
    }

}
function deleteProduct(id) {
    document.getElementById("productRow"+id).remove();
    getModel(url+"/product/deleteData/"+id);
}

function createProduct() {
    var pic1=document.getElementById("inputPic1").value;
    var productTitle=document.getElementById("inputProductTitle").value;
    var comment=document.getElementById("inputComment").value;
    var inputLang=document.getElementById("inputLang").value;

    var requestData={
        "pic1": pic1,
        "productTitle": productTitle,
        "comment": comment,
        "language": inputLang
    };

    var post=postModel(url+"/product/saveData",requestData);
        document.getElementById("productList").innerHTML+=htmlTemplate(post.data);

        document.getElementById("inputPic1").value="";
        document.getElementById("inputProductTitle").value="";
        document.getElementById("inputComment").value="";
        alert("Üretim Fotoğrafı başarıyla eklendi...");
}

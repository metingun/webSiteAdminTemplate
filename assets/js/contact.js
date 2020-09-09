function contactPageAdmin() {
    var response=getModel(url+"/contact/getAllData");

    setValueById("address",response.data.address.substring(0, 40));
    setValueById("mail",response.data.mail.substring(0, 40));
    setValueById("phoneNumber",response.data.phoneNumber.substring(0, 40));
    setValueById("fax",response.data.fax.substring(0, 40));
    setValueById("instagram",response.data.instagram.substring(0, 40));
    setValueById("facebook",response.data.facebook.substring(0, 40));

}

function updateContactPage() {
    var response=getModel(url+"/contact/getAllData");

    var inputAddress=(getValueById("inputAddress")==="")?response.data.address:getValueById("inputAddress");
    var inputMail=(getValueById("inputMail")==="")?response.data.mail:getValueById("inputMail");
    var inputPhoneNumber=(getValueById("inputPhoneNumber")==="")?response.data.phoneNumber:getValueById("inputPhoneNumber");
    var inputFax=(getValueById("inputFax")==="")?response.data.fax:getValueById("inputFax");
    var inputInstagram=(getValueById("inputInstagram")==="")?response.data.instagram:getValueById("inputInstagram");
    var inputFacebook=(getValueById("inputFacebook")==="")?response.data.facebook:getValueById("inputFacebook");

    var requestData={
        "address": inputAddress,
        "mail": inputMail,
        "phoneNumber": inputPhoneNumber,
        "fax": inputFax,
        "instagram": inputInstagram ,
        "facebook": inputFacebook
    };

    postModel(url+"/contact/updateData",requestData);
}

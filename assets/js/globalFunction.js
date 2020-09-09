/*
pageNumber
1 -- Home Page
2 -- Collection
3 -- Referance
4 -- About Us
5 -- Certificate
6 -- Production
7 -- Contact
*/

function findAttributeValueById(id,attributeName) {
    return document.getElementById(id).getAttribute(attributeName);
}
function getModel(url) {
    var responseModel = "";
    $.ajax({
        url:url,
        type: 'GET',
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        async: false,
        success: function (response) {
            responseModel = response;
        }
    });
    return responseModel;
}

function postModel(url, requestData) {
    var responseModel = "";
    $.ajax({
        url:url,
        type: 'POST',
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        async: false,
        data: JSON.stringify(requestData),
        success: function (response) {
            responseModel = response;
        }
    });
    return responseModel;
}

function setAttributeForBackgroundImg(id,attributeName,attribute) {
    return document.getElementById(id).setAttribute(attributeName,"background-image: url("+attribute+");")
}

function setValueById(id,value) {
    document.getElementById(id).innerHTML=value;
}

function setAttributeById(id,attributeName,attribute) {
    return document.getElementById(id).setAttribute(attributeName,attribute)
}

function getValueById(id) {
    return document.getElementById(id).value;
}

function getSession() {
    return getModel(url+"/user/getSession").data;
}

function sessionActivity(session) {
    var requestData={
        "session": session
    };
    postModel(url+"/user/sessionChange",requestData)
}

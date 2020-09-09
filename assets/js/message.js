function htmlTemplate(responseData) {
    return '<tr id="messageCol'+responseData.id+'">' +
        '<td>'+responseData.messageDate+'</td>' +
        '<td>'+responseData.username.substring(0, 20)+'</td>' +
        '<td>'+responseData.phoneNumber+'</td>' +
        '<td>'+responseData.mail+'</td>' +
        '<td>'+responseData.message.substring(0, 17)+'</td>' +
        '<td>' +
        '<button onclick="readMessage('+responseData.id+');" ' +
        'type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">' +
        '<i id="msgDetail'+responseData.id+'" class="far fa-envelope" style="font-size: large;"></i>'+
        '</button></td>' +
        '</tr>';
}
function messagePageAdmin() {
    const response = getModel(url+"/message/getMessages");
    messageStatistics();
    for (let i=response.data.length-1; i>-1; i--){
        document.getElementById("messageList").innerHTML+=htmlTemplate(response.data[i]);
        if (response.data[i].messageStatus===0){
            setAttributeById("messageCol"+response.data[i].id,"style","font-weight:bold;");
        }
        else {
            setAttributeById("msgDetail"+response.data[i].id,"class","far fa-envelope-open");
        }
    }
}

function readMessage(id) {
    setAttributeById("msgDetail"+id,"class","far fa-envelope-open");
    setAttributeById("messageCol"+id,"style","");

    getModel(url+"/message/changeStatus/"+id);
    var responseData=getModel(url+"/message/getOne/"+id).data;
    setValueById("modalTitle",responseData.messageDate);

    setValueById("username",responseData.username);
    setValueById("phoneNumber",responseData.phoneNumber);
    setValueById("mail",responseData.mail);
    setValueById("message",responseData.message);

    messageStatistics();
}

function messageStatistics() {
    const responseTotal = getModel(url+"/message/getByStatus/-1");
    const responseRead = getModel(url+"/message/getByStatus/1");
    const responseUnread = getModel(url+"/message/getByStatus/0");

    setValueById("totalNumber",responseTotal.data);
    setValueById("unreadNumber",responseUnread.data);
    setValueById("readNumber",responseRead.data);

}

function aboutUsPageAdmin() {
    var response=getModel(url +"/aboutUs/getAllData");

    setValueById("missionPic",response.data.missionPic.substring(0, 40));
    setValueById("missionComment",response.data.missionComment.substring(0, 40));
    setValueById("missionSpeakerName",response.data.missionSpeakerName);
    setValueById("missionSpeak",response.data.missionSpeak.substring(0, 40));
    setValueById("missionCommentEn",response.data.missionCommentEn.substring(0, 40));
    setValueById("missionSpeakerNameEn",response.data.missionSpeakerNameEn);
    setValueById("missionSpeakEn",response.data.missionSpeakEn.substring(0, 40));

    setValueById("visionPic",response.data.visionPic.substring(0, 40));
    setValueById("visionComment",response.data.visionComment.substring(0, 40));
    setValueById("visionSpeakerName",response.data.visionSpeakerName);
    setValueById("visionSpeak",response.data.visionSpeak.substring(0, 40));
    setValueById("visionCommentEn",response.data.visionCommentEn.substring(0, 40));
    setValueById("visionSpeakerNameEn",response.data.visionSpeakerNameEn);
    setValueById("visionSpeakEn",response.data.visionSpeakEn.substring(0, 40));

}

function updateAboutUsPage() {
    var response=getModel(url +"/aboutUs/getAllData");

    var inputMissionPic=(getValueById("inputMissionPic")==="")?response.data.missionPic:getValueById("inputMissionPic");
    var inputVisionPic=(getValueById("inputVisionPic")==="")?response.data.visionPic:getValueById("inputVisionPic");
    var inputMissionComment=(getValueById("inputMissionComment")==="")?response.data.missionComment:getValueById("inputMissionComment");
    var inputMissionSpeakerName=(getValueById("inputMissionSpeakerName")==="")?response.data.missionSpeakerName:getValueById("inputMissionSpeakerName");
    var inputMissionSpeak=(getValueById("inputMissionSpeak")==="")?response.data.missionSpeak:getValueById("inputMissionSpeak");
    var inputVisionComment=(getValueById("inputVisionComment")==="")?response.data.visionComment:getValueById("inputVisionComment");
    var inputVisionSpeakerName=(getValueById("inputVisionSpeakerName")==="")?response.data.visionSpeakerName:getValueById("inputVisionSpeakerName");
    var inputVisionSpeak=(getValueById("inputVisionSpeak")==="")?response.data.visionSpeak:getValueById("inputVisionSpeak");
    var inputMissionCommentEn=(getValueById("inputMissionCommentEn")==="")?response.data.missionComment:getValueById("inputMissionCommentEn");
    var inputMissionSpeakerNameEn=(getValueById("inputMissionSpeakerNameEn")==="")?response.data.missionSpeakerName:getValueById("inputMissionSpeakerNameEn");
    var inputMissionSpeakEn=(getValueById("inputMissionSpeakEn")==="")?response.data.missionSpeak:getValueById("inputMissionSpeakEn");
    var inputVisionCommentEn=(getValueById("inputVisionCommentEn")==="")?response.data.visionComment:getValueById("inputVisionCommentEn");
    var inputVisionSpeakerNameEn=(getValueById("inputVisionSpeakerNameEn")==="")?response.data.visionSpeakerName:getValueById("inputVisionSpeakerNameEn");
    var inputVisionSpeakEn=(getValueById("inputVisionSpeakEn")==="")?response.data.visionSpeak:getValueById("inputVisionSpeakEn");

    var requestData={
        'missionPic': inputMissionPic,
        'visionPic': inputVisionPic,
        'missionComment': inputMissionComment,
        'missionSpeakerName': inputMissionSpeakerName,
        'missionSpeak': inputMissionSpeak,
        'visionComment': inputVisionComment,
        'visionSpeakerName': inputVisionSpeakerName,
        'visionSpeak': inputVisionSpeak,
        'missionCommentEn': inputMissionCommentEn,
        'missionSpeakerNameEn': inputMissionSpeakerNameEn,
        'missionSpeakEn': inputMissionSpeakEn,
        'visionCommentEn': inputVisionCommentEn,
        'visionSpeakerNameEn': inputVisionSpeakerNameEn,
        'visionSpeakEn': inputVisionSpeakEn
    };

    if (postModel(url+"/aboutUs/updateData",requestData).code===200){
        alert("Değişiklikler kaydedildi...");
        location.href=""+urlAdminFrontend+"/about.html";
    } else {
        alert("Hata gerçekleşti !!!");
    }
}

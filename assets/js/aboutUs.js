function aboutUsPageAdmin() {
    var response=getModel(url +"/aboutUs/getAllData");

    setValueById("missionPic",response.data.missionPic.substring(0, 40));
    setValueById("missionComment",response.data.missionComment.substring(0, 40));
    setValueById("missionSpeakerName",response.data.missionSpeakerName);
    setValueById("missionSpeak",response.data.missionSpeak.substring(0, 40));

    setValueById("visionPic",response.data.visionPic.substring(0, 40));
    setValueById("visionComment",response.data.visionComment.substring(0, 40));
    setValueById("visionSpeakerName",response.data.visionSpeakerName);
    setValueById("visionSpeak",response.data.visionSpeak.substring(0, 40));

}

function updateAboutUsPage() {
    var response=getModel(url +"/aboutUs/getAllData");

    var inputMissionPic=(getValueById("inputMissionPic")==="")?response.data.missionPic:getValueById("inputMissionPic");
    var inputMissionComment=(getValueById("inputMissionComment")==="")?response.data.missionComment:getValueById("inputMissionComment");
    var inputMissionSpeakerName=(getValueById("inputMissionSpeakerName")==="")?response.data.missionSpeakerName:getValueById("inputMissionSpeakerName");
    var inputMissionSpeak=(getValueById("inputMissionSpeak")==="")?response.data.missionSpeak:getValueById("inputMissionSpeak");
    var inputVisionPic=(getValueById("inputVisionPic")==="")?response.data.visionPic:getValueById("inputVisionPic");
    var inputVisionComment=(getValueById("inputVisionComment")==="")?response.data.visionComment:getValueById("inputVisionComment");
    var inputVisionSpeakerName=(getValueById("inputVisionSpeakerName")==="")?response.data.visionSpeakerName:getValueById("inputVisionSpeakerName");
    var inputVisionSpeak=(getValueById("inputVisionSpeak")==="")?response.data.visionSpeak:getValueById("inputVisionSpeak");

    var requestData={
        'missionPic': inputMissionPic,
        'missionComment': inputMissionComment,
        'missionSpeakerName': inputMissionSpeakerName,
        'missionSpeak': inputMissionSpeak,
        'visionPic': inputVisionPic,
        'visionComment': inputVisionComment,
        'visionSpeakerName': inputVisionSpeakerName,
        'visionSpeak': inputVisionSpeak
    };

    postModel(url+"/aboutUs/updateData",requestData);
}

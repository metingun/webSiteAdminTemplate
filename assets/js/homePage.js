function homePageAdmin() {
    var response=getModel(url+"/homePage/getAllData");

    setValueById("bannerPic1",response.data.bannerPic1.substring(0, 40));
    setValueById("bannerPic2",response.data.bannerPic2.substring(0, 40));
    setValueById("bannerPic3",response.data.bannerPic3.substring(0, 40));
    setValueById("bannerTitle",response.data.bannerTitle);
    setValueById("bannerSubtitle",response.data.bannerSubtitle);
    setValueById("bannerButtonText",response.data.bannerButtonText);
    setValueById("bannerTitleEn",response.data.bannerTitleEn);
    setValueById("bannerSubtitleEn",response.data.bannerSubtitleEn);
    setValueById("bannerButtonTextEn",response.data.bannerButtonTextEn);

    setValueById("title1",response.data.title1);
    setValueById("title1En",response.data.title1En);
    setValueById("pic1",response.data.pic1.substring(0, 40));
    setValueById("pic2",response.data.pic2.substring(0, 40));
    setValueById("pic3",response.data.pic3.substring(0, 40));

    setValueById("newSeasonTitle",response.data.newSeasonTitle);
    setValueById("newSeasonTitleEn",response.data.newSeasonTitleEn);
    setValueById("newSeasonPic1",response.data.newSeasonPic1.substring(0, 40));
    setValueById("newSeasonPic2",response.data.newSeasonPic2.substring(0, 40));
    setValueById("newSeasonPic3",response.data.newSeasonPic3.substring(0, 40));
    setValueById("newSeasonPic4",response.data.newSeasonPic4.substring(0, 40));
    setValueById("newSeasonPic5",response.data.newSeasonPic5.substring(0, 40));
    setValueById("newSeasonPic6",response.data.newSeasonPic6.substring(0, 40));
    setValueById("newSeasonPic7",response.data.newSeasonPic7.substring(0, 40));
    setValueById("newSeasonPic8",response.data.newSeasonPic8.substring(0, 40));
}

function updateHomePage() {
    var response=getModel(url+"/homePage/getAllData");

    var inputBannerPic1=(getValueById("inputBannerPic1")==="")?response.data.bannerPic1:getValueById("inputBannerPic1");
    var inputBannerPic2=(getValueById("inputBannerPic2")==="")?response.data.bannerPic2:getValueById("inputBannerPic2");
    var inputBannerPic3=(getValueById("inputBannerPic3")==="")?response.data.bannerPic3:getValueById("inputBannerPic3");
    var inputBannerTitle=(getValueById("inputBannerTitle")==="")?response.data.bannerTitle:getValueById("inputBannerTitle");
    var inputBannerSubtitle=(getValueById("inputBannerSubtitle")==="")?response.data.bannerSubtitle:getValueById("inputBannerSubtitle");
    var inputBannerButtonText=(getValueById("inputBannerButtonText")==="")?response.data.bannerButtonText:getValueById("inputBannerButtonText");
    var inputTitle1=(getValueById("inputTitle1")==="")?response.data.title1:getValueById("inputTitle1");
    var inputBannerTitleEn=(getValueById("inputBannerTitleEn")==="")?response.data.bannerTitle:getValueById("inputBannerTitleEn");
    var inputBannerSubtitleEn=(getValueById("inputBannerSubtitleEn")==="")?response.data.bannerSubtitle:getValueById("inputBannerSubtitleEn");
    var inputBannerButtonTextEn=(getValueById("inputBannerButtonTextEn")==="")?response.data.bannerButtonText:getValueById("inputBannerButtonTextEn");
    var inputTitle1En=(getValueById("inputTitle1En")==="")?response.data.title1:getValueById("inputTitle1En");
    var inputPic1=(getValueById("inputPic1")==="")?response.data.pic1:getValueById("inputPic1");
    var inputPic2=(getValueById("inputPic2")==="")?response.data.pic2:getValueById("inputPic2");
    var inputPic3=(getValueById("inputPic3")==="")?response.data.pic3:getValueById("inputPic3");
    var inputNewSeasonTitle=(getValueById("inputNewSeasonTitle")==="")?response.data.newSeasonTitle:getValueById("inputNewSeasonTitle");
    var inputNewSeasonTitleEn=(getValueById("inputNewSeasonTitleEn")==="")?response.data.newSeasonTitle:getValueById("inputNewSeasonTitleEn");
    var inputNewSeasonPic1=(getValueById("inputNewSeasonPic1")==="")?response.data.newSeasonPic1:getValueById("inputNewSeasonPic1");
    var inputNewSeasonPic2=(getValueById("inputNewSeasonPic2")==="")?response.data.newSeasonPic2:getValueById("inputNewSeasonPic2");
    var inputNewSeasonPic3=(getValueById("inputNewSeasonPic3")==="")?response.data.newSeasonPic3:getValueById("inputNewSeasonPic3");
    var inputNewSeasonPic4=(getValueById("inputNewSeasonPic4")==="")?response.data.newSeasonPic4:getValueById("inputNewSeasonPic4");
    var inputNewSeasonPic5=(getValueById("inputNewSeasonPic5")==="")?response.data.newSeasonPic5:getValueById("inputNewSeasonPic5");
    var inputNewSeasonPic6=(getValueById("inputNewSeasonPic6")==="")?response.data.newSeasonPic6:getValueById("inputNewSeasonPic6");
    var inputNewSeasonPic7=(getValueById("inputNewSeasonPic7")==="")?response.data.newSeasonPic7:getValueById("inputNewSeasonPic7");
    var inputNewSeasonPic8=(getValueById("inputNewSeasonPic8")==="")?response.data.newSeasonPic8:getValueById("inputNewSeasonPic8");

    var requestData={
            'bannerPic1': inputBannerPic1,
            'bannerPic2': inputBannerPic2,
            'bannerPic3': inputBannerPic3,
            'bannerTitle': inputBannerTitle,
            'bannerSubtitle': inputBannerSubtitle,
            'bannerButtonText': inputBannerButtonText,
            'bannerTitleEn': inputBannerTitleEn,
            'bannerSubtitleEn': inputBannerSubtitleEn,
            'bannerButtonTextEn': inputBannerButtonTextEn,
            'title1': inputTitle1,
            'title1En': inputTitle1En,
            'pic1': inputPic1,
            'pic2': inputPic2,
            'pic3': inputPic3,
            'newSeasonTitle': inputNewSeasonTitle,
            'newSeasonTitleEn': inputNewSeasonTitleEn,
            'newSeasonPic1': inputNewSeasonPic1,
            'newSeasonPic2': inputNewSeasonPic2,
            'newSeasonPic3': inputNewSeasonPic3,
            'newSeasonPic4': inputNewSeasonPic4,
            'newSeasonPic5': inputNewSeasonPic5,
            'newSeasonPic6': inputNewSeasonPic6,
            'newSeasonPic7': inputNewSeasonPic7,
            'newSeasonPic8': inputNewSeasonPic8
        };

    if (postModel(url+"/homePage/updateData",requestData).code===200){
        alert("Değişiklikler kaydedildi...");
        location.href=""+urlAdminFrontend+"/homePage.html";
    }
    else{
        alert("Hata gerçekleşti !!!");
    }

}

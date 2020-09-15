function pageLoad(pageNumber) {
    switch (pageNumber) {
        case "1":
            homePageAdmin();
            break;

        case "2":
            collectionPageAdmin();
            break;

        case "3":
            referancePageAdmin();
            break;

        case "4":
            aboutUsPageAdmin();
            break;

        case "5":
            certificatesPageAdmin();
            break;

        case "6":
            productPageAdmin();
            break;

        case "7":
            contactPageAdmin();
            break;

        case "8":
            messagePageAdmin();
            break;
    }
}
(function ($) {
    "use strict";

    $(document).ready(function () {
        if (sessionControl()===getCookie("token")){
            var pageNumber=findAttributeValueById("header111x","data-value");
            pageLoad(pageNumber);
        }
        else{
            location.href=""+urlAdminFrontend+"/login.html";
        }

    });

})(jQuery);

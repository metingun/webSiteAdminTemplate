
(function ($) {
    "use strict";

    $(document).ready(function () {
        var pageNumber=findAttributeValueById("header111x","data-value");

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
                break;

            case "6":
                break;

            case "7":
                contactPageAdmin();
                break;

            case "8":
                messagePageAdmin();
                break;
        }

    });

})(jQuery);

/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
//Function to open a portfolio work 1 in dialog box

function openPortfolioWorks(work) {

    var bodyElem="\<body style='background-color: darkgrey;' \>\<\/body\>";
    var buttonElem="\<button onclick='goBack()'\> Back\<\/button\>"
    var imageElemStyle="style='width: auto;height:auto;display: block;max-width:100%;max-height:100%;margin:auto;margin-bottom: 20px;'";

    var myWindow;
    myWindow=window.open('','_self',"",false);
    console.log("was here"+document.referrer);
    myWindow.document.write(bodyElem);
    myWindow.document.write(buttonElem);

    var x = work.id;

    switch (x) {
        case '1':
            myWindow.document.write("\<h2 style='text-align:center;text-transform: uppercase;' \>Source\<\/h2\>");
            myWindow.document.write( "\<img src='img/portfolioWorks/istocnik/istocnik1.jpg'"+imageElemStyle+" \ >");
            myWindow.document.write( "\<img src='img/portfolioWorks/istocnik/istocnik2.jpg'"+imageElemStyle+" \ >");
            myWindow.document.write( "\<img src='img/portfolioWorks/istocnik/istocnik3.jpg'"+imageElemStyle+" \ >");
            break;
        case '2':
            myWindow.document.write("\<h2 style='text-align:center;text-transform: uppercase;' \>Saint Christopher\<\/h2\>");
            myWindow.document.write( "\<img src='img/portfolioWorks/christofor/christofor1.JPG'"+imageElemStyle+" \ >");
            myWindow.document.write( "\<img src='img/portfolioWorks/christofor/christofor2.JPG'"+imageElemStyle+" \ >");
            myWindow.document.write( "\<img src='img/portfolioWorks/christofor/christofor3.JPG'"+imageElemStyle+" \ >");

            break;
        case '3':
            myWindow.document.write("\<h2 style='text-align:center;text-transform: uppercase;' \>Harlequin\<\/h2\>");
            myWindow.document.write( "\<img src='img/portfolioWorks/arlekin/optimized/arlekin1-min.JPG'"+imageElemStyle+" \ >");
            myWindow.document.write( "\<img src='img/portfolioWorks/arlekin/optimized/arlekin2-min.jpeg'"+imageElemStyle+" \ >");
            myWindow.document.write( "\<img src='img/portfolioWorks/arlekin/optimized/arlekin3-min.jpg'"+imageElemStyle+" \ >");
            myWindow.document.write( "\<img src='img/portfolioWorks/arlekin/optimized/arlekin4-min.jpg'"+imageElemStyle+" \ >");
            myWindow.document.write( "\<img src='img/portfolioWorks/arlekin/optimized/arlekin5-min.jpg'"+imageElemStyle+" \ >");
            myWindow.document.write( "\<img src='img/portfolioWorks/arlekin/optimized/arlekin8-min.jpg'"+imageElemStyle+" \ >");

            break;
        case '4':
            myWindow.document.write("\<h2 style='text-align:center;text-transform: uppercase;' \>David\<\/h2\>");
            myWindow.document.write( "\<img src='img/portfolioWorks/david/david1.jpg'"+imageElemStyle+" \ >");
            myWindow.document.write( "\<img src='img/portfolioWorks/david/david2.jpg'"+imageElemStyle+" \ >");
            break;
        case '5':
            myWindow.document.write("\<h2 style='text-align:center;text-transform: uppercase;' \>The temptation of pandora\<\/h2\>");
            myWindow.document.write( "\<img src='img/portfolioWorks/pandora/pandora1.jpg'"+imageElemStyle+" \ >");
            myWindow.document.write( "\<img src='img/portfolioWorks/pandora/pandora2.jpg'"+imageElemStyle+" \ >");
            break;
        default:
            return false;
    }


}
function goBack() {
    window.history.back();

}
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



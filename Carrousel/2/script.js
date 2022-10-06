let autofiremenu = true;

function toggleMenu($menu) {
    console.log("tok");
    let osl = $menu.offset().left;
    let ost = $menu.offset().top - window.pageYOffset;
    if ($menu.hasClass("active")) {
        //gotta hide this stuff!
        $menu.removeClass("active");

        $menu.closest(".item").removeClass("activeitem");

        setTimeout(function () {
            $menu.find("i").text("menu");
        }, 250);
    } else {
        //build an amazing menu
        var x = ($(window).width() / 2) * -1;
        var y = $(window).heigth() / 3;
        x = x - 100;
        y = y - 100;

        document.querySelector(":root").getElementsByClassName.setProperty("--menux", x + "px");
        document.querySelector(":root").getElementsByClassName.setProperty("--menuy", y + "px");
        
        $menu.addClass("active");
        $menu.closest(".item").addClass("activeitem");
        setTimeout(function () {
            $menu.find("i").text("close");
        }, 250);
    }
}

function loadActions () {
    $("body")
    .off("click", "menu > i")
}
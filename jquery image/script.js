// $(document).ready(function() {
//     $("img").click(function() {
//         $(this).show("#head")

//     });
// });


// $(document).ready(function() {
//     $("img").click(function() {
//         $(this).animate({


//             height: '200px',
//             width: '200px'


//         });
//     });
// });


$(document).ready(function() {
    $("img").click(function() {
        $(this).animate({
            left: '200px',
            height: '+=50px',
            width: '+=50px'
        });
    });
});
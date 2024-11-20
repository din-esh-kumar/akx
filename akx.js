// document.querySelector(".mainvid").addEventListener("canplay",function(){
//     setTimeout(function(){
//             document.querySelector(".popup").display="block";
//         },1000
//     )
// });
// document.querySelector(".newvid").addEventListener("canplay",function() {
//     setTimeout(function xplay(){
//         console.log('l');
//         document.querySelector(".popup").display="block";
//     },
//     1000
//     )
// })
// document.querySelector(".clickpop").function clickpop(){
        setTimeout(function(){
            document.querySelector(".popup").style.display="block";
            document.querySelector(".akvid").style.visibility="hidden";
            // document.querySelector(".wholediv").style.visibility="hidden";
            // document.querySelector(".pagebtn").style.visibility="hidden";
            // document.querySelector("body").style.opacity='0.2'
            // document.querySelector(".popup").style.opacity="1";
        },2000
        )
// });
document.querySelector("#closed").addEventListener("click", function(){
    document.querySelector(".popup").style.display="none";
    document.querySelector(".akvid").style.visibility="visible";
    // document.querySelector(".wholediv").style.visibility="visible";
    // document.querySelector(".pagebtn").style.visibility="visible";
    // document.querySelector("body").style.opacity='1';
    // document.querySelector("footer").style.opacity="0";

});
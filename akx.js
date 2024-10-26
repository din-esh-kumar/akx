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

document.querySelector("#closed").addEventListener("click", function(){
    document.querySelector(".popup").style.display="none";
});
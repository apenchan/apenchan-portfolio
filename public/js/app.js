console.log("hello world");


$(document).ready(function () {
  
    var back = $(".back");//declaring a var for elem back
    back.hide();//when my document loads, I will hide the elem from sight
  
    $(".lang-img").hover(function () {//when I hover over ".lang-img"
        $(this.nextElementSibling).show()//then this (which is lang-img) and its next elem (which is .back), will display inline block
    })
  });
  



  
//hacky but works
// $(document).ready(function () {

//   var back = $(".back");//declaring a var for elem back
//   back.hide();//when my document loads, I will hide the elem from sight

//   $(".lang-img").mouseenter(function () {//when I hover over ".lang-img"
//     if($(back).css('display') == 'none'){//check to see if back is display none and if so
//       $(this.nextElementSibling).show("inline-block")//then this (which is lang-img) and its next elem (which is .back), will display inline block
//     } else if//otherwise
//       ($('.lang-img').css('display') =='none'){//if .lang-img is display none (because of the mouseover)
//         $(this.nextElementSibling).show("inline-block")//then this(.lang-img) next sibling (which is back), will display inline-block
//     } 
//     $(this).toggle()
//   })
//   // $(".back").mouseleave(function(){
//   //   // alert("I am closing")//test purposes. will remove at deploy
//   //   if($(this.previousElementSibling).css('display') == 'none'){
//   //     $(this.previousElementSibling).show() 
//   //   } 
//   //   $(this).toggle()
//   // })

// });





console.log("hello world");

//hacky but works
$(document).ready(function() {
  
    var back = $(".back");//declaring a var for elem back
    back.hide();//when my document loads, I will hide the elem from sight
  
    $(".lang-img").mouseover(function () {//when I hover over ".lang-img"
      if($(back).css('display') == 'none'){//check to see if back is display none and if so
        $(this.nextElementSibling).show("inline-block")//then this (which is lang-img) and its next elem (which is .back), will display inline block
      } else if//otherwise
        ($('.lang-img').css('display') =='none'){//if .lang-img is display none (because of the mouseover)
          $(this.nextElementSibling).show("inline-block")//then this(.lang-img) next sibling (which is back), will display inline-block
      }
      $(this).toggle()
    })
  })

  // $(document).ready(function() {
//   $(".lang-img").hover(function () {
//     $(this).css({
//       ".level.back": "",
//       'perspective': '100px',
//       'transform':'rotateX(-180deg)'
//     })
//     $('lang-img').toggle()
//   })
// })


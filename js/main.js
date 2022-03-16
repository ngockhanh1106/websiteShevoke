
// open search

// function openSearch() {
//   document.getElementById("btnSearch").style.display = "block";
// }

// function closeSearch() {
//   document.getElementById("btnSearch").style.display = "none";
// }


// open search
  var modal = document.getElementById('id01');
        
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) 
  {
    if (event.target == modal) 
    {
      modal.style.display = "none";
    }
  }


// open bars

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// croll footer - accordion
var acc = document.getElementsByClassName("font-title");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var footerlist = this.nextElementSibling;
    if (footerlist.style.maxHeight) {
      footerlist.style.maxHeight = null;
      } 
    else {
      footerlist.style.maxHeight = footerlist.scrollHeight + "px";
      }
  });
}


 

      
// Add to shoppingbag
var sll = $(".shoppingbag-number").html();

$(".btn-add").click(function(){
  sll++;
  console.log(sll);
  $(".shoppingbag-number").html(sll);
  $(window).scrollTop(0);
})

// show your password
function showPassword() {
  x = document.getElementById("myInput");
  if (x.type === "password") {
      x.type = "text";
  }
  else {
      x.type = "password";
  }
}


$(document).ready(function () {
  $('.product-layout-grid').readall({
  // Default values
    showheight: 600,                         // height to show
    showrows: null,                         // rows to show (overrides showheight)
    animationspeed: 200,                    // speed of transition
    btnTextShowmore: 'Read more',           // text shown on button to show more
    btnTextShowless: 'Read less',           // text shown on button to show less
    btnClassShowmore: 'readall-button',     // class(es) on button to show more
    btnClassShowless: 'readall-button'      // class(es) on button to show less
   });
});
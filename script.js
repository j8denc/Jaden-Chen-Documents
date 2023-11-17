
var acc = document.getElementsByClassName("acc-header");
var i;

for (i = 0; i < acc.length; i++) {

  // for each accordion header, add an event listener
  acc[i].addEventListener("click", function() {

    // on click, toggle the active class on this and it's next sibling.
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.classList.toggle("active");

    //if the section has a maxHeight, unset it.
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.marginBottom = null;
    } 
    //if not, set it.
    else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      // panel.style.marginBottom = "5em";
    }
  });

  if (acc[i].classList.contains("active")) {
    var panel = acc[i].nextElementSibling;
    // console.log(panel);
    panel.classList.toggle("active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.marginBottom = null;
    } 
    //if not, set it.
    else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      // panel.style.marginBottom = "5em";
    }
  } else {
    // console.log('not active');
  }
}


if (window.location.search.substring(1)) {
  var query = window.location.search.substring(1);
  // console.log(query);

  // console.log(acc[query]);
  acc[query].classList.toggle("active");
  var panel = acc[query].nextElementSibling;
  panel.classList.toggle("active");

  //if the section has a maxHeight, unset it.
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    panel.style.marginBottom = null;
  } 
  //if not, set it.
  else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    // panel.style.marginBottom = "5em";
  }
}



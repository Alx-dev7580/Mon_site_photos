var lien_Crotoy = document.getElementById("photo_Crotoy");
var body = document.getElementsByTagName("body")[0];
lien_Crotoy.addEventListener("mouseover", bg_lien_Crotoy);
lien_Crotoy.addEventListener("mouseout", bg_lien_Crotoy_out);

function bg_lien_Crotoy() {
  body.classList.remove("body");
  body.classList.add("body2");
}

function bg_lien_Crotoy_out() {
  body.classList.add("body");
  body.classList.remove("body2");
}

const navMenuHindi = document.getElementById("navMenuHindi");
const navMenuEnglish = document.getElementById("navMenuEnglish");
const introHindi = document.getElementById("introHindi");
const introEnglish = document.getElementById("introEnglish");
const pujayeHindi = document.getElementById("pujayeHindi");
const pujayeEnglish = document.getElementById("pujayeEnglish");
const imageGalleryHindi = document.getElementById("imageGalleryHindi");
const imageGalleryEnglish = document.getElementById("imageGalleryEnglish");
const aboutHindi = document.getElementById("aboutHindi");
const aboutEnglish = document.getElementById("aboutEnglish");
const placeHindi = document.getElementById("placeHindi");
const placeEnglish = document.getElementById("placeEnglish");
const contactHindi = document.getElementById("contactHindi");
const contactEnglish = document.getElementById("contactEnglish");
function callMe() {
  window.location.href = "tel:+91 8817453140";
}
function whatsappMe() {
  var whatsappNumber = "+918817453140"; // Replace with the actual WhatsApp number

  // Construct the WhatsApp URL
  var whatsappUrl =
    "https://wa.me/" + whatsappNumber + "?text=" + "Jai Shree Ram";

  // Open the WhatsApp URL in a new tab
  window.open(whatsappUrl, "_blank");
}

function switchToEnglish() {
  document.getElementById("toggleLanguageEnglish").style.display = "none";
  document.getElementById("toggleLanguageHindi").style.display = "block";
  navMenuHindi.style.display = "none";
  navMenuEnglish.style.display = "block";
  introHindi.style.display = "none";
  introEnglish.style.display = "block";
  pujayeHindi.style.display = "none";
  pujayeEnglish.style.display = "block";
  imageGalleryHindi.style.display = "none";
  imageGalleryEnglish.style.display = "block";
  aboutHindi.style.display = "none";
  aboutEnglish.style.display = "block";
  placeHindi.style.display = "none";
  placeEnglish.style.display = "block";
  contactHindi.style.display = "none";
  contactEnglish.style.display = "block";

}
function switchToHindi() {
  document.getElementById("toggleLanguageEnglish").style.display = "block";
  document.getElementById("toggleLanguageHindi").style.display = "none";
  navMenuHindi.style.display = "block";
  navMenuEnglish.style.display = "none";
  introHindi.style.display = "block";
  introEnglish.style.display = "none";
  pujayeHindi.style.display = "block";
  pujayeEnglish.style.display = "none";
  imageGalleryHindi.style.display = "block";
  imageGalleryEnglish.style.display = "none";
  aboutHindi.style.display = "block";
  aboutEnglish.style.display = "none";
  placeHindi.style.display = "block";
  placeEnglish.style.display = "none";
  contactHindi.style.display = "block";
  contactEnglish.style.display = "none";
}

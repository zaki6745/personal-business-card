/*
  PERSONAL NFC CARD — EDIT YOUR DETAILS HERE.
  Use your full international WhatsApp number with digits only, including country code.
  Example format for Algeria: 213XXXXXXXXX (do not include +, spaces, or dashes).
*/
const PROFILE = {
  name: "Zaki",
  title: "Web Developer & Designer",
  email: "zakizakioo666@gmail.com",
  instagram: "_auren_studi.oo",
  whatsapp: "213773365156",
  x: "za_ki_za_ki_oo",
  // This is a simple contact card file. Add your real phone number if you want it included.
  phone: ""
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const emailLink = document.querySelector('[data-contact="email"]');
if (emailLink) {
  emailLink.href = `mailto:${PROFILE.email}`;
  setText('[data-detail="email"]', PROFILE.email);
}

const instagramLink = document.querySelector('[data-contact="instagram"]');
if (instagramLink) {
  instagramLink.href = `https://instagram.com/${PROFILE.instagram.replace(/^@/, "")}`;
  setText('[data-detail="instagram"]', `@${PROFILE.instagram.replace(/^@/, "")}`);
}

const whatsappLink = document.querySelector('[data-contact="whatsapp"]');
if (whatsappLink) {
  const digits = PROFILE.whatsapp.replace(/\D/g, "");
  whatsappLink.href = digits && !digits.includes("X") ? `https://wa.me/${digits}` : "https://wa.me/";
  setText('[data-detail="whatsapp"]', digits && !digits.includes("X") ? "Chat directly" : "Add your number in script.js");
}

const xLink = document.querySelector('[data-contact="x"]');
if (xLink) {
  xLink.href = `https://x.com/${PROFILE.x.replace(/^@/, "")}`;
  setText('[data-detail="x"]', `@${PROFILE.x.replace(/^@/, "")}`);
}

setText("#year", new Date().getFullYear());

document.querySelector("#saveContact")?.addEventListener("click", () => {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${PROFILE.name}`,
    `TITLE:${PROFILE.title}`,
    `EMAIL:${PROFILE.email}`,
    PROFILE.phone ? `TEL;TYPE=CELL:${PROFILE.phone}` : "",
    `URL:https://portfolio-five-lovat-zf59t4llqk.vercel.app/`,
    "NOTE:Founder of AUREN Digital Studio",
    "END:VCARD"
  ].filter(Boolean).join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Zaki-Contact.vcf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setText("#saveNote", "Contact file downloaded — open it on your phone to save your details.");
});
document.addEventListener("contextmenu", function (event) {
  if (event.target.closest("img, .portrait-side")) {
    event.preventDefault();
  }
});

document.querySelectorAll("img").forEach(function (img) {
  img.setAttribute("draggable", "false");
});
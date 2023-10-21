const menuBtn = document.querySelector('.menu-btn')
const menuList = document.querySelector('.nav__list')

menuBtn.addEventListener("click" , () => {
    menuList.classList.toggle("nav__active")
})

menuBtn.addEventListener("click" , () =>{
    menuBtn.classList.toggle("menu__active")
})

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const phone = form.elements.phone.value;
  const text = form.elements.message.value;
  const message = `
Name: ${name} 
Phone: ${phone}
Text: ${text}
`;

  const TOKEN = "6007025959:AAGaOkPxpAP0ZTVrYiivKQxmEg-htHSLWYA";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const ID = "1642357559";

  axios
    .post(URI_API, {
      chat_id: ID,
      pars_mode: "html",
      text: message,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  window.location.reload();
});
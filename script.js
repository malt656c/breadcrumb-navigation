/* definitioner */
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
const list = document.querySelector("ul");


function generateBreadcrumbs() {
    /* resetter listen hvis man klikker flere gange */
  list.innerHTML = "";
  /* gaår igennem objekterne i vores bc array */
  bc.forEach((anchor) => {
    /* tjekker om objektet er det sidste i vores array eller ej. indsætter passende html efter */
    if (anchor === bc[bc.length-1]) {
        list.innerHTML += `<li><span>${anchor.name}</span></li>`;
    } else {
      list.innerHTML += `<li><a href="${anchor.link}">${anchor.name}</a></li>`;
    }
  });
}

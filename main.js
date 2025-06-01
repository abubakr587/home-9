let prom = prompt ('Ismingizni kiriting');


let prom2 = prompt ('Familyangizni kiriting');


let prom3 = prompt ('Yoshingizni kiriting');


let prom4 = prompt ('Ismingizni kichik yokida kataligini tanlang 1)Kata 2)Kichik');

if (prom4 == 1 ) {
prom.toUpperCase
prom2.toUpperCase
} else if (prom4 == 2) {
prom.toLowerCase
prom2.toLocaleLowerCase

}
   else {
    alert("Notogri tanlov. Iltimos, faqat 1 yoki 2 ni kiriting."(prom4));

  }

if (prom4 === "1" || prom4 === "2") {
     
    let box = document.createElement("div");
    box.innerHTML = `
      <p>1.<strong>prom:</strong> ${prom}</p>
      <p>2.<strong>prom2:</strong> ${prom2}</p>
      <p>3.<strong>prom3:</strong> ${prom3}</p>
    `;


    box.style.backgroundColor = "black";
    box.style.color = "white";
    box.style.padding = "20px";
    box.style.borderRadius = "30px";
    box.style.fontSize = "20px";
    box.style.lineHeight = "1.8";
    box.style.width = "fit-content";
    box.style.margin = "30px";

    
    document.getElementById("natija").appendChild(box);
  }


       

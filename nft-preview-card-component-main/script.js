let mainBg = document.querySelector("body");
mainBg.style.backgroundColor = "#0d1a2d";

let section = document.createElement("section");
section.style.display = "flex";
section.style.justifyContent = "space-evenly";
section.style.margin = "30px 0px 0px 0px";
document.body.append(section);

let div = document.createElement("div");
div.id = "wrapper";
section.append(div);
let card = document.querySelector("#wrapper");
card.style.cssText = `
width: 300px;
height: 500px;
background-color: hsl(216, 50%, 16%);
border-radius: 10px;
box-shadow: 0 15px 0 15px #0c1728,
 0 20px 0 35px #0c192c;
`;

let img = document.createElement("img");
div.append(img);
img.setAttribute("src", "images/image-equilibrium.jpg");
img.className = "img-bg";
let imgBg = document.querySelector(".img-bg");
imgBg.style.cssText = `
width: 270px;
border-radius: 5px;
margin: 15px; 
`;

let h3 = document.createElement("h3");
div.append(h3);
h3.append("Equilibrium #3429");
h3.style.cssText = `
color:  #eaf2f2;
margin-left: 15px;
margin-top: -0px`;

let p1 = document.createElement("p");
div.append(p1);
p1.append("Our Equilibrium collection promotes balance and calm.");
p1.className = "text";
let text = document.querySelector(".text");
text.style.cssText = `
margin-left: 15px;
font-size: 16px;
color: #49607f;
`;

let div1 = document.createElement("div");
div.append(div1);
div1.style.display = "flex";

let icon1 = document.createElement("img");
div1.append(icon1);
icon1.setAttribute("src", "images/icon1.svg");
icon1.className = "icon";
let icon = document.querySelector(".icon");
icon.style.marginLeft = "15px";
icon.style.width = "10px";
icon.style.height = "15px";

let price = document.createElement("p");
div1.append(price);
price.append("0.041ETH");
price.style.color = "#0f8992";
price.style.marginLeft = "5px";
price.style.marginTop = "0px";
price.style.fontWeight = "bold";

let icon2 = document.createElement("img");
div1.append(icon2);
icon2.setAttribute("src", "images/clock.svg");
icon2.className = "icon-two";
let iconTwo = document.querySelector(".icon-two");
iconTwo.style.marginLeft = "90px";
iconTwo.style.width = "15px";
iconTwo.style.height = "18px";

let day = document.createElement("p");
div1.append(day);
day.append("3 days left");
day.style.color = "#49607f";
day.style.marginLeft = "5px";
day.style.marginTop = "0px";
day.style.fontWeight = "bold";

let div2 = document.createElement("div");
div.append(div2);
div2.style.borderBottom = "3px solid #172945";
div2.style.margin = "0 15px 0 15px";

let div3 = document.createElement("div");
div.append(div3);
div3.style.marginTop = "15px";
div3.style.display = "flex";

let icon4 = document.createElement("img");
div3.append(icon4);
icon4.setAttribute("src", "images/favicon.png");
icon4.style.marginLeft = "16px";
icon4.style.width = "26px";
icon4.style.height = "26px";

let icon3 = document.createElement("img");
div3.append(icon3);
icon3.setAttribute("src", "images/avatar.png");
icon3.style.marginLeft = "-25px";
icon3.style.marginTop = "0.5px";
icon3.style.width = "24px";
icon3.style.height = "24px";

let p2 = document.createElement("p");
div3.append(p2);
p2.append("Creation of");
p2.style.color = "#49607f";
p2.style.fontWeight = "bold";
p2.style.margin = "5px 0 0 10px";

let p3 = document.createElement("p");
div3.append(p3);
p3.append("Jules Wyvern");
p3.style.color = "hsl(0, 0%, 100%)";
p3.style.fontWeight = "bold";
p3.style.margin = "5px 0 0 10px";

alert("Я оцениваю свою работу на 110 баллов");

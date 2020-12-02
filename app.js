function para(p1, Texte) {
    let para = document.getElementById('p1');
    console.log("p1" + "" + Texte);
    para.innerHTML = "Bonjour"
}

para("Texte a mettre", "Bonjour");

let para2 = para();
document.getElementById('p2').innerHTML = "Hello World";

let para3 = para();
document.getElementById('p3').innerHTML = "Hello";

let para4 = para();
document.getElementById('p4').innerHTML = "Bonjour tout le monde";

let para5 = para();
document.getElementById('p5').innerHTML = "Bonjour";

let a = window;

// alert('Hello Surat');
// let pro = prompt('Enter Your Name');

// console.log("Promt :" + pro)
// a = confirm('finally delete the fill');

let wheight = window.innerHeight;
document.write("InnerHeight :" + wheight + "<br>");

let wWidth = window.innerWidth;
document.write("InnerWidth :" + wWidth + "<br>")

let loc = location.toString();
document.write("Location :" + loc);

var mywindow;
function openwindow() {
    mywindow = window.open("https://www.w3schools.com", "width:10px", "hight:10px")
}

function closewindow() {
    mywindow.close();
}









// var hederh1 = document.getElementById('hederh1');
// hederh1.innerHTML = '<h5>How Are You Surat</h5>';
// hederh1.style.backgroundColor = "yellow"
// hederh1.style.borderBottom = "1px solid black"

// var header = document.getElementById(head);
// head.style.borderBottom = "3px solid black"
// head.style.backgroundColor = "yellow"

// var items = document.getElementsByClassName("list-item");
// items[0].style.color = "red";
// items[0].style.backgroundcolor="yellow";

// var li = document.getElementsBy("list-item");
// li[1].style.color = "red";
// items[2].style.backgroundcolor="yellow";

// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = "yellow"
// }

// var headline = document.querySelector("#headerp")
// headline.style.color = "red";

// var item = document.querySelectorAll(".list-item")
// item[0].style.color = "red"
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "yellow"
//     items[i].style.color = "red"
// }

// var input = document.querySelector("input")
// input.value = "Enter Your Name";





var dom = document.getElementById("ollist");
let text = document.getElementById("ollist")
let textshow = document.getElementById("olliste")

function domoutput() {
    if (text.value == "") {

        alert("TEXT ADD")
    } else {
        let li = document.createElement("li")
        li.innerText = text.value;
        textshow.appendChild(li);

    }
    text.value = ""
}

var u = document.getElementById("myul");
var i = document.getElementById("item2");
u.removeChild(i);
console.log(i);




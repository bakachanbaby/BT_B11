//Tạo nút xóa cho các li

//Nhấn vào nút xóa để quá
const close = document.getElementsByClassName("fa-times");
let i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.remove();
    }
}
//Tạo icon check cho các li khi nhấn vào
const list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
//Tạo li mới
const btn = document.querySelector(".btn")

btn.onclick = function () {

    // var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    if (inputValue == '') {
        return;
    }
    var t = `<li> ${inputValue} <i class="fas fa-times"></i> </li>`;
    const ul = document.getElementById('list')
    ul.innerHTML += t;
    
    document.getElementById("myInput").value = "";

    const close = document.getElementsByClassName("fa-times");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
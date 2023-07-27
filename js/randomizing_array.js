var arrayGlobal = [];
function test() {
    let canvas = document.getElementById("drawing_area");
    const width = window.getComputedStyle(canvas).getPropertyValue("width");
    let list = [];
    for (var i = 0; i < parseInt(width.slice(0,width.length-2))/20; i++) {
        list.push(Math.floor(Math.random() * 85));
    }
    arrayGlobal = list;
    const height = canvas.offsetHeight;

    //clear canvas if already alloted arrays are present
    canvas.innerHTML = '';

    for (let i = 0; i < list.length; i++) {

        div = document.createElement('div');

        div.setAttribute('class', 'array_elements');
        div.setAttribute('id', i);

        div.style.height = (list[i] / height) * 3000 + "px";
        // console.log(div.style.height);
        div.textContent = list[i];
        canvas.appendChild(div);

    }
}
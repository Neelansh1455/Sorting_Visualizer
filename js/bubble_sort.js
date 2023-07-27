value = true;
document.getElementById("rand_button").addEventListener('click', callback);
async function swap(elem1, elem2, isLast) {
    divElem1 = document.getElementById(elem1);
    divElem2 = document.getElementById(elem2);

    const style1 = divElem1.style.height;
    const style2 = divElem2.style.height;

    divElem1.style.backgroundColor = "red";
    divElem2.style.backgroundColor = "red";

    let temp = list[elem1];
    list[elem1] = list[elem2];
    list[elem2] = temp;

    divElem1.style.height = style2;
    divElem1.textContent = list[elem1];
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 125);
    })
    divElem2.style.height = style1;
    divElem2.textContent = list[elem2];

    divElem1.style.backgroundColor = "aquamarine";
    divElem2.style.backgroundColor = "aquamarine";

    if (isLast) {
        divElem2.style.backgroundColor = "green";
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 150);
    })

}

async function bubble_sort() {
    document.getElementById("bubble_sort_btn").onclick = "";
    document.getElementById("selection_sort_btn").onclick = "";
    value = true;
    list = arrayGlobal;

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                await swap(j, j + 1, j + 1 == list.length - i - 1 ? true : false);
            }

            if (value == false) {
                document.getElementById("bubble_sort_btn").onclick = bubble_sort;
                document.getElementById("selection_sort_btn").onclick = selection_sort;
                return;
            }
        } document.querySelector('#drawing_area div:nth-of-type(' + (list.length - i) + ')').style.backgroundColor = "green";
    }
    console.log(list);
    document.getElementById("selection_sort_btn").onclick = selection_sort;
    document.getElementById("bubble_sort_btn").onclick = bubble_sort;
}
function callback() {
    
    value = false;
}
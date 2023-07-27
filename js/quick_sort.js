async function quick_sort() {
    list = arrayGlobal;
    await myDelay();
    for (let i = 0; i < list.length; i++) {
        getDiv(i, "grey");
    }
    await quick_sort_start(list, 0, list.length - 1);
    console.log(list);
    for(let i = 0;i < list.length;i++){
        getDiv(i,"green");
    }
}
async function quick_sort_start(list, low, high) {
    if (low >= high) {
        return;
    }
    for (let i = 0; i < list.length; i++) {
        getDiv(i, "aquamarine");
    }
    let pivot = list[high];
    getDiv(high,"purple");


    let i = low - 1;

    for (let j = low; j < high; j++) {
        await myDelay();
        getDiv(j,"yellow");
        if (list[j] <= pivot) {
            i++;
            await myDelay();
            getDiv(i,"grey");
            swap_quick(i, j);
        }
    }
    await swap_quick(i + 1, high);
    await myDelay();

    for(let x= low; x < i;x++){
        getDiv(x,"red");
    }
    await recursiveDelay();
    await quick_sort_start(list, low, i);
    for(let x = i+2; x <= high;x++){
        getDiv(x,"blue");
    }
    await recursiveDelay();
    await quick_sort_start(list, i + 2, high);
}
async function swap_quick(elem1, elem2) {
    let div1 =  document.querySelector('#drawing_area div:nth-of-type(' + (elem1+ 1) + ')');
    let div2 =  document.querySelector('#drawing_area div:nth-of-type(' + (elem2+ 1) + ')');
   await myDelay();
    let tempHeight1 = div1.style.height;
    let tempHeight2 = div2.style.height;

    let text1 = div1.textContent;
    let text2 = div2.textContent;

    div1.style.height = tempHeight2;
    div1.textContent = text2;

    div2.style.height = tempHeight1;
    div2.textContent = text1;

    let temp = list[elem1];
    list[elem1] = list[elem2];
    list[elem2] = temp;
}
async function getDiv(nth, color) {
    document.querySelector('#drawing_area div:nth-of-type(' + (nth + 1) + ')').style.backgroundColor = color+"";
}
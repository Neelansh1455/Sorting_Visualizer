let list = [];

document.getElementById("rand_button").addEventListener('click', callback);

async function selection_sort() {
    document.getElementById("selection_sort_btn").onclick = "";
    value = true;
    list = arrayGlobal;
    for (let i = 0; i < list.length - 1; i++) {
        document.getElementById("bubble_sort_btn").onclick = "";
        document.getElementById("selection_sort_btn").onclick = "";
        let min = i;
        document.querySelector('#drawing_area div:nth-of-type(' + (i + 1) + ')').style.backgroundColor = "red";
        for (let j = i + 1; j < list.length; j++) {
            document.querySelector('#drawing_area div:nth-of-type(' + (j + 1) + ')').style.backgroundColor = "orange";
            await new Promise(
                (resolve) => {
                    setTimeout(() => {
                        resolve()
                    }, 50);
                }
            );

            if (value == false) {
                document.getElementById("selection_sort_btn").onclick = selection_sort;
                document.getElementById("bubble_sort_btn").onclick = bubble_sort;
                return;
            }
            if (list[j] < list[min]) {
                if (min != i)
                    document.querySelector('#drawing_area div:nth-of-type(' + (min + 1) + ')').style.backgroundColor = "aquamarine";

                min = j;
                await new Promise(
                    (resolve) => {
                        setTimeout(() => {
                            resolve()
                        }, 100);
                    }
                );
                if (min != i)
                    document.querySelector('#drawing_area div:nth-of-type(' + (min + 1) + ')').style.backgroundColor = "red";
                await new Promise(
                    (resolve) => {
                        setTimeout(() => {
                            resolve()
                        }, 100);
                    }
                );
            }
            document.querySelector('#drawing_area div:nth-of-type(' + (j + 1) + ')').style.backgroundColor = "aquamarine";
        }
        await swap2(i, min);
        document.querySelector('#drawing_area div:nth-of-type(' + (i + 1) + ')').style.backgroundColor = "green";
    }
    console.log(list);
    document.getElementById("selection_sort_btn").onclick = selection_sort;
    document.getElementById("bubble_sort_btn").onclick = bubble_sort;
}

async function swap2(elem1, elem2) {
    console.log(elem1, elem2);
    let div1 = document.querySelector('#drawing_area div:nth-of-type(' + (elem1 + 1) + ')');
    let div2 = document.querySelector('#drawing_area div:nth-of-type(' + (elem2 + 1) + ')');

    height_div_1 = div1.style.height;
    height_div_2 = div2.style.height;

    let temp = div2.textContent;
    div2.style.height = height_div_1;
    div2.textContent = div1.textContent;



    div1.style.height = height_div_2;
    div2.style.backgroundColor = "aquamarine"
    div1.textContent = temp;

    height_div_1 = div1.style.height;
    height_div_2 = div2.style.height;

    temp = list[elem1];
    list[elem1] = list[elem2];
    list[elem2] = temp;

    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve()
            }, 250);
        }
    );

}
list = [];
document.getElementById("rand_button").addEventListener('click', callback);
let canvas = document.getElementById("drawing_area");
const height = canvas.offsetHeight;
var value = false;
//function called on button click
async function merge_sort() {
    value = true;

    document.getElementById("bubble_sort_btn").onclick = "";
    document.getElementById("selection_sort_btn").onclick = "";
    document.getElementById("merge_sort_btn").onclick = "";

    list = arrayGlobal;
    await rec_merge_sort(list, 0, list.length);
    console.log(list);
    
    
    document.getElementById("selection_sort_btn").onclick = selection_sort;
    document.getElementById("bubble_sort_btn").onclick = bubble_sort;
    document.getElementById("merge_sort_btn").onclick = merge_sort;
    
    //color change to green portrays completion of sorting algorithm
    await myDelay();
    for (let i = 0; i < list.length-1; i++) {
        document.querySelector('#drawing_area div:nth-of-type(' + (i + 1) + ')').style.backgroundColor = "green";
    }

}

//merge sort splitter function, sorts array in place
async function rec_merge_sort(listarg, start, end) {
    if (value == false) {
        return;
    }
    if (end - start == 1) {
        return listarg;
    }
    //adds delay for re-coloring blocks to portray recursive breakdown
    await recursiveDelay();
    for (let i = start; i < end; i++) {
        //resets color to aquamarine(initial) as we enter the function 
        document.querySelector('#drawing_area div:nth-of-type(' + (i + 1) + ')').style.backgroundColor = "aquamarine";
    }

    let mid = Math.floor((start + end) / 2);

    //gives red color to left break down calls
    await recursiveDelay();
    for (let i = start; i < mid; i++) {
        document.querySelector('#drawing_area div:nth-of-type(' + (i + 1) + ')').style.backgroundColor = "red";
    }
    //left call/ pre-calls;
    await rec_merge_sort(listarg, start, mid);

    //gives orange color to right break down calls in post area
    if(value){
    await recursiveDelay();
    for (let i = mid; i < end; i++) {
        document.querySelector('#drawing_area div:nth-of-type(' + (i + 1) + ')').style.backgroundColor = "orange";
    }}
    //right call/in-area
    await rec_merge_sort(listarg, mid, end);

    //gives blue color to left+right breakdown on which merge helper will be called;
    await recursiveDelay();
    for (let i = start; i < end; i++) {
        document.querySelector('#drawing_area div:nth-of-type(' + (i + 1) + ')').style.backgroundColor = "blue";
    }
    if (value) {
        await merge(list, start, mid, end);
    }
    else {
        for (let i = start; i < end; i++) {
            document.querySelector('#drawing_area div:nth-of-type(' + (i + 1) + ')').style.backgroundColor = "aquamarine";
        }
        
        document.getElementById("selection_sort_btn").onclick = selection_sort;
        document.getElementById("bubble_sort_btn").onclick = bubble_sort;
        document.getElementById("merge_sort_btn").onclick = merge_sort;
        return;
    }
}
async function merge(list, start, mid, end) {
    let i = start;
    let j = mid;
    let k = 0;
    let mix = [];
    //0 - left + right.length
    //gives yellow color to bars being merged
    await myDelay();
    for (let i = start; i < end; i++) {
        document.querySelector('#drawing_area div:nth-of-type(' + (i + 1) + ')').style.backgroundColor = "yellow";
    }
    //merges broken arrays as per algorithm
    await myDelay();
    while (i < mid && j < end) {
        //gets kth element in inplace array from where merged array will be placed in order to place bars on the way
        let elemk = document.querySelector('#drawing_area div:nth-of-type(' + (start + k + 1) + ')');

        if (list[i] < list[j]) {
            //adds smaller bar to start+kth position 
            await myDelay();
            elemk.style.height = (list[i] / height) * 3000 + "px";
            elemk.innerText = list[i] + "";
            mix[k++] = list[i++];
        } else {
            //adds smaller bar to start+kth position
            await myDelay();
            elemk.style.height = (list[j] / height) * 3000 + "px";
            elemk.innerText = list[j] + "";
            mix[k++] = list[j++];
        }
    }

    while (i < mid) {
        let elemk = document.querySelector('#drawing_area div:nth-of-type(' + (start + k + 1) + ')');
        await myDelay();
        elemk.style.height = (list[i] / height) * 3000 + "px";
        elemk.innerText = list[i] + "";
        mix[k++] = list[i++];
    }
    while (j < end) {
        let elemk = document.querySelector('#drawing_area div:nth-of-type(' + (start + k + 1) + ')');
        await myDelay();
        elemk.style.height = (list[j] / height) * 3000 + "px";
        elemk.innerText = list[j] + "";
        mix[k++] = list[j++];
    }
    for (let i = 0; i < mix.length; i++) {
        //non-visual part places mixed merged array from start+ith position for later use;
        list[start + i] = mix[i];
    }
    //resets color to aquamarine 
    await myDelay();
    for (let i = 0; i < list.length; i++) {
        document.querySelector('#drawing_area div:nth-of-type(' + (i + 1) + ')').style.backgroundColor = "aquamarine";
    }
}
//helper functions to give delays 
function myDelay() {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {
                    resolve();
                }, 100
            );
        }
    );
}
function recursiveDelay() {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {
                    resolve();
                }, 200
            );
        }
    );
}


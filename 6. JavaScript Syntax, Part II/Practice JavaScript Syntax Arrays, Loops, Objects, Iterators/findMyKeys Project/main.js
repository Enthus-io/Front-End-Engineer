// Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'.
// If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

// const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
// findMyKeys(drawer);
// // Should return -1
// You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it.

// Write your code here:

function findMyKeys(arr) {
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'keys') {
            index = i;
            break;
        }
    }

    return index;
}






// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4

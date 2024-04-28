    // problem 1

function maxtotalproduct (arr, n)
{
    let result = arr[0];
    for (let i=0; i < n ; i++)
    {
        let nul = arr[i];
        for (let j = i + 1 ; j < n; j++)
        {
            result = Math.max(result, nul);
            nul *=arr[j];
        }
        result = Math.max(result,nul);
    }
    return result;
}
 let arr = [2,3,-2,4];
 let n= arr.length;
 console.log("maxium product is"
+ maxtotalproduct(arr, n));

// Problem 2 
function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const total = target - nums[i];
        if (numMap.hasOwnProperty(total)) {
            return [numMap[total], i];
        }
        numMap[nums[i]] = i;
    }
    
    return []; 
}
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); 




//problem 3



function reverseWords(input) {
    let words = input.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    
    let reversedString = words.join(" ");
    
    return reversedString;
}

let inputString = prompt("Enter:");
let reversed = reverseWords(inputString);

alert("Reversed : " + reversed);




//problem 4 
var library = [
    {title: "The Road Ahead", 
    author: "bill gates",
     readingStatus: true},
    {title: "walter isaacson",
     author: "steve jobs",
      readingStatus: true},
    {title: "Mockingjay: The final book of the hanger games",
     author: "George Orwell",
      readingStatus: false}
];

function displayReadingStatus(books) {
    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        var status = book.readingStatus ? "already read" : "not read yet";
        console.log("Book: " + book.title + " by " + book.author + " - " + status);
    }
}

displayReadingStatus(library);

 



// problem 5 
function amountToCoins(amount, coins) {
    let result = [];
    let i = 0;
    while (amount > 0 && i < coins.length) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
        i++;
    }
    return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1])); 

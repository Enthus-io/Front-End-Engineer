// Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method,
// returns that array with the years sorted in descending order.

// Write your code here:

const sortYears = (years) => {
    return years.sort((yr1, yr2) => {
        return yr2 - yr1;
    });
}





// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]


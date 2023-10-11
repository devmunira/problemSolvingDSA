// Print integers one-to-N, but print “Fizz” if an integer is divisible by three, 
// “Buzz” if an integer is divisible by five, 
// and “FizzBuzz” if an integer is divisible by both three and five.


// Time Complexity Big O(n)
const fizzBuzz = (length) => {
    if(typeof length !== 'number') return false;
    for (let i = 1; i <= length; i++) {
       if( i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz')
       else
        if( i % 5 === 0) console.log('Buzz')
        else if( i % 3 === 0) console.log('Fizz')
        else console.log(i)
    }
}





module.exports = {
    fizzBuzz
}

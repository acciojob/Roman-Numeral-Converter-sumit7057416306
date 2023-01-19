function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  const SYMBOLS = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    36:"XXXVI",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
};

    let roman = "";
    let keys = Object.keys(SYMBOLS).reverse();
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        while (num >= key) {
            roman += SYMBOLS[key];
            num -= key;
        }
    }
    return roman;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

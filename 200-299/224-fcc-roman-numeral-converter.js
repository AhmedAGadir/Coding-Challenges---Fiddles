// https://www.math.nmsu.edu/~pmorandi/math111f01/RomanNumerals.html

  
  // *************************************************
  // ******* UPDATED SOLUTION: MARCH 2021 ************
  // *************************************************

const convertToRoman = (function() {

    const romanNumeralMap = {
      0: '',
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
      10: 'X',
      20: 'XX',
      30: 'XXX',
      40: 'XL',
      50: 'L',
      60: 'LX',
      70: 'LXX',
      80: 'LXXX',
      90: 'XC',
      100: 'C',
      200: 'CC',
      300: 'CCC',
      400: 'CD',
      500: 'D',
      600: 'DC',
      700: 'DCC',
      800: 'DCCC',
      900: 'CM',
      1000: 'M',
      2000: 'MM',
      3000: 'MMM',
      4000: 'MMMM',
      5000: 'MMMMM'
    };
  
    const splitNumberIntoUnits = num => {
      let numArr = num.toString().split('');
      let result = [];
  
      let multiplier = 1;
      for (let i = numArr.length - 1; i >= 0; i--) {
        let x = multiplier * Number(numArr[i]);
        multiplier *= 10;
  
        result.unshift(x);
      }
      return result;
    }
  
  
    return (num) => splitNumberIntoUnits(num)
      .map(num => romanNumeralMap[num])
      .join('');
  })();
  
  
  
  
  console.log(convertToRoman(2)) // should return "II".
  console.log(convertToRoman(3)) // should return "III".
  console.log(convertToRoman(4)) // should return "IV".
  console.log(convertToRoman(5)) // should return "V".
  console.log(convertToRoman(9)) // should return "IX".
  console.log(convertToRoman(12)) // should return "XII".
  console.log(convertToRoman(16)) // should return "XVI".
  console.log(convertToRoman(29)) // should return "XXIX".
  console.log(convertToRoman(44)) // should return "XLIV".
  console.log(convertToRoman(45)) // should return "XLV"
  console.log(convertToRoman(68)) // should return "LXVIII"
  console.log(convertToRoman(83)) // should return "LXXXIII"
  console.log(convertToRoman(97)) // should return "XCVII"
  console.log(convertToRoman(99)) // should return "XCIX"
  console.log(convertToRoman(400)) // should return "CD"
  console.log(convertToRoman(500)) // should return "D"
  console.log(convertToRoman(501)) // should return "DI" 
  console.log(convertToRoman(649)) // should return "DCXLIX" 
  console.log(convertToRoman(798)) // should return "DCCXCVIII" 
  console.log(convertToRoman(891)) // should return "DCCCXCI" 
  console.log(convertToRoman(1000)) // should return "M" 
  console.log(convertToRoman(1004)) // should return "MIV" 
  console.log(convertToRoman(1006)) // should return "MVI" 
  console.log(convertToRoman(1023)) // should return "MXXIII" 
  console.log(convertToRoman(2014)) // should return "MMXIV" 
  console.log(convertToRoman(3999)) // should return "MMMCMXCIX"
  
  
  // *************************************************
  // ******* OLD UNREADABLE SOLUTION: JULY 2018 ******
  // *************************************************

  /* const NUM_LETTERS = [['I', 'V'], ['X', 'L'], ['C', 'D'], 'M'];
  
  function splitNum(num) {
      let digits = num.toString().split('');
      let arr = [];
      let n = 0;
      for (let i = digits.length - 1; i >= 0 ; i--) {
          arr.push((digits[i] * Math.pow(10, n)).toString())
          n++;
      }
      return arr
  }
  
  function convertToRoman(num) {
      let arr = splitNum(num);
      let result = [];
      let x;
      for (let i = 0; i < arr.length; i++) {
          x = '';
          if (arr[i] == 0) continue;
          if (arr[i][0] == 9) {
              x = NUM_LETTERS[i][0] + NUM_LETTERS[i+1][0];
              result.unshift(x);
              continue;
          } else if (arr[i][0] == 4) {
              x = NUM_LETTERS[i][0] + NUM_LETTERS[i][1];
              result.unshift(x);
              continue;
          } 
          if (arr[i][0] >= 5) {
              x += NUM_LETTERS[i][1];
              arr[i] -= 5 * Math.pow(10, i);
          }
          for (let j = 0; j < (arr[i]).toString()[0]; j++) {
              x += NUM_LETTERS[i][0]
          }
          result.unshift(x);
      }
      return result.join('');
  }
  
  console.log(convertToRoman(2)) // should return "II".
  console.log(convertToRoman(3)) // should return "III".
  console.log(convertToRoman(4)) // should return "IV".
  console.log(convertToRoman(5)) // should return "V".
  console.log(convertToRoman(9)) // should return "IX".
  console.log(convertToRoman(12)) // should return "XII".
  console.log(convertToRoman(16)) // should return "XVI".
  console.log(convertToRoman(29)) // should return "XXIX".
  console.log(convertToRoman(44)) // should return "XLIV".
  console.log(convertToRoman(45)) // should return "XLV"
  console.log(convertToRoman(68)) // should return "LXVIII"
  console.log(convertToRoman(83)) // should return "LXXXIII"
  console.log(convertToRoman(97)) // should return "XCVII"
  console.log(convertToRoman(99)) // should return "XCIX"
  console.log(convertToRoman(400)) // should return "CD"
  console.log(convertToRoman(500)) // should return "D"
  console.log(convertToRoman(501)) // should return "DI" 
  console.log(convertToRoman(649)) // should return "DCXLIX" 
  console.log(convertToRoman(798)) // should return "DCCXCVIII" 
  console.log(convertToRoman(891)) // should return "DCCCXCI" 
  console.log(convertToRoman(1000)) // should return "M" 
  console.log(convertToRoman(1004)) // should return "MIV" 
  console.log(convertToRoman(1006)) // should return "MVI" 
  console.log(convertToRoman(1023)) // should return "MXXIII" 
  console.log(convertToRoman(2014)) // should return "MMXIV" 
  console.log(convertToRoman(3999)) // should return "MMMCMXCIX"
   */
  
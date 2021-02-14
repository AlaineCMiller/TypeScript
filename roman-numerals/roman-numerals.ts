function toRoman(num) {
    return 'I'
      .repeat(num)
      .replace(/IIIII/g, 'V')
      .replace(/VV/g, 'X')
      .replace(/XXXXX/g, 'L')
      .replace(/LL/g, 'C')
      .replace(/CCCCC/g, 'D')
      .replace(/DD/g, 'M')
      .replace(/VIIII/g, 'IX')
      .replace(/LXXXX/g, 'XC')
      .replace(/XXXX/g, 'XL')
      .replace(/DCCCC/g, 'CM')
      .replace(/CCCC/g, 'CD')
      .replace(/IIII/g, 'IV');
  }
   
  console.log(toRoman(1));
  console.log(toRoman(2));
  console.log(toRoman(3));
  console.log(toRoman(4));
  console.log(toRoman(5));
  console.log(toRoman(9));
  console.log(toRoman(21));
  console.log(toRoman(50));
  console.log(toRoman(100));
  console.log(toRoman(500));
  console.log(toRoman(1000));
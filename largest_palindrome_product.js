/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var palindromeArray = {};
  var product;

  // do your work here
  if (digits === 2) {
    for (factor_0 = 1; factor_0 <= 99; factor_0++) {
      for(factor_1 = 1; factor_1 <= 99; factor_1++) {
        product = factor_0 * factor_1;
        var productToString = product.toString();
        var reversedString = productToString.split('').reverse().join('');
        if (productToString === reversedString) {
          palindromeArray = {
            factor_0 : factor_0,
            factor_1 : factor_1,
            palindromeNumber : product
          };
        }
      }
    }
    return palindromeArray;
  } else if (digits === 3) {
    for (factor_0 = 900; factor_0 <= 999; factor_0++) {
      for(factor_1 = 900; factor_1 <= 999; factor_1++) {
        product = factor_0 * factor_1;
        var productToString = product.toString();
        var reversedString = productToString.split('').reverse().join('');
        if (productToString === reversedString) {
          palindromeArray = {
            factor_0 : factor_0,
            factor_1 : factor_1,
            palindromeNumber : product
          }
        }
      }
    }
    return palindromeArray;
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};
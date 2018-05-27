// Write a JavaScript function to check whether a given value is US zip code or not

function is_usZipCode(str)
{
 regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_usZipCode("03201-2150"));

console.log(is_usZipCode("7892"));

// Write a JavaScript function to check whether a given value is Canada Post Code or not.

function is_caPostalCode(str)
{
 regexp = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_caPostalCode("K8V3Y1"));

console.log(is_caPostalCode("K8V 3Y1"));

console.log(is_caPostalCode("Z4V4X1"));

// Write a JavaScript function to check whether a given value is UK Post Code or not.

function is_ukPostCode(str)
{
 regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_ukPostCode("B294HJ"));

console.log(is_ukPostCode("7892"));
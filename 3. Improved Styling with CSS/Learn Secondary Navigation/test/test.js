console.log = function() {};

const fs = require('fs');
const code = fs.readFileSync('breadcrumb.css', 'utf8');
const assert = require('chai').assert;


  // step 1: CSS regex 
let CSS_RegEx1 = /\.attribute\s*>?\s*a\s*{[^}]*color\s*:\s*gray\s*[^}]*}/ // put your css selectors here

let found1 = CSS_RegEx1.test(code);

describe('', function () {
  it('', function () {
    assert.strictEqual(found1, true, 'The `attribute a` selector should contain a color property set to gray.')
  })
})
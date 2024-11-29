'use strict';
let words = document.getElementsByTagName ('p')[0];
const worldEnd = confirm('The world is ending');
if (worldEnd) {
  words.innerHTML = 'is nigh!'
}
else{
  words.innerHTML = 'is not coming.';
}
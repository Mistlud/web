// b2

// indexof


let str1 = 'loigje jghgo, woeeic g weiet tet et, wewe.';
str1 = str1.replace(',', '')
const arr = str1.split(' ');
let result = arr.filter(num => num.length >= 6);
console.log(result.join(', '));
str2 = str1.replace(',', '').split(' ').filter(num => num.length >= 6).join(', ');
console.log(str2);


let lo = str1.indexOf('et');
result = str1.indexOf('et', lo);
console.clear();

console.log(result);

let beer = 'Ten green bottles hanging on the wall, Ten green bottles hanging on the wall, And if one green bottle should accidentally fall, Therell be nine green bottles hanging on the wall.'

console.log(beer.indexOf('bottles'))
console.log(beer.toUpperCase().toLowerCase());
console.log(beer.includes('beer'));
console.log(beer.indexOf('bottles') == beer.search('bottles'))
console.log(beer.search(/bottle/igm))
console.log(beer.match('bottle'))

console.log('hello'.concat(' world'));

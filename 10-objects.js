// 1
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};
console.log(student.courses);
console.log(student.locker); // undefined

// 2
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet (name) {  // ES6 method syntax – no : or fn keyword
    console.log(`Hej, ${name}!`);
  }
};
console.log(jane.location.country);

// 4
// jane.greet = name => console.log('Hej, ' + name + '!');
jane.greet('Bobby');

// 3
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};
fido.age = 10;
fido['favorite food'] = 'falafel';
console.log(fido.age, fido['favorite food']);

// 5
let ocean = {};
let prefix = 'Indian';
ocean.prefix = 'Pacific'; // creating a k/v pair with 'prefix'
console.log(ocean); // {prefix: 'Pacific'}

let ocean2 = {};
let prefix2 = 'Indian';
ocean2[prefix2] = 'Pacific'; // creating a k/v pair with a variable, prefix2
console.log(ocean2); // {Indian: 'Pacific'}

let ocean3 = {};
let prefix3 = 'Indian';
ocean3['prefix3'] = 'Pacific'; // creating a k/v pair with 'prefix3'
console.log(ocean3); // {prefix3: 'Pacific'} – same as dot notation example

// 7
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
}
let vk = Object.keys(vehicle);
console.log(vk);

// 8
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let ans1 = Object.entries(person);
console.log('ans1: ' + ans1);

let ans2 = [];
for (k in person) {
  ans2.push([k, person[k]]);
}
console.log('ans2: ' + JSON.stringify(ans2));

// 9
let nest = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let result = nest.reduce(function(acc, el) {
  acc[el[0]] = el[1];
  return acc;
}, {});
console.log(`reduced to: ${JSON.stringify(result)}`);

// 10
function clone(obj) {
  return Object.assign({}, obj); // target, source
}
let cloned = clone(person); // see #8
person.age = 34;
console.log(`person age: ${person.age}, cloned age: ${cloned.age}`); // 34, 33

/*
Object.assign(obj) creates a 2nd obj referencing the same place in memory:
obj === obj2 // true
Why? Because .assign returns the target obj, in this case obj

Object.assign({}, obj) opens another slot:
obj === obj3 // false
A shallow copy only copies KEYS, not values ("nested" k/v pairs)
*/

const findTheOldest = function(peeps) {
  let ages = [];
  let thisYear = new Date().getFullYear()

  for (let i = 0; i < peeps.length; i++) {
    if (!('yearOfDeath' in peeps[i])) {
      ages.push(thisYear - peeps[i]["yearOfBirth"]);
    } else {
      ages.push(peeps[i]["yearOfDeath"] - peeps[i]["yearOfBirth"]);
    }
  }

  let largest = 0;
  for (let i =0; i < ages.length; i++) {
    if (ages[i] > largest) {
      largest = ages[i];
    }
  }
  let index = ages.indexOf(largest);
  return peeps[index];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;

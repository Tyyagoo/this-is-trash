var json = {
  name: {
    first: "Yosuke",
    family: process.argv[2],
  },
  birth: {
    year: 1982,
    month: 12,
    day: process.argv[3],
  },
};

// Your code here.
const { family: familyName } = json.name;
const { day: birthDay } = json.birth;

console.log(familyName);
console.log(birthDay);

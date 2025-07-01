let obj = {
  name: "Prakash",
  age: 111,
  hairColor: "black",
  likes: "food"
};

function invertObject(original) {
  const inverted = {};
  for (let key in original) {
    const value = original[key];
    inverted[value] = key;
  }
  return inverted;
}

const result = invertObject(obj);
console.log(result);
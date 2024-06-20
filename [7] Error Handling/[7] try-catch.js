function accessProperty(obj, property) {
  try {
    return obj[property];
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(`Error: ${error.message}`);
      return null;
    } else {
      throw error;
    }
  }
}
const person = { name: 'John', age: 30 };

const value1 = accessProperty(person, 'name');
console.log(value1); // Вывод: John

const value2 = accessProperty(person, 'address');
console.log(value2); // Вывод: null (так как свойство 'address' не существует)

const value3 = accessProperty(null, 'name');
console.log(value3); // Вывод: Error: Cannot read property 'name' of null

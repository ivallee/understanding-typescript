// objects in TS

const ADMIN = 0;
const READ_ONLY = 1;

enum Permission { ADMIN, READ_ONLY }; // defines numbered constants!

const person = { // types are inferred
  name: 'Isaac',
  age: 30,
  hobbies: ['Camping', 'Climbing'],
  role: ['Web Developer', 3], // Inferred mixed type would be too broad
  permissionLevel: ADMIN, // involves maintaining global constants
};

const person2: { // types are explicit
  name: string;
  age: number;
  hobbies: string[];
  role: [string, number]; // core type Tuple: predefined types and length
  permissionLevel: Permission;
} = {
  name: 'Viv',
  age: 33,
  hobbies: ['Cross stitching'],
  role: ['Library events leader', 13],
  permissionLevel: Permission.READ_ONLY, // More maintainable than global constants
};

person.role[1] = '3' // can reassign type :(
// person2.role[1] = '14'; // fails thanks to tuple type

person.hobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase()); // works since hobbies are typed to string[] and will always be a string
  // console.log(hobby.parseFloat()); // will throw error as parseFloat is not a string method
});

// console.log(person.hungry); // Can't access an undefined property

[person, person2].forEach(p => {
  if (p.permissionLevel === Permission.ADMIN) {
    console.log(`${p.name} is an Admin`);
  }
});
const fullname = "Hero Boom";

const getFirstName = (str) => {
    return str.split(" ")[0];
}

const getFirstNameShort = (str) => str.split(" ")[0];

console.log("regular arrow func:", getFirstName(fullname));
console.log("short arrow func:", getFirstNameShort(fullname));
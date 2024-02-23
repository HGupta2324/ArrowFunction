const removeSpaces = (str) => {
    return str.replace(/\s/g, '');
};

const stringWithSpaces = "This is a string with spaces";

const stringWithoutSpaces = removeSpaces(stringWithSpaces);
console.log(stringWithoutSpaces); 

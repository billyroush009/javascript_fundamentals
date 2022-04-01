export const capitalizeString = str => str.toUpperCase()

const capitalizeString2 = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString2 };

//exporting variables
export const foo = "bar";
export const bar = "foo";
//importing and export functions

// importing 'capitalizeString' func from external file
//requires "type": "module", in package.json
import { capitalizeString } from "./import_export/string_function.js" //requires .js extension for me

const cap = capitalizeString("hello!"); //function call from string_function.js file

console.log(cap);

//importing one variable
import { foo } from "./import_export/string_function.js";
console.log(foo);

//bulk import, uses plural name to differentiate
import * as capitalizeStrings from "./import_export/capitalize_strings.js";
const caps = capitalizeStrings.capitalizeStrings("goodbye!");
console.log(caps);

//create an export fallback with export default
//default import
import subtract from "./import_export/fallback_export.js"; //no {} req for default export
const subtract_example = subtract(3, 1); // 3 - 1, from external file
console.log(subtract_example);
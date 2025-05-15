// padEnd method pad the current string with another string at the end
//padEnd() take two parameters
//(targetlength,padstring)
//target length means kitni length honi chahiye
//padString applied from the end


const language="javascript"
const anotherlanguage=language.padEnd(13,"#")
console.log(anotherlanguage)


/*
const str = "Hi";
const result = str.padEnd(5, ".");

question:
Is code mein padEnd(5, ".") ka kya kaam hai?
*/

/* output:
const word="hi";
const moreword=word.padEnd(5,".")
console.log(moreword)
*/

// -------------------------------------------------------------------

/*
const code = "1";
const paddedCode = code.padEnd(4, "0");

question:
Agar code sirf "1" hai, toh padEnd(4, "0") kya karega?
*/

const coding="1";
const anothercoding=coding.padEnd(3,"0")
console.log(anothercoding);
///////////////////////////
const myArray = ["anonystick", "medium", "reddit"]

const [firstName, ...restElements] = myArray;

console.log(firstName); // anonystick
console.log(restElements); // ["medium", "reddit"]
///////////////////////////

///////////////////////////
const blog = {
    blog1: "anonystick",
    blog2: "medium",
    blog3: "reddit"
}

const { blog1, ...restBlog } = blog;

console.log(blog1); // "anonystick"
console.log(restBlog); // { blog2: "medium", blog3: "reddit" }
///////////////////////////

///////////////////////////
function func(firstBlog, ...rest) {

    console.log(firstBlog); // 'anonystick'
    console.log(rest); //["medium", "reddit"]
}

func("anonystick", "medium", "reddit");
///////////////////////////

///////////////////////////
const withoutAnonystick = ["medium", "Reddit"];

const wholeBlog = ["Anonystick", ...withoutAnonystick]; //["Anonystick", "medium", "Reddit"]
///////////////////////////

///////////////////////////
const blogb = {
    blog1: "web.dev",
    blog2: "medium",
    blog3: "reddit"
}

const extended = {
    ...blogb,
    blog1: "anonystick",
};

console.log(extended);
/* {
 blog1: "anonystick",
 blog2: "medium",
 blog3: "reddit"
} */
///////////////////////////
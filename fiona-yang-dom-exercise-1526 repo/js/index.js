
//Task 1
console.info('============ Task 1 ============ ')
//Access HTML element with id tag-line.
let tagLine = document.getElementById('tag-line');
console.log(tagLine);

//Access all headings that belong to div with the class name bg-main-content.
let headings = document.querySelectorAll('.bg-main-content h2');
console.log(headings);

//Create the variable collect and assign it with content of tag-line.
let collect = `
${tagLine.innerText}
--------------------
`;
//Loop through the node list of headings and append the content of each heading to variable collect
for (let i = 0; i < headings.length; i++) {
	// append the textual content of each heading here
	// also need to use \n 
    collect += `${headings[i].innerText}\n`;
}

console.log(collect);

//After the loop, use alert to print collect
alert(collect);


// Task 2
console.info('============ Task 2 ============ ')
//Access all headings that belong to div with the class name bg-main-content.
let box = document.querySelectorAll('.bg-main-content div.box');

//console.info(box);
var div13;
for (let i = 0; i < box.length; i++) {
    if (i == 12) {
        div13 = box[i].querySelectorAll('h2,p');
    }
}

var task2Output = "";
for (let i=0;i<div13.length;i++) {
    task2Output += `${div13[i].innerText}\n\n`;
}

console.log(task2Output);
alert(task2Output);

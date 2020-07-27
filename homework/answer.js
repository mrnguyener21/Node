import * as fs from 'fs';

// Use inquierer to ask questions in the terminal

// Use the Inquirerer module to ask a user questions through console and
//  then put his answers in a new file called README.md. 

// Questions should be:
// title:
// description:
// technologies:
// collaborators:
// open-source:

// Once the users runs the app and answers the questions: for example:

// title: project
// description: random desc
// technologies: 123
// collaborators: no-one
// open-source: yes

// a new file named readme.md should be created and its contents should be as follows

// project
// random desc
// 123
// no-one
// yes

fs.readFile('questions.js', (err, data) => {
    console.log(data);
});




fs.writeFile('README.md',
`
    project
    random desc
    123
    no-one
    yes
`, (err) => {
    if (err) {
        console.log('error')
    }
})

import * as fs from 'fs';

fs.readFile('questions.js', (err, data) => {
    console.log(data);
})


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

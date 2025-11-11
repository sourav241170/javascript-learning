// for in loop


const myObject={
    js: 'javascript',
    cpp: 'C++',
    py: 'Python',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`Shortcut ${key} is ${myObject[key]}`);
    
}

const map= new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('UK', "United Kingdom")

for (const key in map) {
    console.log(key);
}

let namee="dev"
console.log(name)
console.log(name.length)
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])

// //template literal
let boy1="deven"
let boy2= "oxford"
let sentence=`${boy1} is friend of ${boy2}` 
console.log(sentence)

//escape sequence character

let animall="tiger\'s"
console.log(animal)

// //string manuplation
let nameee= 'Deven'
let f=''
// console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2, 4))
console.log(name.slice(1))
console.log(name.replace('D', 'a'))

let animal = '      tiger     '
console.log(animal.trim())
console.log(name.concat(' loves '+ animal))

for(let i=0;i<name.length;i++){
  f+=name[i]

}
console.log(f)

console.log('harry\''.length)

//includes in string

let w='my name is devendra bhattarai'
let word='nae is'
console.log(`the word "${word}" ${w.includes(word)? 'yes':'no'} in the senettrnce`)

//endsWith and startWith

let name='deven wrai'
console.log(name.startsWith('w'))
console.log(name.endsWith('ai'))

let str = 'give me 1000'
let amount = Number.parseInt(str.slice('give me '.length))
console.log(typeof amount)


let friend = 'deven'

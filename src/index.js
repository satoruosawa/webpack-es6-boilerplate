// arrow function
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
]

console.log('arrow function test:', materials.map(material => material.length))

// power exponent
console.log('power exponent test: 3 ** 3 =', 3 ** 3)

// async function
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => { resolve('resolved') }, 2000)
  })
}

async function asyncCall() {
  console.log('calling')
  const result = await resolveAfter2Seconds()
  console.log('async function test:', result)
}

asyncCall()

// class
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log('class test:', new Polygon(4, 3).area)

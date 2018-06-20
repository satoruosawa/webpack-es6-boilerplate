export function arrowFunction() {
  const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ]

  console.log(
    'arrow function test:',
    materials.map(material => material.length),
  )
}

export function powerExponent(value) {
  console.log(
    'power exponent test: ' + value + ' ** ' + value +' =',
    value ** value,
  )
}

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

export function asyncFunction() {
  asyncCall()
}

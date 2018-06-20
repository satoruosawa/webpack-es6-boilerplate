import sayHello from './hello'
import * as es6Functions from './Es6Functions'
import Polygon from './TestClass'

document.getElementById('root').innerHTML = sayHello()

es6Functions.arrowFunction()
es6Functions.powerExponent(3)
es6Functions.asyncFunction()
console.log('class test:', new Polygon(4, 3).area)

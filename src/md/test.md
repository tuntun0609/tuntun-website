# for in 和 for of 的区别

1、for...in循环：只能获得对象的键名，不能获得键值

   for...of 循环：允许遍历获得键值

```javascript
var arr = ['red', 'green', 'blue']
 
for(let item in arr) {
  console.log('for in item', item)
}
/*
  for in item 0
  for in item 1
  for in item 2
*/
 
for(let item of arr) {
  console.log('for of item', item)
}
/*
  for of item red
  for of item green
  for of item blue
*/
```

2、对于普通对象，没有部署原生的 iterator 接口，直接使用 for...of 会报错

```javascript
var obj = {
   'name': 'Jim Green',
   'age': 12
 }
 
 for(let key of obj) {
   console.log('for of obj', key)
 }
 // Uncaught TypeError: obj is not iterable
```

可以使用 for...in 循环遍历键名

```javascript
for(let key in obj) {
   console.log('for in key', key)
 }
 /*
   for in key name
   for in key age
 */
```

也可以使用 Object.keys(obj) 方法将对象的键名生成一个数组，然后遍历这个数组

```javascript
for(let key of Object.keys(obj)) {
   console.log('key', key)
 }
 /*
   key name
   key age
 */
```

3、for...in 循环不仅遍历数字键名，还会遍历手动添加的其它键，甚至包括原型链上的键。for...of 则不会这样

```javascript
let arr = [1, 2, 3]
arr.set = 'world'  // 手动添加的键
Array.prototype.name = 'hello'  // 原型链上的键
 
for(let item in arr) {
  console.log('item', item)
}
 
/*
  item 0
  item 1
  item 2
  item set
  item name
*/
 
for(let value of arr) {
  console.log('value', value)
}
 
/*
  value 1
  value 2
  value 3
*/
```

4、forEach 循环无法中途跳出，break 命令或 return 命令都不能奏效

```javascript
let arr = [1, 2, 3, 5, 9]
arr.forEach(item => {
  if(item % 2 === 0) {
    return
  }
  console.log('item', item)
})
/*
  item 1
  item 3
  item 5
  item 9
*/
```

for...of 循环可以与break、continue 和 return 配合使用，跳出循环

```javascript
for(let item of arr) {
   if(item % 2 === 0) {
     break
   }
   console.log('item', item)
 }
 // item 1
```

5、无论是 for...in 还是 for...of 都不能遍历出 Symbol 类型的值，遍历 Symbol 类型的值需要用 Object.getOwnPropertySymbols() 方法

```javascript
{
  let a = Symbol('a')
  let b = Symbol('b')

  let obj = {
    [a]: 'hello',
    [b]: 'world',
    c: 'es6',
    d: 'dom'
  }

  for(let key in obj) {
    console.info(key + ' --> ' + obj[key])
  }

  /*
    c --> es6
    d --> dom
  */

  let objSymbols = Object.getOwnPropertySymbols(obj)
  console.info(objSymbols)    //  [Symbol(a), Symbol(b)]
  objSymbols.forEach(item => {
    console.info(item.toString() + ' --> ' + obj[item])
  })

  /*
    Symbol(a) --> hello
    Symbol(b) --> world
  */

  // Reflect.ownKeys 方法可以返回所有类型的键名，包括常规键名和Symbol键名
  let keyArray = Reflect.ownKeys(obj)
  console.log(keyArray)      //  ["c", "d", Symbol(a), Symbol(b)]
}
```

总之，for...in 循环主要是为了遍历对象而生，不适用于遍历数组

for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象

function createXmasTree(height, ornament) {
  let tree = ''
  for (let i = 1; i <= height; i++) {
    tree += `${'_'.repeat(height - i)}${ornament.repeat(i * 2 - 1)}${'_'.repeat(height - i)}\n`
  }
  const trunk = `${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}`
  tree += `${trunk}\n${trunk}`
  return tree
}

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
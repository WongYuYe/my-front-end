### 快排

```js
// 分治法，1. 取基准值 2. 小于基准值的移到左边left，大于基准值的移到右边right 3. 对left和right两个子集不断重复第一二步
const quickSort = function (arr) {
  if (arr.length < 1) {
    return arr
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [], right = [];
  for(let i = 0, len = arr.length; i < len; i ++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
quickSort([1,4,2,3,8,6,5])
```

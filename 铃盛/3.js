function getUnUsedKeys(allKeys, usedKeys) {
  if (Array.isArray(allKeys) && Array.isArray(usedKeys)) {
    return allKeys.reduce((res, item) => {
      if (!usedKeys.includes(item)) {
        res.push(item)
      }
      return res
    }, [])
  } else {
    console.warn('The first parameter and the second parameter should be an Array')
  }
}

console.log(getUnUsedKeys([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 4]))
/**
  extensions is an Array and each item has such format:
  {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
**/

/**
  Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
**/
function sortExtensionsByName(extensions) {
  if (!Array.isArray(extensions)) {
    return console.error('The first parameter and the second parameter should be an Array')
  }
  let len = extensions.length;
  if (len < 2) return extensions;
  let middle = Math.floor(len / 2);
  let left = extensions.slice(0, middle);
  let right = extensions.slice(middle);
  const merge = (left, right) => {
    let result = []
    while(left.length > 0 && right.length > 0) {
      if (compare(left[0], right[0]) <= 0) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    while(left.length > 0) {
      result.push(left.shift())
    }
    while(right.length > 0) {
      result.push(right.shift())
    }
    return result
  }
  const compare = (x, y) => {
    const { firstName: f1, lastName: l1, ext: e1 } = x
    const { firstName: f2, lastName: l2, ext: e2 } = y
    return f1.localeCompare(f2) || l1.localeCompare(l2) || e1.localeCompare(e2)
  }
  return merge(sortExtensionsByName(left), sortExtensionsByName(right))
}

// or

function sortExtensionsByName(extensions) {
  if (!Array.isArray(extensions)) {
    return console.error('The first parameter and the second parameter should be an Array')
  }
  const sort = (arr, l, r) => {
     if (l >= r) return;

     let p = partition(arr, l, r)
     sort(arr, l, p - 1);
     sort(arr, p+1, r)
  }

  const partition = (arr, l, r) => {
    let j = l;
    for (let i = l+1; i <= r; i++) {
      if (compare(arr[i], arr[l]) <= 0) {
        j++;
        swap(arr, i, j)
      }
    }
    swap(arr, l, j);
    return j;
  }

  const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
  }

  const compare = (x, y) => {
    const { firstName: f1, lastName: l1, ext: e1 } = x
    const { firstName: f2, lastName: l2, ext: e2 } = y
    return f1.localeCompare(f2) || l1.localeCompare(l2) || e1.localeCompare(e2)
  }

  sort(extensions, 0, extensions.length - 1)

}


/**
  Question 2: sort extensions by extType follow these orders ASC
  DigitalUser < VitrualUser < FaxUser < AO < Dept.
**/
function sortExtensionsByExtType(extensions) {
  if (!Array.isArray(extensions)) {
    return console.error('The first parameter and the second parameter should be an Array')
  }
  let len = extensions.length;
  if (len < 2) return extensions;
  const EXT_TYPE_WEIGHTS = {
    DigitalUser: 0,
    VitrualUser : 1,
    FaxUser: 2,
    AO: 3,
    Dept: 4,
  }
  let middle = Math.floor(len / 2);
  let left = extensions.slice(0, middle);
  let right = extensions.slice(middle);
  const merge = (left, right) => {
    let result = []
    while(left.length > 0 && right.length > 0) {
      if (compare(left[0], right[0]) <= 0) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    while(left.length > 0) {
      result.push(left.shift())
    }
    while(right.length > 0) {
      result.push(right.shift())
    }
    return result
  }
  const compare = (x, y) => {
    const { extType: ex1} = x
    const { extType: ex2 } = y
    return EXT_TYPE_WEIGHTS[ex1] - EXT_TYPE_WEIGHTS[ex2]
  }
  return merge(sortExtensionsByName(left), sortExtensionsByName(right))
}


/**
  saleItems is an Array has each item has such format:
  {
  month: n, //[1-12],
  date: n, //[1-31],
  transationId: "xxx",
  salePrice: number
  }
**/

/**
  Question 3: write a function to calculate and return a list of total sales (sum) for each quarter, expected result like:
  [
    {quarter: 1, totalPrices: xxx, transactionNums: n},
    {....}
  ]
**/

function sumByQuarter(saleItems) {
  if (!Array.isArray(saleItems)) {
    return console.error('The first parameter and the second parameter should be an Array')
  }
  return saleItems.reduce((res, item) => {
    const quarter = Math.ceil(item.month / 3)
    if (!res[quarter-1]) {
      res[quarter-1] = { quarter, totalPrices: item.salePrice, transactionNums: 1 }
    } else {
      let { totalPrices, transactionNums } = res[quarter-1]
      res[quarter-1] = { quarter, totalPrices: totalPrices+item.salePrice, transactionNums: transactionNums + 1}
    }
    return res
  }, [])
}

/**
  Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
  [
    {quarter: 1, averagePrices: xxx, transactionNums: n},
    {....}
  ]
**/
function averageByQuarter(saleItems) {
  if (!Array.isArray(saleItems)) {
    return console.error('The first parameter and the second parameter should be an Array')
  }
  return saleItems.reduce((res, item) => {
    const quarter = Math.ceil(item.month / 3)
    if (!res[quarter-1]) {
      res[quarter-1] = { quarter, totalPrices: item.salePrice, transactionNums: 1 }
    } else {
      let { totalPrices, transactionNums } = res[quarter-1]
      res[quarter-1] = { quarter, totalPrices: totalPrices+item.salePrice, transactionNums: transactionNums + 1}
    }
    return res
  }, []).map(item => ({
    quarter: item.quarter,
    averagePrices: item.totalPrices / item.transactionNums,
    transactionNums: item.transactionNums
  }))
}

/**
  Question 5: please create a tool to generate Sequence
  Expected to be used like:
  var sequence1 = new Sequence();
  sequence1.next() --> return 1;
  sequence1.next() --> return 2;
  
  in another module:
  var sequence2 = new Sequence();
  sequence2.next() --> 3;
  sequence2.next() --> 4;
**/

function Sequence () {
  if (Sequence.instance) {
    return Sequence.instance
  }
  Sequence.instance = {
    num: 1,
    next: function () {
      return Sequence.instance.num++
    }
  }
  return Sequence.instance
}



/**
    Question 6:
    AllKeys: 0-9;
    usedKeys: an array to store all used keys like [2,3,4];
    We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]
**/

function getUnUsedKeys(allKeys, usedKeys) {
  if (Array.isArray(allKeys) && Array.isArray(usedKeys)) {
    return allKeys.reduce((res, item) => {
      if (!usedKeys.includes(item)) {
        res.push(item)
      }
      return res
    }, [])
  } else {
    console.error('The first parameter and the second parameter should be an Array')
  }
}

 

function averageByQuarter(saleItems) {
  if (!Array.isArray(saleItems)) {
    return console.error('The parameter should be an Array')
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



const test = [
  { month: 1, date: 2, transationId: 'asdf', salePrice: 11 },
  { month: 1, date: 3, transationId: 'asdf', salePrice: 21 },
  { month: 2, date: 2, transationId: 'asdf', salePrice: 31 },
  { month: 3, date: 2, transationId: 'asdf', salePrice: 41 },
  { month: 4, date: 2, transationId: 'asdf', salePrice: 11 },
  { month: 5, date: 2, transationId: 'asdf', salePrice: 1 },
  { month: 6, date: 2, transationId: 'asdf', salePrice: 5 },
  { month: 7, date: 2, transationId: 'asdf', salePrice: 33 },
  { month: 8, date: 2, transationId: 'asdf', salePrice: 1 },
  { month: 9, date: 2, transationId: 'asdf', salePrice: 12 },
  { month: 10, date: 2, transationId: 'asdf', salePrice: 14 },
]
var text1 = []
console.log(averageByQuarter(text1))
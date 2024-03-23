import { ApexOptions } from "apexcharts"

export function setCoinMarketData(coinPrice: number[]) {
  const price: number[] = []

  coinPrice.map((val, index) => {
    index % 2 !== 0 && price.push(val)
  })

  const data: ApexOptions['series'] = [{
    name: 'Preço',
    data: price,
    color: '#FF9B05',
  }]

  return data
}
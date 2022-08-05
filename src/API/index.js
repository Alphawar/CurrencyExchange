import axios from "axios";

const API_KEY = "r5CV8GBrxADvIEqFtQ2YAhLTSzQbHf6v"
const URL_LAST = `https://api.apilayer.com/exchangerates_data/latest?apikey=${API_KEY}`

export const getExchangeRates = async (setData, setTableData, setLoader) => {
    setLoader(true) 
    setTimeout( async () => {
        const response = await axios.get(`${URL_LAST}&base=UAH`)
        setData(response.data)
        const tableRespUSD = await axios.get(`${URL_LAST}&base=USD`)
        const tableRespEUR = await axios.get(URL_LAST)
        setTableData(tableRespUSD.data, tableRespEUR.data)
        setLoader(false)
    }, 2000)
}

export const getExactExchangeRate = async (firstCurrency, secondCurrency, setExchangeRate) => {
    const response = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?apikey=${API_KEY}&to=${secondCurrency}&from=${firstCurrency}&amount=1`)
    setExchangeRate(response.data.info.rate)
}
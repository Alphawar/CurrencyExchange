import React, { useState, useEffect } from 'react';
import './App.scss';
import CurrencyForm from './components/CurrencyForm/CurrencyForm';
import Layout from './components/Layout/Layout';
import Loader from './components/UI/Loader/Loader';
import { getExchangeRates } from './API/index';

function App() {

  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  const [table, setTable] = useState({
    USD: 0,
    EUR: 0,
    time: 0
  })

  const setTableData = (USD, EUR) => {
    setTable({
      ...table, 
      USD: USD.rates["UAH"].toFixed(2), 
      EUR: EUR.rates["UAH"].toFixed(2),
      time: EUR.date
    })
  }

  useEffect(() => {
    getExchangeRates(setData, setTableData, setLoader)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      {
        loader ? 
        <Loader /> : 
        <Layout table={table}>
          <CurrencyForm data={data} />
        </Layout>
      }
    </div>
  );
}

export default App;

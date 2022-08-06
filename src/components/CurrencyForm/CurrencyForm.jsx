import React, { useState, useEffect } from 'react';
import { getExactExchangeRate } from '../../API/index';
import CurrencyItem from '../CurrencyItem/CurrencyItem';
import classes from './CurrencyForm.module.scss';
import swap from '../../assets/images/swap.png';

const CurrencyForm = ({ data }) => {

    const [amount, setAmount] = useState(1)
    const [changeFromTo, setChangeFromTo] = useState(true)
    const [firstCurrency, setFirstCurrency] = useState(data.base)
    const [secondCurrency, setSecondCurrency] = useState(Object.keys(data.rates).filter( currency => currency === "EUR")[0])
    const [exchangeRate, setExchangeRate] = useState(data.rates["EUR"])
    const [animation, setAnimation] = useState(false)

    let amountFrom, amountTo
  
    if (changeFromTo) {
      amountFrom = amount
      amountTo = +(amount * exchangeRate).toFixed(2)
    } else { 
      amountTo = amount
      amountFrom = +(amount / exchangeRate).toFixed(2)
    }
  
    useEffect(() => {
      if(firstCurrency && secondCurrency) {
        getExactExchangeRate(firstCurrency, secondCurrency, setExchangeRate)
      }
    }, [firstCurrency, secondCurrency])
  
    const handleChangeFromAmount = e => {
      setAmount(e.target.value)
      setChangeFromTo(true)
    }
  
    const handleChangeToAmount = e => {
      setAmount(e.target.value)
      setChangeFromTo(false)
    }
  
    const toggleSwapCurrencies = () => {
      const first = firstCurrency
      const second = secondCurrency
      setFirstCurrency(second)
      setSecondCurrency(first)
      setAnimation(true)
      setTimeout(() => setAnimation(false), 1000)
    }

    return (
        <div className={classes.form}>
            <h2 className={classes.form__title}>Currency Exchange Application</h2>
            <p className={classes.form__desc}>Check the current rates of various currencies!</p>
            <div className={classes.form__items}>
                <CurrencyItem 
                    data={data}
                    selectedCurrency={firstCurrency}
                    handleChangeCurrency={e => setFirstCurrency(e.target.value)}
                    handleChangeAmount={handleChangeFromAmount}
                    amount={amountFrom}
                />
                <CurrencyItem
                    selectedCurrency={secondCurrency} 
                    data={data}
                    handleChangeCurrency={e => setSecondCurrency(e.target.value)}
                    handleChangeAmount={handleChangeToAmount}
                    amount={amountTo}
                />
            </div>
            <img className={animation ? `${classes.form__swap} ${classes.animate}` : `${classes.form__swap}`} src={swap} onClick={toggleSwapCurrencies} alt="swap" />
            <p className={classes.form__addit}>1 {firstCurrency} = {exchangeRate.toFixed(3)} {secondCurrency}</p>
        </div>
    );
};

export default CurrencyForm;
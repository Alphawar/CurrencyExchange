import React, { useMemo } from 'react';
import classes from './CurrencyItem.module.scss';

const CurrencyItem = ({ data, selectedCurrency, handleChangeCurrency, amount, handleChangeAmount }) => {

    const options = useMemo(() => Object.keys(data.rates), [data.rates])

    const inputValidation  = e => e.key === "-" && e.preventDefault();

    return (
        <div className={classes.item}>
                <input 
                    className={classes.item__input}
                    onKeyPress={inputValidation} 
                    type="number" 
                    value={amount} 
                    onChange={handleChangeAmount} 
                    min={0}
                />
                <select 
                    value={selectedCurrency} 
                    onChange={handleChangeCurrency}
                    className={classes.item__select}
                >
                    {options.map( (option, index) => (
                        <option value={option} key={index}>{option}</option>
                    ))}
                </select>
        </div>
    );
};

export default CurrencyItem;
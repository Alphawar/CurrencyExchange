import React, { useMemo } from 'react';
import classes from './Header.module.scss';
import logo from '../../assets/images/logo.svg';

const Header = ({ table }) => {
    
    const date = useMemo(() => new Date(table.time).toLocaleDateString(), [table])

    return (
        <div className={classes.header}>
            <div className={classes.header__title}>
                <img src={logo} alt="logo" />
                <h2>Currency Exchange</h2>
            </div>
            <div className={classes.header__table}>
                <h3>Exchange rate on {date}</h3>
                <p>1 USD = {table.USD} UAH</p>
                <p>1 EUR = {table.EUR} UAH</p>
            </div>
        </div>
    );
};

export default Header;
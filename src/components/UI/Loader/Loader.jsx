import React from 'react';
import classes from './Loader.module.scss';
import loader_hand from '../../../assets/images/loaderHand.png';
import loader_coin from '../../../assets/images/loaderCoin.png';

const Loader = () => {
    return (
        <div className={classes.container}>
            <div className={classes.loader}>
                <div className={classes.loader__image}>
                    <div className={classes.loader__coin}>
                        <img src={loader_coin} alt=""/>
                        </div>
                    <div className={classes.loader__hand}>
                        <img src={loader_hand} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
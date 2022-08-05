import React from 'react';
import classes from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={classes.container}>
            <div className={classes.loader}>
                <div className={classes.loader__image}>
                    <div className={classes.loader__coin}>
                        <img src="https://www.dropbox.com/s/fzc3fidyxqbqhnj/loader-coin.png?raw=1" alt=""/>
                        </div>
                    <div className={classes.loader__hand}>
                        <img src="https://www.dropbox.com/s/y8uqvjn811z6npu/loader-hand.png?raw=1" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
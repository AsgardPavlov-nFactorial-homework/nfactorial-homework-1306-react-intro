import React from 'react';
import {format} from 'date-fns'
import {ReactComponent as FacebookLogo} from '../../icons/facebook.svg';

import './Header.scss';

export default function Header() {
    const blockName = 'Header';

    const currentTime = format(new Date(), 'dd.mm.yyyy hh:mm');

    return(
        <header className={blockName}>
            <div className={`${blockName}__logo-container`}>
                <FacebookLogo />
                <div className={`${blockName}__skeleton`} />
            </div>
            <div className={`${blockName}__time-container`} >
                {currentTime}
            </div>
        </header>
    )
}

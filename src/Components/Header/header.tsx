import style from './header.module.css';
import { UserAvatr } from '../Shared/Svg/userAvatar';
import { ArrowDown } from '../Shared/Svg/arrowDown';
import { ArrowUp } from  '../Shared/Svg/arrowUp';
import { useState } from 'react';

export const Header = () => {
    const [arrowState, setArrowState] = useState(true);
    
    return (
        <header className={style.header}>
            <div className={style.positionLogoUserBar}>
                <h1 className={style.sizeLogo}>Awesome Kanban Board</h1>
                <div className={style.userIcon}>
                    <UserAvatr />
                    {arrowState ? <ArrowDown /> : <ArrowUp />}
                </div>
            </div>
        </header>
    )
}
import style from './column.module.css';
import { Card } from './Card/card';


export const Column = () => {

    return (
        <div className={style.column}>
            <Card />
        </div>
    )
}
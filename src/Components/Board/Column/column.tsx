import style from './column.module.css';
import { Card } from './Card/card';


export const Column = () => {

    return (
        <div className={style.column}>
            <div className={style.header}><h2></h2></div>
            <div className={style.wrapper}>
                <div className={style.body}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className={style.footer}>
                <button className={style.button}>+ Add card</button>
            </div>
        </div>
    )
}
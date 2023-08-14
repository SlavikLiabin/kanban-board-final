import style from './column.module.css';
import { Card } from './Card/card';
import { Istates } from '../../Types/types';


export const Column = ({ id, name, state }: Istates) => {

    return (
        <div className={style.column}> 
            <div className={style.header}><h2 className={style.title}>{name}</h2></div>
            <div className={style.wrapper + ' ' + style.scroll}>
                <div className={style.body}>
                    <Card />
                    <Card />
                    <Card />
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
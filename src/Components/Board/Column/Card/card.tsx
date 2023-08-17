import React, { MouseEvent } from 'react'; 
import style from './card.module.css';
import { SvgCross } from '../../../Shared/Svg/svgCross';
//import { ButtonCross } from '../../../Shared/Buttons/buttonCross';
import { Istates } from '../../../Types/types';
import { useGlobalContext } from '../../../Context/taskContext';


export const Card = ({ id, name, state }: Istates) => {

    const {removeTask} = useGlobalContext();

    return (
        <>
            <div className={style.card}>
                <div className={style.fillFieldTask}></div>
                <div className={style.crossButtonDispleyd}>
                    <button className={style.button} onClick={(e: MouseEvent<HTMLButtonElement>) => {removeTask(id)}}>
                        <SvgCross />
                    </button>
                </div>
            </div>
        </>
    )
}
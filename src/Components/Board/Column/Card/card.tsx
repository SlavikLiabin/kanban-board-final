import style from './card.module.css';
import { SvgCross } from '../../../Shared/Svg/svgCross';
import { ButtonCross } from '../../../Shared/Buttons/buttonCross';
import { Istates } from '../../../Types/types';


export const Card = ({ id, name, state }: Istates) => {

    return (
        <>
            <div className={style.card}>
                <div className={style.fillFieldTask}></div>
                <div className={style.crossButtonDispleyd}>
                    <ButtonCross>
                        <SvgCross />
                    </ButtonCross>
                </div>
            </div>
        </>
    )
}
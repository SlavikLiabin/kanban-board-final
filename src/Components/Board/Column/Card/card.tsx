import style from './card.module.css';
import { SvgCross } from '../../../Shared/Svg/svgCross';
import { ButtonCross } from '../../../Shared/Buttons/buttonCross';


export const Card = () => {

    return (
        <>
            <div className={style.card}>
                <div className={style.fillFieldTask}>card</div>
                <div className={style.crossButtonDispleyd}>
                    <ButtonCross>
                        <SvgCross />
                    </ButtonCross>
                </div>
            </div>
        </>
    )
}
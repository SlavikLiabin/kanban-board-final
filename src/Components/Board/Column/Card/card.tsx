import style from './card.module.css';
import { SvgCross } from '../../../Svg/svgCross';
import { ButtonСross } from '../../../Shared/Buttons/buttonСross';


export const Card = () => {

    return (
        <>
            <div className={style.card}>
                <div className={style.fill}>card</div>
                <div className={style.button}>
                    <ButtonСross>
                        <SvgCross />
                    </ButtonСross>
                </div>
            </div>
        </>
    )
}
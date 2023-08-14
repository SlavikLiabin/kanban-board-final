import style from './cardDetail.module.css'
import { SvgCross } from '../../Shared/Svg/svgCross';
import { ButtonCross } from '../../Shared/Buttons/buttonCross';


export const CardDetail = () => {

    return (
        <div className={style.containerDetail}>
            <div className={style.windowDetail}>
                <div className={style.wrapperTextArea}>
                    <textarea className={style.name}></textarea>
                    <textarea className={style.description}></textarea>
                    <button className={style.buttonSave}>Save Card</button>
                </div>
                <div className={style.cross}>
                    <ButtonCross>
                        <SvgCross />
                    </ButtonCross>
                </div>
            </div>
        </div>
    )
}
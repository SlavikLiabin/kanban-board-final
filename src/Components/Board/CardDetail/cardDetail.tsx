import style from './cardDetail.module.css'
import { SvgCross } from '../../Shared/Svg/svgCross';
import { ButtonСross } from '../../Shared/Buttons/buttonСross';


export const CardDetail = () => {

    return (
        <div className={style.containerDetail}>
            <div className={style.windowDetail}>
                <div className={style.wrapperTextArea}>
                    <textarea className={style.name}></textarea>
                    <textarea className={style.description}></textarea>
                </div>
                <div className={style.cross}>
                    <ButtonСross>
                        <SvgCross />
                    </ButtonСross>
                </div>
            </div>
        </div>
    )
}
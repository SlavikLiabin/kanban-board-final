import style from './cardDetail.module.css'
import { SvgCross } from '../../Shared/Svg/svgCross';
import { ButtonCross } from '../../Shared/Buttons/buttonCross';
import { useNavigate } from 'react-router-dom';


export const CardDetail = () => {
    const navigate = useNavigate();
    const navigateBack = () => navigate(-1);
    return (
        <div className={style.containerDetail}>
            <div className={style.windowDetail}>
                <div className={style.wrapperTextArea}>
                    <textarea className={style.name}></textarea>
                    <textarea className={style.description}></textarea>
                    <button className={style.buttonSave}>Save Card</button>
                </div>
                <div>
                    <button className={style.cross} onClick={navigateBack}>
                        <SvgCross />
                    </button>
                </div>
            </div>
        </div>
    )
}
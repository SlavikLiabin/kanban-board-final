import style from './cardDetail.module.css'
import { SvgCross } from '../../Shared/Svg/svgCross';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../../Context/taskContext';


export const CardDetail = () => {
    const navigate = useNavigate();
    const navigateBack = () => navigate(-1);

    const {getTaskById, updateTask} = useGlobalContext();
    const {cardId} = useParams();
    const [task, setTask] = useState<any>();
   
    useEffect(() => {
        if (cardId) {
            setTask(getTaskById(cardId))
        }
    }, [cardId])

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
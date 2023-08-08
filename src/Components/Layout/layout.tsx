import style from './layout.module.css';
import { childrenProps } from '../Types/types';


export const Layout = ({ children }: childrenProps) => {

    return (
        <div className={style.layout}>
            { children}
        </div>
    )
}
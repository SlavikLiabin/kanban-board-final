import style from './footer.module.css';


export const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className={style.areaInfo}>
                <div className={style.tasksCount}>
                    <div>Active tasks: 5</div>
                    <div>Finished tasks: 5</div>
                </div>
                <div>Kanban board by Andrei, 2023</div>
            </div>
        </footer>
    )
}
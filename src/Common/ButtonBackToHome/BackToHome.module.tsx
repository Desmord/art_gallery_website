import { useNavigate } from 'react-router'

import styles from './BackToHome.module.scss'

const BackToHome = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`, { replace: true })
    }

    return (
        <div className={styles.container} onClick={() => handleClick()}>
            <span>
                <img src="./assets/icon-arrow-left.svg" alt="Our Location" />
            </span>
            <span>BACK TO HOME</span>
        </div>
    )
}

export default BackToHome;
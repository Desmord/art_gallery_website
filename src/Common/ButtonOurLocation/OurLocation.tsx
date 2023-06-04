import { useNavigate } from 'react-router';

import styles from './OurLocation.module.scss'

const OurLocation = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/location`, { replace: true })
    }

    return (
        <div className={styles.container} onClick={() => handleClick()}>
            <span>OUR LOCATION</span>
            <span>
                <img src="./assets/icon-arrow-right.svg" alt="Our Location" />
            </span>
        </div>
    )
}

export default OurLocation;
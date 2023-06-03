import styles from './OurLocation.module.scss'

const OurLocation = () => {
    return (
        <div className={styles.container}>
            <span>OUR LOCATION</span>
            <span>
                <img src="./assets/icon-arrow-right.svg" alt="Our Location" />
            </span>
        </div>
    )
}

export default OurLocation;
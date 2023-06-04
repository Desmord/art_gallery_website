import Footer from '../../Components/Footer/Footer'
import BackToHome from '../../Common/ButtonBackToHome/BackToHome.module'

import styles from './Location.module.scss'

const Location = () => {
    return (
        <section className={styles.container}>
            <BackToHome />
            <div className={styles.map}>
                <img src="./assets/desktop/image-map@2x.png" alt="city map" />
            </div>
            <div className={styles.content}>
                <span>OUR <br></br> LOCATION</span>
                <span>
                    <div className={styles.title}>99 KING STREET</div>
                    <div>
                        Newport <br></br>
                        RI 02840 <br></br>
                        United States of America
                    </div>
                    <div className={styles.text}>
                        Our newly opened gallery is located near the Edward King House on 99
                        King Street, the Modern Art Gallery is free to all visitors and open
                        seven days a week from 9am to 9pm.
                    </div>
                </span>
            </div>
            <Footer mode='light' />
        </section>
    )
}

export default Location
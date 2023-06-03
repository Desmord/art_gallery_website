import OurLocation from '../../Common/ButtonOurLocation/OurLocation'

import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.blackBack}>
                <div className={styles.titleWhite}>MODERN &nbsp;&nbsp; ART GALLERY</div>
            </div>
            <div className={styles.imageContainer}>
                <img className={`${styles.imageBig} ${styles.image}`} src="./assets/desktop/image-hero@2x.jpg" alt="" />
                <img className={`${styles.imageSmall}`} src="./assets/mobile/image-hero@2x.jpg" alt="" />
                <div className={styles.titleBlack}>MODERN &nbsp;&nbsp; ART GALLERY</div>
            </div>
            <div className={styles.content}>
                The art in the collection of the Modern Art Gallery all started from a spark
                of inspiration. Will these pieces inspire you? Visit us and find out.
            </div>
            <div className={styles.buttonContainer}>
                <OurLocation />
            </div>
        </section>
    )
}

export default Hero
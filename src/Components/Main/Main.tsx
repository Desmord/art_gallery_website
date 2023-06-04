import styles from './Main.module.scss'

const Main = () => {
    return (
        <section className={styles.container}>
            <div className={styles.textTop}>
                <div>YOUR DAY AT <br></br>THE GALLERY</div>
                <div>
                    Wander through our distinct collections and find new insights about our artists.
                    Dive into the details of their creative process.
                </div>
            </div>
            <img className={styles.img1} src="./assets/desktop/image-grid-1@2x.jpg" alt="art gallery 1" />
            <img className={styles.img2} src="./assets/desktop/image-grid-2@2x.jpg" alt="art gallery 2" />
            <img className={styles.img3} src="./assets/desktop/image-grid-3@2x.jpg" alt="art gallery 3" />
            <div className={styles.textBottom}>
                <div>COME & BE <br></br> INSPIRED</div>
                <div>
                    We're excited to welcome you to our gallery and see how our collection influence you.
                </div>
            </div>
        </section>
    )
}

export default Main
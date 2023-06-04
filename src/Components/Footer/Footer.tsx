import styles from './Footer.module.scss';

const Footer = ({ mode }: { mode: string }) => {
    return (
        <footer className={`${styles.container} ${mode === `dark` ? styles.dark : styles.light}`}>
            <div className={styles.title}>MODERN <br></br> ART GALLERY</div>
            <div className={styles.text}>
                The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9am.
                Find us at 99 King Street, Newport, USA.
            </div>
            <div className={styles.socials}>
                {mode === `dark` ?
                    <span>
                        <img src="./assets/icon-facebook.svg" alt="facebook" />
                        <img src="./assets/icon-instagram.svg" alt="instagram" />
                        <img src="./assets/icon-twitter.svg" alt="twitter" />
                    </span> :
                    <span>
                        <img src="./assets/icon-facebook-dark.svg" alt="facebook" />
                        <img src="./assets/icon-instagram-dark.svg" alt="instagram" />
                        <img src="./assets/icon-twitter-dark.svg" alt="twitter" />
                    </span>}

            </div>
        </footer>
    )
}

export default Footer
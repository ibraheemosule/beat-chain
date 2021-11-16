import "../../assets/scss/footer/footer.scss";

const Footer = () => {
    return (
        <footer className=" row footer">
        <section className="container footer__wrapper">
            <ul className="banner footer-item" translate="no"><h1>Beat Chain</h1></ul>
            <ul className="footer__wrapper-nav footer-item">
                <li><a className="link" href="#">home</a></li>
                <li><a className="link" href="#">landing</a></li>
                <li><a className="link" href="#">poster</a></li>
                <li><a className="link" href="#">profile</a></li>
            </ul>
            <ul className="footer__wrapper-nav footer-item">
            <li><a className="link" href="#">contact us</a></li>
            <li><a className="link" href="#about">about us</a></li>
            <li><a className="link" href="#">blog</a></li>
            <li><a className="link" href="#">license</a></li>
            </ul>
            <ul className="footer__wrapper-nav footer-item">
                <li><h3>Follow us</h3></li>
                <li>
                <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-dribbble"></i>
            </span>
            <span>
              <i className="fab fa-facebook"></i>
            </span>
                </li>
            </ul>
        </section>
        </footer>
    )
}
export default Footer;
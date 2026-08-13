export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <b>Tayyaba Yaseen</b>
            <p>Creative Designer &amp; Digital Content Creator helping brands and entrepreneurs turn ideas into professional visual content.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h5>Navigate</h5>
              <a href="#home">Home</a>
              <a href="#expertise">Expertise</a>
              <a href="#about">About</a>
            </div>
            <div className="footer-col">
              <h5>More</h5>
              <a href="#education">Education</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Tayyaba Yaseen. All rights reserved.</span>
          <span>Designed as a premium freelance portfolio.</span>
        </div>
      </div>
    </footer>
  );
}

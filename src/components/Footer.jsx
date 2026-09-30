function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Muhammad Shamaim. All rights reserved.
      </p>

      <p className="footer-tagline">
        Built with React.js, JavaScript & CSS
      </p>
    </footer>
  );
}

export default Footer;
function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        MS<span>.</span>
      </a>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
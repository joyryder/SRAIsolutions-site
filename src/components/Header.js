function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>Open Source Website</h1>
      <h1 style={{textAlign: "center", color:"#01bf71"}}>
        Our goal is to create open-source AI projects through interdisciplinary 
        research collaborations between leaders and subject-matter experts, 
        including researchers, engineers, developers, PhD candidates, and AI artists.
        </h1>
      <div className="row">
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;

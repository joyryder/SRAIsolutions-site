function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>AI Technologies</h1>
      <p style={{textAlign: "center", color:"white", width:"80%", fontSize:"2em", zIndex:1}}>
        Our goal is to create open-source AI projects through interdisciplinary 
        research collaborations between leaders and subject-matter experts, 
        including researchers, engineers, developers, PhD candidates, and AI artists.
        </p>
      <div className="row">
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;

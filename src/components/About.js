function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            Shrif Rai and Scott Shaffer are Computer Science students at Rochester Institute of Technology.
            They founded SRAISolutions to create AI tool that generates graphics based on provided text input 
            is designed and implemented by AI. For all people.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

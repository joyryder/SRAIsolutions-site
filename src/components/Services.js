import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text="Artificial Intelligence in web development automates multiple tasks that help developers to create code more efficiently. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text="Artificial intelligence enchancement in tailored shopping experiences, robotic warehouse pickers, face recognition payment systems, etx artificial intelligence is revolutionizing the e-commerce and retail sectors." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;

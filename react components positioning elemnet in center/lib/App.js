function Navbar() {
    return (
        <nav>
            <ul>
                <li>SERVICES</li>
                <li>WORK</li>
                <li><u>THE TEAM</u></li>
                <li><img src="images/phone.png"></img></li>
            </ul>
        </nav>
    )
}

function MainPage() {
    return (
        <main>
            <Title></Title>
            <Services></Services>
        </main>
    )
}
function Title() {
    return (
        <div className="title">
            <h1>SERVICES</h1>
            <span>Our vision is simple. We want to create websites and applications with both hight quality design and easy-to-access content. The finished product will be totally unique and represent awesomeness.</span>
        </div>
    )
}
function Services() {
    return (
        <div className="services">
            <Service circleBgColor="#353949" circleImgSrc="images/1.png" circleTitle="USER INTERFACE DESIGN" circleText={["Wireframing", "Prototyping", "Usability testing"]}></Service>
            <Service circleBgColor="#E75A59" circleImgSrc="images/2.png" circleTitle="CONCEPT AND IDEAS" circleText={["Conceptualization", "Digital Branding", "Product Strategy"]}></Service>
            <Service circleBgColor="#39AC98" circleImgSrc="images/3.png" circleTitle="DESIGN AND BRANDING" circleText={["Interaction Design", "Graphic Design", "Identity Design"]}></Service>
        </div>
    )
}
function Service(props) {
    var circleStyle={"backgroundColor" : props.circleBgColor};
    var circleText = props.circleText.map(txt => <li>{txt}</li>);
    return (
        <div className="service">
            <div className="circle" style={circleStyle}>
                <img src={props.circleImgSrc}></img>
            </div>
            <h4>{props.circleTitle}</h4>
            <ul>{circleText}</ul>
        </div>
    )
}

const App = () =>
    <div>
        <Navbar></Navbar>
        <MainPage></MainPage>
    </div>

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

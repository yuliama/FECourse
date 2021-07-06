function Navbar() {


    return (
        <nav>
            <ul>
                <NavItem text="SERVICES"></NavItem>
                <NavItem text="WORK"></NavItem>
                <NavItem text="THE TEAM"></NavItem>
                <li><img src="images/phone.png"></img></li>
            </ul>
        </nav>
    )
}

function NavItem({ text }) {
    const [size, setSize] = React.useState(16);

    const style = { fontSize: size + 'px' };

    return (
        <li onClick={() => setSize(size + 2)} onMouseOver={() => setSize(size + 2)} onMouseLeave={() => setSize(16)} style={style}>{text}</li>
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
            <Service circleBgColor="#353949" circleImgSrc="images/1.png" circleTitle="USER INTERFACE DESIGN" circleText={["Wireframing", "Prototyping", "Usability testing"]} onHoverColor="grey"></Service>
            <Service circleBgColor="#E75A59" circleImgSrc="images/2.png" circleTitle="CONCEPT AND IDEAS" circleText={["Conceptualization", "Digital Branding", "Product Strategy"]} onHoverColor="grey"></Service>
            <Service circleBgColor="#39AC98" circleImgSrc="images/3.png" circleTitle="DESIGN AND BRANDING" circleText={["Interaction Design", "Graphic Design", "Identity Design"]} onHoverColor="grey"></Service>
        </div>
    )
}
function Service(props) {
    const [bgColor, setBgColor] = React.useState({ "backgroundColor": props.circleBgColor });
    const [border, setBorder] = React.useState({ "border": "none" });

    var circleText = props.circleText.map(txt => <li>{txt}</li>);

    function changeBgColor(isHover) {
        if (isHover) {
            setBgColor({ "backgroundColor": props.onHoverColor });
        }
        else {
            setBgColor({ "backgroundColor": props.circleBgColor });
        }
    }
    function setDescBorder() {
        setBorder({ "border": "solid white 1px" })
        setTimeout(() => setBorder({ "border": "none" }), 3000);
    }
    return (
        <div className="service">
            <div className="circle" style={bgColor} onMouseOver={() => changeBgColor(true)} onMouseLeave={() => changeBgColor(false)} >
                <img src={props.circleImgSrc}></img>
            </div>
            <h4 onMouseOver={() => setDescBorder()} style={border}>{props.circleTitle}</h4>
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

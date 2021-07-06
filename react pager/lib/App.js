// Add your code here

// Your component goes here...
function Card({ src, title, text, numOfSteps, currentStep }) {
    return (
        <div className="card">
            <CircleImg src={src}></CircleImg>
            <Description title={title} text={text}></Description>
            <Pager numOfSteps={numOfSteps} currentStep={currentStep}></Pager>
        </div>
    )
}
function CircleImg({ src }) {
    return (
        <div className="circleImg">
            <img src={src}></img>
        </div>
    )
}
function Description({ title, text }) {
    return (
        <div className="description">
            <h4>{title}</h4>
            <span>{text}</span>
        </div>
    )
}
function Pager({ numOfSteps, currentStep }) {
    let steper = [];
    for (let i = 1; i <= numOfSteps; i++) {
        steper.push(
            <div className={i == currentStep ? 'selected' : ''}></div>
        );
    }
    return (
        <div className="pager">{steper}</div>
    )
}

const App = () =>
    <div className="container">
        <Card src="lib/images/1.png" title="Ready to Travel" text="Choose your destination, plan your trip. Pick the best place for your holiday." numOfSteps={3} currentStep={1}></Card>
        <Card src="lib/images/2.png" title="Select the Date" text="Select the day, pick Your ticket. We give you the best price. We quaranted!" numOfSteps={3} currentStep={2}></Card>
        <Card src="lib/images/3.png" title="Feels Like Home" text="Enjoy your holidays! Dont forget to take a beer and take a photo!" numOfSteps={3} currentStep={3}></Card>
    </div>

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
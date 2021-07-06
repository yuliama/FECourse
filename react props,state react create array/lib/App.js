function Calculator({ title, operation }) {
    const [result, setResult] = React.useState(1);

    function updateNumber(e) {
        let num = e.target.value;

        if (operation === "square") {
            setResult(num ** num);
        }
        else if (operation === "root") {
            setResult(Math.sqrt(num));
        }
        else if (operation === "sigma") {
            let numbers = [...Array(Number(num)).keys()].map(i => i + 1);
            setResult(numbers.reduce((i, j) => i + j, 0));
        }
        else if (operation === "max") {
            let root = Math.sqrt(num);

            let numbers = [...Array(Number(num)).keys()].map(i => i + 1);
            let sigma = numbers.reduce((i, j) => i + j, 0);

            setResult(root > sigma ? root : sigma);
        }
    }

    return (
        <div className="border" id={operation}>
            <h1>Calculate {title}</h1>
            <div>
                <label htmlFor="number">Enter Number: </label>
                <input type="number" id="number" onChange={updateNumber}></input>
            </div>
            <div>
                <label htmlFor="result">Result: </label>
                <label id="result">{result}</label>
            </div>
        </div>
    )
}

const App = () =>
    <div>
        <Calculator title="Squared Number" operation="square"></Calculator>
        <Calculator title="Squared Root" operation="root"></Calculator>
        <Calculator title="Sigma" operation="sigma"></Calculator>
        <Calculator title="Highest between squered and Sigma" operation="max"></Calculator>
    </div>

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
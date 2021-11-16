import {useState, useEffect} from "react";

function App() {
    const [isLoading, setLoadingState] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((res)=>res.json())
            .then ((json)=>{
                setCoins(json);
                setLoadingState(false);
                console.log(coins)
            })
    }, []);

    return (
        <div className="App">
            <h1>The coins! ({coins.length})</h1>
            {isLoading ? <strong>Loading....</strong> : ""}
            <ul>
                {coins.map((coin)=>{
                    return <li key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</li>
                })}
            </ul>
        </div>
    );
}

export default App;
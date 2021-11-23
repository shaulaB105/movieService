import {useState, useEffect} from "react";
//import {func} from "prop-types";

function App() {

    const [isLoading, setLoadingState] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((res)=>res.json())
            .then ((json)=>{
                setCoins(json);
                setLoadingState(false);
            })
    }, []);


    const [selectIdx, setIdx] = useState(-1);

    const changeConvert = (evt) => setIdx(parseInt(evt.target.value));
    //
    const SelectComponent = () => {
        return (
            <div>
                <select value={selectIdx} onChange={changeConvert}>
                    <option value={-1}>select to convert</option>
                    {coins.map((coin, idx)=>{
                        return <option value={idx} key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>
                    })}
                </select>
            </div>
        );
    }
    const ConvertComponent = () => {
        const [isFromUSD, setMode] = useState(false);
        const [money, setMoney] = useState(0);

        const changeMode = () => {
            setMode((prev)=> !prev);
            setMoney(0);
        }
        const changeMoney = (evt) => setMoney(evt.target.value);

        return (
            <div>
                <hr/>
                <div>
                    <label htmlFor="coin-input">{coins[selectIdx].name}</label>
                    <br/>
                    <input id="coin-input"
                           type="number"
                           value={isFromUSD ? money/coins[selectIdx].quotes.USD.price : money}
                           onChange={changeMoney}
                           disabled={isFromUSD}/>
                    &nbsp;{coins[selectIdx].symbol}
                </div>
                <div>
                    <label htmlFor="usd-input">USD</label>
                    <br/>
                    <input id="usd-input"
                           type="number"
                           value={isFromUSD ? money : money*coins[selectIdx].quotes.USD.price}
                           onChange={changeMoney}
                           disabled={!isFromUSD}/>
                    &nbsp;$
                </div>
                <hr/>
                <div>
                    <button type="button">Convert</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    or&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" onClick={changeMode}>Mode change : to {isFromUSD ? "Coin" : "USD"}</button>
                </div>
            </div>
        )
    }

    return (
        <div className="App">
            <h1>The coins! ({coins.length})</h1>
            {isLoading ? <strong>Loading....</strong> : ""}
            {!isLoading ? <SelectComponent/> : null}
            {-1 < selectIdx ? <ConvertComponent /> : null}
        </div>
    );
}

export default App;
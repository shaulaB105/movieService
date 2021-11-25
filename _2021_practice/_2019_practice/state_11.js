import React from "react";

class TestComp extends React.Component{
    state={
        cnt : 0
    };
    add=()=>{
        this.setState((prev)=>({cnt:prev.cnt+1}))
    };
    minus = ()=>{
        this.setState({cnt:this.state.cnt-1});
    };

    render(){
        const {cnt, isLoading} = this.state;

        return (
            <div>
                <h1>Test this {cnt}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}
export default TestComp;
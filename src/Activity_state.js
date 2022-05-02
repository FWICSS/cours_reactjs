import React,{Component} from 'react';
class Calcul extends  Component{
    constructor()
    {
        super();

        this.state = {
            valeur1 : 0,
            valeur2 : 0,
            operateur : '+',
            resultat : 0
        };
    }
    maj1(event)
    {
        this.setState({valeur1 : event.target.value})
    }
    maj2(event)
    {
        this.setState({valeur2 : event.target.value})
    }
    majOperateur(event)
    {
        this.setState({operateur : event.target.value})
    }
    majsomme(event)
    {
        this.setState( (state) => {
            if(state.operateur === '+') {
                return {resultat: eval(state.valeur1 +'+'+ state.valeur2)};
            }
            if(state.operateur === '-') {
                return {resultat: eval(state.valeur1 - state.valeur2)};
            }
            if(state.operateur === '*') {
                return {resultat: eval(state.valeur1 * state.valeur2)};
            }
            if(state.operateur === '/') {
                return {resultat: eval(state.valeur1 / state.valeur2)};
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Calculette</h1>
                <div>
                <br/>
                <form>
                    <input type="number"  value={this.state.valeur1} onChange={(event)=> {this.maj1(event)}}/>
                    <select value={this.state.operateur}  onChange={(event)=> {this.majOperateur(event)}}>
                    <option value={"+"}>+</option>
                    <option value={"-"}>-</option>
                    <option value={"*"}>*</option>
                    <option value={"/"}>/</option>
                        </select>
                    <input type="number" value={this.state.valeur2} onChange={(event)=> {this.maj2(event)}}/>
                    <input type={"button"} value={"="} onClick={()=>this.majsomme(this.state)}/>

                    <span>{this.state.resultat}</span>
                </form>
                </div>
            </div>
        );
    }
}
export default Calcul;
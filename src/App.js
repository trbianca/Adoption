import React, {Component} from "react"
import ImgCat from "./Assets/gato.jpg"
import ImgDog from "./Assets/cachorro.jpg"
import "./index.css"

class Adc extends Component {

    state= {
        dogs: [{mensagem:"Olá, meu nome é Half e tenho 4 (quatro) aninhos! Sou manso, porém preciso ser filho único! Vai ser um prazer ter você como donx"}],
        cats:"Olá, meu nome é Aurora e tenho 2 (dois) aninhos! Gosto de ter amigos para brincar! Vai ser um prazer ter você como donx",
        listcat: [],
        listdog: [],
    }

    dogInf = () =>{
            this.setState({listdog: this.state.dogs.map((item) => (
                <div>
                    <h2>{item.mensagem}</h2>
                </div>
            ))})
    }

    catInf = () =>{
        this.setState({listcat: this.state.cats})
    }



    render(){
        return( 
            <div>
                <div className="container-central">
                    <div className="container-header">
                        <h1>Adote.com</h1>
                        <a href="https://www.instagram.com/abrigodequeimados/?hl=pt-br" target="_blank"><p>Abrigo de Queimados</p></a>
                    </div>
                    
                    <div className="container-main">

                        <div className="container-cat">
                            <img onClick={this.catInf} className="image-cat" src={ImgCat} alt="Gato"/>
                            <button onClick={this.catInf}>Saiba mais sobre mim</button>
                            <div className="display-cat">
                                <h4>{this.state.listcat}</h4>
                            </div>
                        </div>

                        <div className="container-dog">
                            <img onClick={this.dogInf} src={ImgDog} alt="cachorro"/>
                            <button onClick={this.dogInf}>Saiba mais sobre mim</button>
                           <div className="display-dog"> 
                               <p>{this.state.listdog}</p>
                            </div>
                        </div>

                    </div>

                      <div className="container-footer">
                        <p>Projeto de cunho acadêmico</p>  
                      </div>
                    
                </div>            
            </div>
        )
    }
}

export default Adc;

import Button from "../componets/Button.js";
import Produtos from "../componets/produtos.js";
import Header from "../componets/Header.js";
import Footer from "../componets/footer.js";


export default function Caradapio(data, compararUrlEApi) {
    let cardapioColor = []

    compararUrlEApi.forEach((item) => {
       cardapioColor.push(item.color)
    })
  

 



    let dadoslanche = data.filter((item) => {
        return (item.Categoria === "Lanche" && (item.Quantidade > 0))
    })
    let dadosBebida = data.filter((item) => {
        return (item.Categoria === "Bebida" && (item.Quantidade > 0))
    })
    let dadosOutros = data.filter((item) => {
        return (item.Categoria === "Outros" && (item.Quantidade > 0))
    })

    let cardapio = "";

    cardapio += `  

             <div class="container-header">
             <div class="header" style="background : ${cardapioColor}">${Header(compararUrlEApi)}</div>
             </div>
     
             <div class="food-wrapper">
             <h4>Comida:</h4>
             <div class="foods">
             ${Produtos(dadoslanche, cardapioColor)}
             </div>
             <br />
             
             <h4>Bebida:</h4>
             <div class="drinks">
             ${Produtos(dadosBebida, cardapioColor)}
             </div>
             <br />

             <h4>Outros:</h4>
             <div class="outros">
             ${Produtos(dadosOutros, cardapioColor)}
             </div>
             <br />

             <div class="button" style="background : ${cardapioColor}">
             ${Button()}
             </div>
             </div>

             ${Footer(compararUrlEApi, cardapioColor)}
      
  `;

    return cardapio;
}

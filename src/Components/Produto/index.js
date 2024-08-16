// valor é a mesma coisa que props.valor -> props é utilizado para passar propriedades de um elemento(valor etc.)
const Produto = ({valor})=>{
    return(
    <div>
        <h3>{valor.nome}</h3>
        <p>Preço: {valor.preco}</p>
    </div>);
}

export default Produto;
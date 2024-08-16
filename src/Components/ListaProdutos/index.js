//É possivel criar um componente a partir de uma constante que recebe uma função anonima (daí exportamos a constante)
//ou criamos uma função com o nome do componente e exportamos

//Abaixo: constante que recebe função anônima
import Produto from "../Produto";
const ListaProdutos = ({produtos}) => {
    return(
    <div>
        {produtos.map((p)=>(<Produto valor={p}></Produto>))}
    </div>);
}
export default ListaProdutos;
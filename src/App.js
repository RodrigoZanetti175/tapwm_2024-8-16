import './App.css';
import ListaProdutos from './Components/ListaProdutos';

const produtos = [{
  nome:"teste",
  preco: 10.00,
},
{
  nome:"teste2",
  preco: 15.00,
},
{
  nome:"teste3",
  preco: 20.00,
}];

function App() {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ListaProdutos produtos={produtos}/>
    </div>
  );
}

export default App;

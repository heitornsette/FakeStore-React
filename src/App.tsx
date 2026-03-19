import { useEffect, useState } from "react"
import Header from "./components/Header"
import Lista from "./components/Lista"

type Produto = {
  id: number
  title: string
  price: number
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const App = () => {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([])

  async function buscarProdutos() {
    const request = await fetch("https://fakestoreapi.com/products")
    const response: Produto[] = await request.json()

    setProdutos(response)
    setProdutosFiltrados(response)
  }

  useEffect(() => {
    buscarProdutos()
  }, [])

  function pesquisarProdutos(termo: string) {
    const filtrados = produtos.filter((produto) => produto.title.toLocaleLowerCase().includes(termo.toLocaleLowerCase()))
    setProdutosFiltrados(filtrados)
  }

  function filtrarCategorias(categoria: string) {
    if (categoria == "todos") {
      setProdutosFiltrados(produtos)
    } else {
      setProdutosFiltrados(produtos.filter((produto) => produto.category === categoria))
    }
  }

  function ordenarProdutos(criterio: string) {
    const ordenados = [...produtosFiltrados].sort((a, b) => (criterio === "preco" ? a.price - b.price : b.rating.rate - a.rating.rate))
    setProdutosFiltrados(ordenados)
  }
  return (
    <div>
      <Header onPesquisar={pesquisarProdutos} onFiltrar={filtrarCategorias} onOrdenar={ordenarProdutos} />
      <Lista produtos={produtosFiltrados} />
    </div>
  )
}

export default App

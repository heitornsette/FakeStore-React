import { useEffect, useState } from "react"
import Header from "./components/Header"
import Lista from "./components/Lista"

const App = () => {
  const [produtos, setProdutos] = useState([])

  async function buscarProdutos() {
    const request = await fetch("https://fakestoreapi.com/products")
    const response = await request.json()

    setProdutos(response)
  }

  useEffect(() => {
    buscarProdutos()
  }, [])

  return (
    <div>
      <Header />
      <Lista produtos={produtos} />
    </div>
  )
}

export default App

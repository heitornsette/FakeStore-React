const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-15 border-b border-slate-200">
      <div className="flex items-center gap-2">
        <i className="bx bx-store-alt" style={{ color: "#3069da " }}></i>
        <p className="font-bold text-xl">FakeStore</p>
      </div>
      <div className="relative w-[500px]">
        <i className="bx bx-search-alt-2 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#64748b" }}></i>
        <input
          type="text"
          placeholder="Buscar por produtos..."
          className="w-full h-10 pl-10 pr-3 py-2 rounded-full 
                    placeholder-slate-500 border border-slate-300 
                    bg-slate-50 focus:outline-none focus:ring-2 
                    focus:ring-[var(--color-azul)] 
                    focus:border-[var(--color-azul)] 
                    transition-all"
          //   onKeyUp={pesquisarProdutos(event.target.value)}
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-6 text-sm font-medium">
          <select className="cursor-pointer" /*onChange={filtrarCategorias(event.target.value)}*/>
            <option selected disabled>
              Categorias
            </option>
            <option value="todos">Todos</option>
            <option>men's clothing</option>
            <option>jewelery</option>
            <option>electronics</option>
            <option>women's clothing</option>
          </select>
          <select className="cursor-pointer" /*onChange={ordenarProdutos(event.target.value)}*/>
            <option selected disabled>
              Ordenar por
            </option>
            <option value="preco">Menor preço</option>
            <option>Maior avaliação</option>
          </select>
        </div>
        <div className="gap-4 flex">
          <i className="bx bxs-moon cursor-pointer" style={{ color: "#0f172a" }}></i>
          <i className="bx bxs-shopping-bag cursor-pointer" style={{ color: "#0f172a" }}></i>
        </div>
      </div>
    </header>
  )
}

export default Header

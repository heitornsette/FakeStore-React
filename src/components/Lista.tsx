const Lista = ({ produtos = [] }) => {
  return (
    <div id="lista" className="grid grid-cols-4 gap-4 p-15">
      {produtos.map((produto) => (
        <a href="">
          <div className="bg-gray-200 rounded-xl relative hover:scale-105 duration-200" title="${produto.title}">
            <div className="absolute top-4 right-4 flex gap-1 px-1 shadow fill-white bg-orange-500 text-white rounded flex items-center">
              <i className="bx bxs-star w-4"></i>
              <h6>{produto.rating.rate}</h6>
            </div>
            <img src={produto.image} className="h-[250px] object-contain m-auto p-6" />
            <div className="p-4">
              <h6 className="text-lg line-clamp-1">{produto.title}</h6>
              <h6 className="text-xs font-bold">{produto.category}</h6>
              <h6 className="text-right text-2xl text-orange-500 font-bold">R$ {produto.price.toFixed(2)}</h6>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Lista

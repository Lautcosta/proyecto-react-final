import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/App.css'

const Item = ({product}) => {
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4">

            <div key={product.id} className="card mt-3 mb-3 m-auto cardItem  ">
                        <div className="card-header">
                            <h5 className="card-title text-center">{product.title}</h5>
                        </div>
                        <div className="card-body">
                            <img src={product.photoUrl} className="card-img-top w-50" alt="imagen del producto" />
                            <p className="card-text">
                            El artículo puede diferir de la imagen. Tenga en cuenta que el pedido se realiza por el nombre del producto.
                            </p>
                        </div>
                        <div className="card-footer"> 
                            <Link to={`/item/${product.id}`} >
                            <button
                                className="btn btn-outline-primary btn-block "
                            >
                                Ver Producto
                            </button>
                            </Link>
                        </div>
            </div>

        </div>
    )
}

export default Item

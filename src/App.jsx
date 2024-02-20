import { useState } from 'react'
import React from 'react'
import './App.css'
import { Link } from'react-router-dom'
import data from './assets/index'


function App() {
  const [detail, setDetail] = useState([])
  const [close, setClose] = useState(false)
  const [search1, setSearch1] = useState('')
  const [search2, setSearch2] = useState('')
  const [search4, setSearch4] = useState()

  const detailPage = (Product) => {
    setDetail([{...Product}])
    setClose(true)
  }

  return (
    <>
    {
      close ?
      <div className="single">
      <button onClick={() => setClose(false)}><i className="fa-regular fa-circle-xmark"></i></button>
        {
          detail.map((x, ind) => {
            return(
              <>
              <h1>{x.title}</h1>
                <div key={ind} className="detail-info-wrapper">
                  <div className="imges">
                    <img src={x.images[0]} alt="rasm" />
                    <img src={x.images[2]} alt="rasm" />
                  </div>
                  <div className="detail-info">
                    <h3>Brendi: <span>{x.brand}</span> </h3>
                    <h4>Category: <span>{x.category}</span> </h4>
                    <h4>Price: <span>{x.price}</span> </h4>
                    <h4>DiscountPercentage: <span>{x.discountPercentage}</span> </h4>
                    <h4>Rating: <span>{x.rating} <i className="fa-solid fa-star"></i></span> </h4>
                    <h4>Stock: <span>{x.stock}</span> </h4>
                    <h4>Description: <span>{x.description}</span> </h4>
                  </div>
                  <div className="imges">
                    <img src={x.images[3]} alt="rasm" />
                    <img src={x.images[1]} alt="rasm" />
                  </div>
                </div>
              </>
            )
          })
        }
    </div> : null
    }
      <div className="container">
        <h1>Phone Market</h1>
        <div className="filter">

          <div className="inputs">

            <div className="box">
              <label htmlFor="brend">Telefon brendi</label>
              <input type="text" id='brend' placeholder='Telefon brendini yozing...' onChange={(e) => setSearch1(e.target.value)} />
            </div>

            <div className="box">
              <label htmlFor="price">Category</label>
              <input type="text" id='name' placeholder="Categoriyasini yozing..." onChange={(e) => setSearch2(e.target.value)}/>
            </div>

            {/* <div className="box">
              <label htmlFor="rating">Narxi</label>
              <input type="number" id='rating' placeholder="Narxi bo'chicha tanlang..." onChange={(e) => setSearch4(e.target.value)}/>
            </div> */}

          </div>
          {/* <button>Search <i className="fa-solid fa-magnifying-glass"></i></button> */}

        </div>

        <div className="cards">
              
            {
              data.products.filter((item) => {
                return search1.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search1)
              }).filter((item) => {
                return search2.toLowerCase() === '' ? item : item.category.toLowerCase().includes(search2)
              }).map((el, index) => {
                return (
                  <div key={index} className="card">
                    <img src={el.thumbnail} alt="rasm"/>
                    <div className="info">
                      <h2>{el.title}</h2>
                      <div className="narx">
                        <h3>{el.price} <i className="fa-solid fa-dollar-sign"></i></h3>
                        <h4>{el.rating} <i className="fa-solid fa-star"></i></h4>
                      </div>
                      <span>{el.category}</span>
                      <p>{el.description}</p>
                      <button onClick={() => detailPage(el)}>see more</button>
                    </div>
                  </div>
                )
              })
            }

        </div>
      </div>
    </>
  )
}

export default App

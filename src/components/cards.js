import React from 'react'
import 'bulma/css/bulma.css'
import CatsData from '../database/cats.json'

class Cards extends React.Component {

  render() {
    return (
      <div>
        {CatsData.map((catDetail, index) => {
          return (
            <div className="card is-a-cat-card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={catDetail.image} alt="Cat" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">

                  <div className="media-content">
                    <p className="title is-4">{catDetail.name}</p>

                  </div>
                </div>

                <div className="content">
                  <p> Размеры {catDetail.size}</p>
                  <p>Площадь- {catDetail.square}</p>
                  <p>Оснашение номера{catDetail.amenities}</p>
                  <p>Цена за сутки: {catDetail.price}</p>

                  <button className="btn-book">Забронировать<img className="catpowing" src="https://i.imgur.com/ULFfd1h.png" alt=""></img> </button>
                </div>
              </div>
            </div >
          )
        })
        }
      </div >
    )
  }
}

export default (Cards)

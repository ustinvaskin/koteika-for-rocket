import React from 'react'
import 'bulma/css/bulma.css'

class Aside extends React.Component {

  render() {
    return (
      <div>
        <div className="choose">
          <h3>Цена за сутки, Р</h3>
          <br />
          <div class="columns">
            <div class="column">
              <input class="input" type="text" placeholder="от 100"></input>
            </div>
            <div class="column">
              <input class="input" type="text" placeholder="до 60"></input>
            </div>
          </div>
          <br />
        </div>


        <div>
          <h3>Площадь</h3>
          <div>
            <label class="checkbox">
              <input type="checkbox" name="rsvp" />
              <span> 0,63</span>
            </label>
          </div>
          <div>
            <label class="checkbox">
              <input type="checkbox" name="rsvp" checked />
              <span> 0,90</span>
            </label>
          </div>
          <div>
            <label class="checkbox">
              <input type="checkbox" name="rsvp" />
              <span> 1,13</span>
            </label>
          </div>
          <div>
            <label class="checkbox">
              <input type="checkbox" name="rsvp" />
              <span> 1,56</span>
            </label>
          </div>
          <div>
            <label class="checkbox">
              <input type="checkbox" name="rsvp" />
              <span> 2,56</span>
            </label>
          </div>
          <div>
            <label class="checkbox">
              <input type="checkbox" name="rsvp" />
              <span> 2,88</span>
            </label>
          </div>
        </div>

        <br />
        <br />

        <div>
          <h3>Оснащение номера</h3>
          <div>
            <label class="checkbox">
              <input type="checkbox" name="rsvp" checked />
              <span>Пустой номер</span>
            </label>
          </div>
          <div>
            <label class="checkbox">
              <input type="checkbox" name="rsvp" checked />
              <span>Лежак</span>
            </label>
          </div>
          <div>
            <label class="checkbox">
              <input type="checkbox" name="rsvp" />
              <span>Когтеточка</span>
            </label>
          </div>
          <div>
            <label class="checkbox">
              <input type="checkbox" name="rsvp" />
              <span>Игровой комплекс</span>
            </label>
          </div>
          <div>
            <label class="checkbox">
              <input type="checkbox" name="rsvp" />
              <span>Домик</span>
            </label>
          </div>


        </div>
        <br />
        <div>
          <button class="btn is-orange">Применить</button>
        </div>
        <br />
        <div>
          <button class="btn is-white-yellow">Сбросить Фильтр</button>
        </div>
      </div>
    )
  }
}

export default (Aside)











import React from 'react'
import 'bulma/css/bulma.css'

class AfterNavbar extends React.Component {

  render() {
    return (
      <div>

        < div class="container" >
          <div class="columns">
            <div className="column" >
              <h1 className="title is-4">Наши номера</h1>
            </div>
            <div className="column is-choosing">
              <div class="select">
                <select>
                  <option>&uarr; По плошади</option>
                  <option>&darr; По плошади</option>
                  <option>&uarr; По цене</option>
                  <option>&darr; По цене</option>
                </select>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default (AfterNavbar)










import React from 'react'
import ReactDOM from 'react-dom';

const { AutoSizer, List } = ReactVirtualized


const ITEMS_COUNT = 6
const ITEM_SIZE = 150

// Render your list

class Aside extends React.Component {



  ReactDOM.render(
  <AutoSizer>
  {({ height, width }) => {
  const itemsPerRow = Math.floor(width / ITEM_SIZE);
  const rowCount = Math.ceil(ITEMS_COUNT / itemsPerRow);

  return (
    <List
      className='List'
      width={width}
      height={height}
      rowCount={rowCount}
      rowHeight={ITEM_SIZE}
      rowRenderer={
        ({ index, key, style }) => {
          const items = [];
          const fromIndex = index * itemsPerRow;
          const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);

          for (let i = fromIndex; i < toIndex; i++) {
            items.push(
              <div
                className='Item'
                key={i}
              >
                Item {i}
              </div>
            )
          }

          return (
            <div
              className='Row'
              key={key}
              style={style}
            >
              {items}
            </div>
          )
        }
      }
    />
  )
}}
  </AutoSizer >,
)

export default App;

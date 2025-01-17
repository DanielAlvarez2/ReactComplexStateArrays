import {useState} from 'react'

function App() {

  const [myFavoriteThings, setMyFavoriteThings] = useState([])
  const allFavoriteThings = ['💦🌹','🐱','💡🫖','🔥🧤','🎁','🐴','🍎','🚪🔔','🛷🔔','🥩🍝','🪿🌕']
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)
  
  function addFavoriteThing(){
    setMyFavoriteThings(prevThings=>[...prevThings, allFavoriteThings[prevThings.length]])
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add Item</button>
      <section aria-live='polite'>
        {thingsElements}
      </section>
    </main>
  )
}

export default App

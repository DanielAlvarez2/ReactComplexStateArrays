
function App() {

  const myFavoriteThings = []
  const allFavoriteThings = ['💦🌹','🐱','💡🫖','🔥🧤','🎁','🐴','🍎','🚪🔔','🛷🔔','🥩🍝','🪿🌕']
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)
  
  function addFavoriteThing(){

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

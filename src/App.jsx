
function App() {

  const myFavorietThings = []
  const allFavoriteThings = ['💦🌹','🐱','💡🫖','🔥🧤','🎁','🐴','🍎','🚪🔔','🛷🔔','🥩🍝','🪿🌕']
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)
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

import { useState } from 'react';



function App(){

  const[people, setPeople] = useState([
    {name: 'John', id: 1},
    {name: 'Peter', id: 2},
    {name: 'Sue', id: 3},])

  return(
    <div>hello world</div>
  )
}
export default App;
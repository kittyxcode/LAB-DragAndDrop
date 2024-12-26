import { useState } from 'react';
import {DndContext} from '@dnd-kit/core';



function App(){

  const[people, setPeople] = useState([
    {name: 'John', id: 1},
    {name: 'Peter', id: 2},
    {name: 'Sue', id: 3},])

  return(
    <DndContext>
    </DndContext>
  )
}
export default App;
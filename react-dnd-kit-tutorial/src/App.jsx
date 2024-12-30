import { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import User from './User';

function App() {
  const [people, setPeople] = useState([
    { name: 'John', id: 'a' },
    { name: 'Peter', id: 'b' },
    { name: 'Sue', id: 'c' },
  ]);

  const handleDragEnd = (event) => {
    const {active, over} = event;

    const oldIndex = people.findIndex(person=>person.id===active.id);
    const newIndex = people.findIndex(person=>person.id===over.id);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <h1 className='text-2xl font-bold'>Users List</h1>
      <SortableContext items={people} strategy={verticalListSortingStrategy}>
        {people.map((user) => (
          <User user={user} key={user.id}/>
        ))}
      </SortableContext>
    </DndContext>
  );
}

export default App;
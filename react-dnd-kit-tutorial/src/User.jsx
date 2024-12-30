import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

function User({user}){

    //continuuine
    const {
        atributes, 
        listeners,
        setNodeRef, 
        transform, 
        transition
    } = useSortable({id: user.id});

    const style={
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div 
            style={style}
            ref={setNodeRef}
            {...atributes}
            {...listeners}
            className='bg-white p-4 my-2 rounded shadow text-black'>
            <h1>
                {user.name}
            </h1>
        </div>
    )
}

export default User;
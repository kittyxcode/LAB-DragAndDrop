import { useSortable } from "@dnd-kit/sortable";


function User({user}){

    //continuuine
    const {
        atributes, 
        listeners,
        setNodeRef, 
        transform, 
        transition
    } = useSortable({id: user.id});

    return (
        <div 
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
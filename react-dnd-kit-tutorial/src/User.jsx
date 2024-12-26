function User({user}){
    return (
        <div className='bg-white p-4 my-2 rounded shadow text-black'>
            <h1>{user.name}</h1>
        </div>
    )
}

export default User;
import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";


const User = () => {
    const users = useLoaderData()
    // console.log(users);
    return (
        <div>
            <h3 className="text-3xl">user : {users.length}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                users.map(user => <SingleUser key={user.id} user={user}></SingleUser>)
            }
           </div>
        </div>
    );
};

export default User;
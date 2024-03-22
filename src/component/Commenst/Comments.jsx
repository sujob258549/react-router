
import { useLoaderData } from "react-router-dom";
import Com from "./Com";


const Comments = () => {
    const commments = useLoaderData();

    return (
        <div>
            <h2>comment : {commments.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    commments.map(commen => <Com key={commen.id} com={commen}></Com>)
                }
            </div>
        </div>
    );
};

export default Comments;
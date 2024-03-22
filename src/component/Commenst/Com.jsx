import { Link } from "react-router-dom";


const Com = ({ com }) => {
    const {id, name, body, email } = com;
    return (
        <div>
            <div className="border-2 border-red-500 m-2 p-4 shadow-2xl bg-[#5595ac7e] rounded-2xl flex flex-col">


                <h2 className="text-2xl font-bold">{name .slice(0 , 10)}</h2>
                <h2 className="text-xl font-medium">{body.slice(0, 30)}</h2>
                <p className="flex-grow">{email}</p>
                <Link to={`/com/${id}`} className="btn mt-5"> Show Details</Link>
                
            </div>
        </div>
    );
};

export default Com;
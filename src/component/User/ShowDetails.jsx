import { useLoaderData, useNavigate } from "react-router-dom";


const ShowDetails = () => {
    const user = useLoaderData();
    const { id, body, email, name } = user;
    const navigate = useNavigate();
    const handaleBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h3 className="text-4xl font-semibold">show detail page</h3>

            <div className="border-2 text-center border-red-500 m-2 p-10 bg-slate-400 text-black rounded-2xl flex flex-col items-center mt-[5%] mx-auto md:w-[40%] w-full h-full md:h-[40%]">
                <h2 className="text-2xl font-bold pb-3"> User id : {id}</h2>
                <h2 className="text-2xl font-bold">{name}</h2>
                <h2 className="text-xl font-medium py-2">{body}</h2>
                <p className="flex-grow">{email}</p>
                <button onClick={handaleBack} className="btn mt-5 w-full">Back</button>

            </div>
        </div>
    );
};

export default ShowDetails;
import { useLoaderData, useNavigate } from "react-router-dom";

const ShowAllcomments = () => {
    const showComment = useLoaderData();
    const {id, name, body, email } = showComment;
    const navigate = useNavigate();
    const handelGoBack =()=>{
        navigate(-1)
    }
    return (
        <div>
            <div className="border-2 text-center border-red-500 m-2 p-4 bg-slate-400 text-black rounded-2xl flex flex-col items-center mt-[10%] mx-auto md:w-[40%] w-full h-full md:h-[40%]">

                <h2 className="text-4xl font-semibold">Comment : {id}</h2>
                <h2 className="text-2xl font-bold">{name .slice(0 , 10)}</h2>
                <h2 className="text-xl font-medium">{body.slice(0, 30)}</h2>
                <p className="flex-grow">{email}</p>
                <button onClick={handelGoBack} className="btn mt-5 w-full">Go back</button>
                 
            </div>
        </div>
    );
};

export default ShowAllcomments;
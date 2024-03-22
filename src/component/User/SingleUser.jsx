import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SingleUser = ({ user }) => {

    const { id, website, phone, name } = user;
    const navigate = useNavigate();

    const handelShowDetails = () => {
        navigate(`/user/${id}`)
    }
    console
    return (


        <div>
            <div className="border-2 text-center border-red-500 m-2 p-4 rounded-2xl flex flex-col">


                <h2 className="text-2xl font-bold">{name}</h2>
                <h2 className="text-xl font-medium py-2">{website}</h2>
                <p className="flex-grow">{phone}</p>
                <div className="flex gap-5 mt-6 mx-auto">
                    <Link to={`/user/${id}`} className="btn "> Show</Link>
                    <button onClick={handelShowDetails} className="btn"> Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;
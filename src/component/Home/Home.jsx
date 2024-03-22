import { Outlet, useNavigation } from "react-router-dom";
import Navber from "../Header/Navber/Navber";
import { Vortex } from 'react-loader-spinner'

const Home = () => {
    const navigation = useNavigation();
    return (
        <div className="container max-w-[90%] mx-auto py-5">
            <Navber></Navber>
            <div className="top-[35%] absolute left-[30%] md:left-[45%]">
                {
                    navigation.state === "loading" ?

                        <Vortex
                            className="z-50"
                            visible={true}
                            height="150"
                            width="150"
                            ariaLabel="vortex-loading"
                            wrapperStyle={{}}
                            wrapperClass="vortex-wrapper"
                            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                        />
                        : <p></p>

                }
            </div>
            <h1 className="text-4xl font-bold text-center pb-4">This is home page </h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
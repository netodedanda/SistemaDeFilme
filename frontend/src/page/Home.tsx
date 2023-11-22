import React from "react";
//components
import MyNavBar from "../components/NavBar/MyNavBar";
import MyCards from "../components/Card/MyCards";

const Home: React.FC = () => {
    return (
        <div>
            <MyNavBar />
            <MyCards />
        </div>
    )
}

export default Home;
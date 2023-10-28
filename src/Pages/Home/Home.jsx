import React from 'react';
import Banner from '../../Component/Banner/Banner';
import About from '../../Component/About/About';
import Service from '../../Component/Service/Service';
import Info from '../../Component/Info/Info';
import Products from '../../Component/Products/Products';
import Team from '../../Component/Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Info></Info>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;
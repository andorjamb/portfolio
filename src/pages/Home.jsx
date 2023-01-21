import React from 'react';


const Home = () => {

    const positionCallback = (position) => {
        console.log(position);
    }
    navigator.geolocation.getCurrentPosition(positionCallback);

    return (
        <div>

        </div>
    );
};

export default Home;
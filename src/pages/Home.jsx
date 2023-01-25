import React from 'react';
import classes from '../styles/Home.module.css';


const Home = () => {

    const positionCallback = (position) => {
        console.log(position);
    }
    navigator.geolocation.getCurrentPosition(positionCallback);

    return (
        <div className={classes.home}>
            <div className={classes.flex}>
                <div className={classes.blackCard}>Here</div>
                <div className={classes.blackCard}>Here</div>
            </div>
            <div className={classes.blackCard}>Here</div>
            <div className={classes.flex}>  <div className={classes.whiteDiamond}></div>
                <div className={classes.whiteDiamond}><p>Text</p></div>

                <div className={classes.whiteDiamond}></div>
                <div className={classes.whiteDiamond}></div>
            </div>
            <canvas>canvas here</canvas>
            <p>Introduction
                Welcome to my humble site. I built it as a personal landing page and to help me learn about web development, and for fun. When I get a bit more skillful at it and more organised I intend to re-write it using React, but for now it is just an unweildy bunch of html documents with some experimental JS scripting.

                About the rest of the site
                The 'Projects' page is still notably empty, because, notably, I haven't really built anything yet except for this site, unless you include some IoT projects done during coursework (they are on my github page).

                'Resources' is where I keep track of useful tutorials and ancilliary webdev tools.

                The 'Blog' page is really the main page of the site, where I play with stuff I am learning to do.</p>
        </div >
    );
};

export default Home;
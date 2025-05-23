import React from 'react';
import Banner from '../components/Banner';
import Project from '../components/Project';
import FeaturedGardeners from '../components/FeaturedGardeners';
import TopTrendingTips from '../components/TopTrendingTips';
import GardenToolsList from '../components/GardenToolsList';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedGardeners></FeaturedGardeners>
            <TopTrendingTips></TopTrendingTips>
            <Project></Project>
            <GardenToolsList></GardenToolsList>
       
     
            
          
            
        </div>
    );
};

export default Home;
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import Banner from './Home/Banner';
import Products from './Home/Products';
import Services from './Home/Services';
import ServicesOn from './Home/ServicesOn';
import ProductOffers from './Home/ProductOffers';
import Categories from './Home/Categories';
import VideoSlide from './Home/VideoSlide';
import Seasonal from './Home/Seasonal';
import LimitedOffers from './Home/LimitedOffers';
import Recognized from './Home/Recognized';
import HeroSlide from './Home/HeroSlide';


const Home = ({ navigation }) => {
  return (
    <ScrollView>
    <HeroSlide />
      <Banner />
      <Products />
      <Services />
      <ServicesOn />
      <ProductOffers />
      <Categories />
      <VideoSlide />
      <Seasonal />
      <LimitedOffers />
      <Recognized />
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </ScrollView>
  );
};

export default Home;

import {top_rated,upcoming} from './urls'
import React from 'react'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import Post from './components/Post/Post'
import InterestSection from './components/InterestSection/InterestSection'
import Footer from './components/Footer/Footer'
import CompanyAssets from './components/CompanyAssets/CompanyAssets'

const Home = () => {
  return (
    <>
    <NavBar/>
    <Banner />
    <InterestSection/>
    <Post url={top_rated} title={'Top Rated'}/>
    <Post url={upcoming} title={'Upcoming'}/>
    <CompanyAssets />
    <Footer />
    </>
  )
}

export default Home
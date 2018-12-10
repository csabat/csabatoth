import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio';

const IndexPage = () => (
  <Layout>
    <Hero/>
    <AboutMe />
    <Portfolio />
    <Footer />
  </Layout>
)

export default IndexPage

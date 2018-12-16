import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Education from '../components/Education';

library.add(fab)
const IndexPage = () => (
  <Layout>
    <Hero/>
    <AboutMe />
    <Portfolio />
    <Education />
    <Footer />
  </Layout>
)

export default IndexPage

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
import '../components/layout.css'
import scrollToComponent from 'react-scroll-to-component';


library.add(fab)
class IndexPage extends React.Component {

  goToComponent = () => {
    scrollToComponent(this.Portfolio, { offset: 0, align: 'middle', duration: 1500})
  }

render() {
  return (
  <Layout>
    <Hero buttonAction={this.goToComponent}/>
    <AboutMe />
    <Portfolio  ref={Portfolio => ( this.Portfolio = Portfolio )}/>
    <Education />
    <Footer />
  </Layout>
)
}
}


export default IndexPage

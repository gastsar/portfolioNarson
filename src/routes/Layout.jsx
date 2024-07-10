import { motion, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  useEffect(() => {
    const fakeAsyncLoad = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    // Nettoyez le timer lors du démontage du composant
    return () => clearTimeout(fakeAsyncLoad)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-slate-900 font-poppins ">
          {' '}
          <motion.div
            className="sticky top-0 left-0 h-2 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-200 z-50"
            style={{ scaleX: scrollYProgress }}
          />
          <Header /> {children}
          <Footer />
        </div>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

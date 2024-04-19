import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Layout({ children }) {
  return (
<div className=' bg-slate-900 '>
    <div className='  '>
   <Header/>
      {children}
      <Footer/>
    </div>
</div>
  
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

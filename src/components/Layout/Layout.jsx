import PropTypes from "prop-types";
import { Navbar, Footer } from "../index";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex-1 mx-auto w-full justify-center">
        {children}        
        <Footer/>
      </section>

    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

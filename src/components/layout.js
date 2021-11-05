import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet'
import '../scss/style.scss';

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="../images/favicon.svg" sizes="any" />
        <script src="https://kit.fontawesome.com/4c48ab6713.js" crossorigin="anonymous"></script>
        <title>{pageTitle} | Outdoor Fun Network</title>
      </Helmet>
      <header className="flex row between page-header">
        <Link to="/">
          <StaticImage
            aria-labelledby="page-title"
            src="../images/outdoorFun1-2.png"
          />
          <span id="page-title" class="page-title accessible-text">Outdoor Fun Network</span></Link>
        <nav>
          <Link to="/blog">Blog</Link>
          <Link to="/routes">Routes</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer className="page-footer">
        <StaticImage
          alt="Outdoor Fun Network"
          src="../images/text-logo.svg" />
        <p>
          <strong>Outdoor Fun Network</strong> is a collective of outdoor enthusiasts who
          would like to pass our love of outdoor adventures on to others. Here you will 
          find bike rides, bikepacking, backpacking, hikes, runs, snowboarding, skiing 
          and generally anything else outdoors. All are welcome to become part our 
          Outdoor Fun Network!
        </p>
        <nav class="footer-nav">
          <a href="https://www.strava.com/clubs/outdoor-fun-network"><i class="fab fa-strava"></i><span class="accessible-text">Join us on Strava</span></a>
          <a href="https://www.instagram.com/outdoorfunnetwork/"><i class="fab fa-instagram"></i><span class="accessible-text">Follow us on Instagram</span></a>
          <a href="https://github.com/OutdoorFunNetwork"><i class="fab fa-github"></i><span class="accessible-text">Visit us on GitHub</span></a>
        </nav>
        <p id="copyright">&copy; 2021 Outdoor Fun Network. For reasons, I guess?</p>
      </footer>
    </>
  );
};

export default Layout;

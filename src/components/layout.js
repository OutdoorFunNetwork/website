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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
          rel="stylesheet"
        />
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
        <p id="copyright">&copy; 2021 Outdoor Fun Network</p>
        <nav class="footer-nav">
          <a href="https://www.instagram.com/outdoorfunnetwork/"><i class="fab fa-instagram"></i><span class="accessible-text">Follow us on Instagram</span></a>
          <a href="https://www.strava.com/clubs/outdoor-fun-network"><i class="fab fa-strava"></i><span class="accessible-text">Join us on Strava</span></a>
          <a href="https://github.com/OutdoorFunNetwork"><i class="fab fa-github"></i><span class="accessible-text">Visit us on GitHub</span></a>
        </nav>
      </footer>
    </>
  );
};

export default Layout;

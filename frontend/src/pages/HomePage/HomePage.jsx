import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Hero from '../../components/HomePageSections/Hero';
import Footer from '../../components/Footer';
import styles from '../../utils/styles';
import ServicesSection from '../../components/HomePageSections/ServicesSection';
import Stats from '../../components/HomePageSections/Stats';
import Demo from '../../components/HomePageSections/Demo';
import Pricing from '../../components/HomePageSections/Pricing';
import Partenaire from '../../components/HomePageSections/Partenaire';
import InfoSection from '../../components/HomePageSections/InfoSection';

import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import EmailVerificationPage from '../../pages/EmailVerificationPage';
import Truck from '../../assets/Trucks.jpg';
import Trace from '../../assets/Trackingmap.jpg';
import PC from '../../assets/Dashboard analyse Home page.jpg';
import SlideOverlay from '../../components/HomePageSections/Overlay.Jsx';

const HomePage = ({ initialOverlay }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [overlayContent, setOverlayContent] = useState(null);
  const navigate = useNavigate();

  const switchToLogin = () => {
    setOverlayContent(
      <LoginPage
        onSuccess={() => {
          setIsOverlayOpen(false);
          navigate('/default');
        }}
        onSwitchToSignup={() => switchToSignup()}
        onSwitchToForgotPassword={() => switchToForgotPassword()}
      />
    );
    setIsOverlayOpen(true);
  };

  const switchToSignup = () => {
    setOverlayContent(
      <SignUpPage
        onSuccess={() => {
          switchToEmailVerification();
        }}
        onSwitchToLogin={() => switchToLogin()}
      />
    );
    setIsOverlayOpen(true);
  };

  const switchToForgotPassword = () => {
    setOverlayContent(
      <ForgotPasswordPage
        onSwitchToLogin={() => switchToLogin()}
      />
    );
    setIsOverlayOpen(true);
  };

  const switchToEmailVerification = () => {
    setOverlayContent(
      <EmailVerificationPage
        onSuccess={() => {
          setIsOverlayOpen(false);
          navigate('/');
        }}
        onSwitchToLogin={() => switchToLogin()}
      />
    );
    setIsOverlayOpen(true);
  };

  useEffect(() => {
    if (initialOverlay === "login") {
      switchToLogin();
    } else if (initialOverlay === "signup") {
      switchToSignup();
    } else if (initialOverlay === "verify-email") {
      switchToEmailVerification();
    } else if (initialOverlay === "forgot-password") {
      switchToForgotPassword();
    }
  }, [initialOverlay]);

  const handleSigninClick = () => {
    switchToLogin();
  };

  const handleSignupClick = () => {
    switchToSignup();
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setOverlayContent(null);
    navigate('/'); // Reset to home route
  };

  return (
    <div className="app relative min-h-screen">
      <Navbar onSigninClick={handleSigninClick} onSignupClick={handleSignupClick} />
      <Hero />
      <ServicesSection />
      <div className="bg-base-200">
        <InfoSection
          image={Truck}
          title="Optimisez votre flotte"
          subheading="Gestion simplifiée"
          content="Optimisez la gestion de votre flotte et réduisez vos coûts grâce à une plateforme intuitive et puissante."
        />
        <InfoSection
          image={Trace}
          title="Suivez vos véhicules"
          subheading="Traçabilité en temps réel"
          content="Gardez un œil sur vos véhicules avec des rapports quotidiens et des données en temps réel."
          reverse
        />
        <InfoSection
          image={PC}
          title="Rapports quotidien"
          subheading="Analyse détaillée"
          content="Recevez des rapports quotidiens pour optimiser votre gestion et anticiper vos décisions."
        />
      </div>
      <Partenaire />
      <Demo />
      <Pricing />
      <Footer />
      <SlideOverlay isOpen={isOverlayOpen} onClose={closeOverlay}>
        {overlayContent}
      </SlideOverlay>
    </div>
  );
};

export default HomePage;
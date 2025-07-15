import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ensure react-icons is installed

// Styled Components
const NavbarContainer = styled.nav`
  display: flex;
  // align-items: center; /* Ensure vertical centering */
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  max-width: 1200px; /* Fixed width with maximum limit */
  margin: 0 auto; /* Center the navbar with equal margins on both sides */
  left: 50%;
  transform: translateX(-50%); /* Center it perfectly */
  top: 0;
  z-index: 1000;
  border-bottom: ${props => (props.isScrolled ? '2px solid #4c51bf' : 'none')}; /* Dynamic bottom border */
  transition: border-bottom 0.3s ease; /* Smooth transition for border */
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #4c51bf;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-left: 1rem; /* Margin from left end */

  &:hover {
    color: #3b41a9;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background: linear-gradient(135deg, #4c51bf, #7f5af0);
    clip-path: polygon(0 0, 50% 0, 100% 50%, 50% 100%, 0 100%, 0 50%);
    margin-right: 0.5rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1; /* Take up remaining space to center links */
  justify-content: center; /* Center the navigation links */

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }
`;

const NavItem = styled.li`
  margin: 0 1.5rem;
  font-size: 1rem;
  color: #4a5568;

  &:hover {
    color: #2d3748;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;

  &:hover {
    color: #2d3748;
  }

  &.dropdown::after {
    content: '▼';
    margin-left: 0.2rem;
    font-size: 0.8rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem; /* Increased margin from right end for more space */
  padding-left: 2rem; /* Added padding to create separation from center links */
`;

const LoginButton = styled.button`
  background-color: transparent;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  color: #4a5568;
  cursor: pointer;
  margin-right: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #edf2f7;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5rem 0;
  }
`;

const ExploreNowButton = styled.button`
  background-color: #4c51bf;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b41a9;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #4a5568;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <Logo>OneLot</Logo>
      <NavLinks isOpen={isOpen}>
        <NavItem><NavLink href="#home">Home</NavLink></NavItem>
        <NavItem><NavLink href="#products" className="dropdown">Products</NavLink></NavItem>
        <NavItem><NavLink href="#sell">Sell Your Cars</NavLink></NavItem>
        <NavItem><NavLink href="#about">About</NavLink></NavItem>
        <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
        <NavItem><NavLink href="#blog">Blog</NavLink></NavItem>
      </NavLinks>
      <ActionButtons>
        <LoginButton>Login</LoginButton>
        <ExploreNowButton>Explore Now</ExploreNowButton>
      </ActionButtons>
      <MobileMenuButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>
    </NavbarContainer>
  );
};

export default Navbar;
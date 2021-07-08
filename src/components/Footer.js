import styled from 'styled-components';
import logo from '../images/logo.svg';
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';
import { maxWidthLg, sectionSpacingSm } from '../abstracts/Mixins';
import LinkColumn from './LinkColumn';
import Link from './Link';
import bgPattern from '../images/bg-pattern-footer-desktop.svg';
import Responsive from '../abstracts/Responsive';

const Container = styled.footer`
  background-color: var(--veryLightGray);
  position: relative;

  .footer-bg-pattern {
    position: absolute;
    width: 20%;
    z-index: 1;
  }

  .footer-content {
    ${maxWidthLg}
  }

  .footer-top {
    ${sectionSpacingSm}
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3rem;
  }

  .footer-logo {
    width: 15rem;
    z-index: 5;
  }

  .footer-socials {
    display: flex;
    gap: 2rem;
  }

  .social-icon {
    color: var(--darkGrayishViolet);
    font-size: var(--sm);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--veryDarkViolet);
    }
  }

  .footer-bottom {
    ${sectionSpacingSm}
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
    border-top: 0.1rem solid var(--darkGrayishViolet);

    ${Responsive.md`
      grid-template-columns: repeat(2, 1fr); 
    `}

    ${Responsive.sm`
      grid-template-columns: 1fr; 
    `}
  }
`;

const Footer = () => {
  return (
    <Container>
      <img src={bgPattern} className='footer-bg-pattern' alt='' />
      <div className='footer-content'>
        <div className='footer-top'>
          <img src={logo} alt='insure logo' className='footer-logo' />
          <div className='footer-socials'>
            <a href='#!'>
              <FaFacebookSquare className='social-icon' />
            </a>
            <a href='#!'>
              <FaTwitter className='social-icon' />
            </a>
            <a href='#!'>
              <FaPinterest className='social-icon' />
            </a>
            <a href='#!'>
              <FaInstagram className='social-icon' />
            </a>
          </div>
        </div>
        <div className='footer-bottom'>
          <LinkColumn title={'Our Company'}>
            <Link text='How We Work' />
            <Link text='Why Insure?' />
            <Link text='View Plans' />
            <Link text='Reviews' />
          </LinkColumn>
          <LinkColumn title={'Help Me'}>
            <Link text='FAQ' />
            <Link text='Terms Of Use' />
            <Link text='Privacy Policy' />
            <Link text='Cookies' />
          </LinkColumn>
          <LinkColumn title={'Contact'}>
            <Link text='Sales' />
            <Link text='Support' />
            <Link text='Live Chat' />
          </LinkColumn>
          <LinkColumn title={'Others'}>
            <Link text='Careers' />
            <Link text='Press' />
            <Link text='Licenses' />
          </LinkColumn>
        </div>
      </div>
    </Container>
  );
};

export default Footer;

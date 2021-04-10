import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaTelegramPlane
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='https://t.me/Rakhmonov_Shakhzod' target='_blank' aria-label='Telegram'>
                                <FaTelegramPlane />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/shaxzodbek_rahmonov/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/shahzodbek-rahmonov' target='_blank' aria-label='GitHub'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink
                                href='/'
                                target='_blank'
                                aria-label='Youtube'

                            >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com/in/shaxzodjon-raxmonov-033b8b203/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;

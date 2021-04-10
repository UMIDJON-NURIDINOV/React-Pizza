import { createGlobalStyle } from 'styled-components';

export const GlobalStyes = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        font-family:'Kanit', sans-serif;
        scroll-behavior:smooth;
        outline:none;
    }
    .scrollTopBtn {
        position:fixed;
        right:0;
        bottom:20px;
        font-size:35px;
        background:crimson;
        color:#fff;
        text-align:center;
        line-height:45px;
        padding:7px 15px;
        cursor: pointer;
        opacity:0;
        transition:all 0.3s linear
    }

    .scrollTopBtn.active {
        opacity: 1;
        right: 20px;
    }
`
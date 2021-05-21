import styled from 'styled-components';

export const FooterSite = styled.footer`
    background: var(--white);
`;

export const Container = styled.section`
    max-width: 1184px;
    margin: 0 auto;

`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width:1024px) {
        flex-direction: column;
        
        .copyright {
            padding: 1.5rem 0 0 0; 
            margin: 2rem 0 2rem 0;
            border-top: 1px solid #DFDFDF;
        }
    }

    padding: 4rem 0 0 0;    

    & >* {
        flex: 1 0 33%;
    }

    .menu-footer {
        list-style: none;
        margin: 1.5rem 0;
        li {
            display: inline-block;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.25rem;
            margin-right: 1.5rem;
            &:last-child {
                margin-right: 0;
            }
            a {
                color: var(--text-title);
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .social-links {
        text-align: right;
        list-style: none;
        li {
            display: inline-block;
            margin-right: 0.8rem;
            &:last-child {
                margin-right: 0;
            }
        }
    }

    .copyright {
        text-align: center;
        font-size: 0.75rem;
        line-height: 1rem;
        margin: 3.5rem 0 2rem 0;
        color: var(--text-title);
    }

    @media (max-width: 1200px){
        padding: 2.5rem 0 0 0; 

        .logo-image {
            padding: 0 0 0 1rem;
        }
        .menu-footer {
            text-align: center;
            li {
                margin-right: 0.5rem;
            }
        }
        .social-links {
            padding: 0 1rem 0 0;
        }
    }
`;
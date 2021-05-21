import styled from 'styled-components';

export const Header = styled.section`
    background: url('./image-banner.png'), linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%);
    @media (max-width: 520px){
        background: url('./image-mobile-banner.png'), linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%);
    }

    background-size: cover;
    background-repeat: no-repeat;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1rem;

    a {
        color: var(--white);
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-decoration: none;
        font-weight: 500;

        &:hover {
            color: var(--green); 
        }
    }
    
    ul {
        margin-left: 3rem;
        list-style: none;
        li{
            display: inline-block;
            a {
                margin-left: 1.8rem;
            }
            &:first-child{
                a {
                    margin-left: 0;
                }
            }
        }
    }

    button {
        border: none;
        border-radius: 0.25rem;
        background: var(--green);
        margin-left: auto;
        margin-right: 1.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        color: var(--white);
        padding: 0.7rem 1.4rem;

        transform: filter 3s;

        &:hover {
            filter: brightness(0.9);    
        }
    }

    @media (max-width: 870px) {
        a {
            display: none;
        }

        button {
            margin-right: 0;
        }
    }

    @media (max-width: 870px) and (min-width: 401px){
        button {
            font-size: 0.875rem;
            padding: 0.7rem 1.2rem;
        }
    }

    @media (max-width: 400px) {
        button {
            font-size: 0.76rem;
            padding: 0.7rem 0.8rem;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    max-width: 1084px;
    margin: 6.625rem auto 0 auto;
    padding: 0 0 9.75rem 0;
    @media (max-width:1100px) {
        padding: 0 1.25rem 9.75rem 1.25rem;
    }
    @media (max-width:520px) {
        margin: 4.625rem auto 0 auto;
        padding: 0 1.25rem 4.25rem 1.25rem;
    }
    .text {
        max-width: 584px;
        h1 {
            font-size: 2.5rem;
            letter-spacing: -1px;
            line-height: 3rem;
            font-weight: 500;
            color: var(--white);
        }
        p {
            font-size: 1.125rem;
            line-height: 1.5rem;
            color: var(--white);
            margin: 1rem 0 2rem 0;
        }
        a {
            display: flex;
            align-items: center;
            line-height: 1.5rem;
            font-weight: 500;
            color: var(--white);
            
            img{
                margin-right: 1rem;

                transform: filter 3s;
            }

            &:hover {
                color: var(--green);    
                img {
                    filter: brightness(0.9);    
                }
            }
            
        }
        @media (max-width: 870px) {
            max-width: 100%;
            h1 {
                text-align: center;
                font-size: 1.75rem;
                line-height: 2rem;
            }
            p {
                text-align: center;
                line-height: 1.75rem;
            }
            a {
                justify-content: center;
            }
        }
    }
    .imageHeader {
        margin-left: auto;
        @media (max-width: 870px){
            display: none;
        }
    }
`;
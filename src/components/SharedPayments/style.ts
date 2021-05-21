import styled from 'styled-components';

export const Container = styled.section`
    max-width: 984px;
    margin: 3.5rem auto 0 auto;

    hr {
        max-width: 784px;
        margin: 5rem auto 2rem auto;
        border: 1px solid #DFDFDF;
    }

    @media (max-width: 784px){
        padding: 0 1rem;
    }
`;

export const Content = styled.div`
    display: flex;

    margin: 5.5rem 0 0 0;

    .text {
        max-width: 435px;
        margin-left: auto;
        margin-right: 3rem;
        h2 {
            font-weight: 500;
            font-size: 1.75rem;
            line-height: 2rem;
            color: var(--text-title);
        }
        p {
            line-height: 1.75rem;
            color: var(--text-body);
            margin: 1.5rem 0 2rem 0;
            text-align: justify;
        }
        a {
            font-weight: 500;
            line-height: 1.5rem;
            color: var(--purple);
        }
    }

    @media (max-width:1024px) {
        flex-direction: column;
        align-items: center;

        margin: 4.0rem 0 0 0;

        .image {
            padding: 0 1rem;
        }

        .text {
            max-width: 100%;
            padding: 0 0.5rem;
            margin: 0;
            text-align: center;
            h2 {
                width: auto;
                text-align: center;
                margin: 1rem auto 0 auto;
            }
        }
    }

    @media (max-width: 767px) {
        .image {
            padding: 0 1rem;
            margin: 0 0 1.5rem 0;
        }

        .text {
            h2 {
                font-size: 1.375rem;
                line-height: 2rem;
            }
            p{
                margin: 1rem 0 0 0;
            }
        }
    }

`;
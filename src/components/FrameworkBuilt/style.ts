import styled from 'styled-components';

export const Container = styled.section`
    max-width: 984px;
    margin: 5.5rem auto 0 auto;

    hr {
        max-width: 784px;
        margin: 6rem auto 2rem auto;
        border: 1px solid #DFDFDF;
    }

    @media (max-width: 784px){
        padding: 0 1rem;
        margin: 3rem auto 0 auto;
        hr {
            margin: 0 auto;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text {
        text-align: center; 
        margin: 0 0 3.5rem 0;
        h2 {
            font-weight: 500;
            font-size: 1.75rem;
            line-height: 2rem;
            color: var(--text-title);
            margin: 0 0 2.5rem 0;
        }
        p {
            line-height: 1.75rem;
            color: var(--text-body);
            margin: 1.5rem 0 2rem 0;
        }
        a {
            font-weight: 500;
            line-height: 1.5rem;
            color: var(--purple);
        }
    }

    @media (max-width:1024px) {
        .text {
            h2 {
                margin: 1rem auto 0 auto;
            }
        }
    }

    @media (max-width: 767px) {
        .text {
            h2 {
                font-size: 1.375rem;
                line-height: 2rem;
            }
            p{
                margin: 1rem 0 1.5rem 0;
            }
        }

        .image {
            display: none;
        }
    }
`;
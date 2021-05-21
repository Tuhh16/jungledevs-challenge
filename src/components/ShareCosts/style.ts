import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1084px;
    margin: 5rem auto 0 auto;

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
    justify-content: center;
    align-items: center;

    .text {
        max-width: 444px;
        h2 {
            font-weight: 500;
            font-size: 1.75rem;
            line-height: 2rem;
            width: 300px;
            color: var(--text-title);
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

    .image{
        margin-left: auto;
    }

    @media (max-width:1024px) {
        flex-direction: column-reverse;
        .text {
            max-width: 100%;
            padding: 0 2rem;
            text-align: center;
            h2 {
                width: auto;
                text-align: center;
                margin: 1rem auto 0 auto;
            }
        }

        .image{
            margin-left: 0;
        }
    }

    @media (max-width: 767px) {
        .text {
            padding: 0 0.5rem;
            h2 {
                font-size: 1.375rem;
                line-height: 2rem;
            }
        }
    }
`;
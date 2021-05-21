import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1084px;
    margin: 3.5rem auto 0 auto;

    hr {
        max-width: 784px;
        margin: 4rem auto 2rem auto;
        border: 1px solid #DFDFDF;
    }

    @media (max-width: 784px){
        padding: 0 1rem;

        hr {
            margin: 3.5rem auto 2rem auto;
        }
    }
`;

export const Content = styled.div`
    h3 {
        color: var(--text-title);
        text-align: center;
        font-size: 1.375rem;
        line-height: 2rem;
        @media (max-width: 767px){
            font-size: 1.375rem;
        }
    }
    p {
        color: var(--text-title);
        text-align: center;
        font-size: 1.125rem;
        line-height: 1.5rem;
        margin: 1rem 0 0 0;
        @media (max-width: 767px) {
            line-height: 1.75rem;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 4rem 0 0 0;

    input[type="text"], input[type="email"], button[type="submit"] {
        margin: 0 0.37rem;
        border-radius: 0.25rem;
    }

    input[type="text"], input[type="email"] {
        background: var(--white);
        border: 1px solid #DFDFDF;
        box-sizing: border-box;
        padding: 0 0 0 1rem;
        width: 232px;
        height: 48px;
    }

    button[type="submit"] {
        background: var(--green);
        color: var(--white);
        border: none;
        width: 96px;
        height: 48px;
        transform: filter 3s;

        &:hover {
            filter: brightness(0.9);    
        }
    }

    @media (max-width: 767px) {
        flex-direction: column;

        margin: 1.5rem 0;

        input[type="text"], input[type="email"], button[type="submit"] {
            margin: 0.37rem 0;
            width: 100%;
        }
    }
`;
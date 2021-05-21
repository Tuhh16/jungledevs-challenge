import styled from 'styled-components';

export const Container = styled.section`
    margin: 6rem auto 0 auto;
    background: var(--white);

    @media (max-width: 784px){
        padding: 0 1rem;
        margin: 3rem auto 0 auto;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center; 
    margin: 2.5rem 0 0 0;

    h2 {
        font-weight: 500;
        font-size: 1.75rem;
        line-height: 2rem;
        color: var(--text-title);
        margin: 4.5rem 0 0.5rem 0;
    }
    p {
        line-height: 1.75rem;
        color: var(--text-body);
        margin: 0 0 2rem 0;
    }
    button {
        background: var(--purple);
        border: none;
        border-radius: 0.25rem;
        width: 304px;
        height: 68px;
        color: var(--white);
        padding: 1rem;

        display: flex;
        justify-content: left;
        align-items: center;
        transform: filter 0.3s;

        &:hover {
            filter: brightness(0.9);
        }

        span {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            
            font-size: 1rem;
            line-height: 1.75rem;
            margin: 0 0 0 1rem;
            
            small{
                font-size: 0.75rem;
                line-height: 1rem;
            }
        }
    }
    a {
        font-weight: 500;
        line-height: 1.5rem;
        color: var(--purple);
        margin: 1.5rem 0 0 0;
    }

    @media (max-width:1024px) {
        padding: 0.5rem 0;
        h2 {
            margin: 1rem auto 0 auto;
        }
    }

    @media (max-width: 767px) {
        h2 {
            margin: 2rem 0 0 0;
            font-size: 1.375rem;
            line-height: 2rem;
        }
        p{
            margin: 0.1rem 0 1rem 0;
        }
    }
`;
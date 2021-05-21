import styled from 'styled-components';

export const Container = styled.section`
    background: var(--white);
    border-bottom: 1px solid #DFDFDF;
    padding: 1.5rem 0;
`;

export const Content = styled.div`
    max-width: 1084px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin-left: 1rem;
        line-height: 1.5rem;
        font-weight: 500;
        a {
            color: var(--purple);
        }
        span {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #000000;
        }
    }

    @media (max-width: 680px) {
        flex-direction: column;
        
        p {
            margin-left: 0;
            text-align: center;
            span {
                display: block;
                margin: 0.6rem 0 0 0;
                font-size: 0.875rem;
                line-height: 1.25rem;
            }
        }
    }
`;
import { GetStaticProps } from 'next';

export default function Api() {
    return (
        <div>

        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    }
}
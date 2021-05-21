import Image from 'next/image';
import Link from 'next/link';
import { Container, Content } from './style';

export function BecomeNannyShare() {
    return (
        <Container>
            <Content>
                <h2>Become a nanny share host</h2>
                <p>Takes less than 5 minutes to get started</p>
                <button type="button">
                    <Image src="/calendar-icon.svg" alt="Calendar Icon" width={30} height={30} objectFit="fill" />
                    <span>Create Your Nanny Share <small>Takes less than 5 minutes</small></span>
                </button>
                <Link href="#"><a>Or browse local nanny-shares</a></Link>
            </Content>
        </Container>
    )
}
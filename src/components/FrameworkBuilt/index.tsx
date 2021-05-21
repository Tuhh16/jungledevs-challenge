import Image from 'next/image';
import Link from 'next/link';
import { Container, Content } from './style';

export function FrameworkBuilt() {
    return (
        <Container>
            <Content>
                <div className="text">
                    <h2>A framework built for the long term</h2>
                    <p>Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.</p>
                    <Link href="#"><a>Read how Hapu’s tribal background defines our app</a></Link>
                </div>
                <div className="image">
                    <Image src="/billing-history.png" alt="Billing History image" width={984} height={392} objectFit="fill" />
                </div>
            </Content>
            <hr />
        </Container>
    )
}
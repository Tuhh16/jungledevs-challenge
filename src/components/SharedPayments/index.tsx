import Image from 'next/image';
import Link from 'next/link';
import { Container, Content } from './style';

export function SharedPayments() {
    return (
        <Container>
            <Content>
                <div className="image">
                    <Image src="/payment-system.png" alt="Shared payments made simple image" width={456} height={336} objectFit="fill" />
                </div>
                <div className="text">
                    <h2>Shared payments made simple</h2>
                    <p>Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.</p>
                    <Link href="#">Read how Bridget’s share (without Hapu) ended over $15</Link>
                </div>
            </Content>
            <hr />
        </Container>
    )
}
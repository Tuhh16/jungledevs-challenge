import Image from 'next/image';
import Link from 'next/link';
import { Container, Content } from './style';

export function ShareCosts() {
    return (
        <Container>
            <Content>
                <div className="text">
                    <h2>Share your home, nanny and costs</h2>
                    <p>You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <Link href="#"><a>Hapu means tribe</a></Link> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.</p>
                    <Link href="#"><a>Ready to get started?</a></Link>
                </div>
                <div className="image">
                    <Image src="/share-nanny.png" alt="Share your home, nanny and costs image" width={584} height={392} />
                </div>
            </Content>
            <hr />
        </Container>
    )
}
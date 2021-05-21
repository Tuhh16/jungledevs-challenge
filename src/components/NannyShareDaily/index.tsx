import Image from 'next/image';
import { Container, Content } from './style';

export function NanyShare() {
    return (
        <Container>
            <Content>
                <div className="image">
                    <Image src="/nanny-share-diary.svg" alt="Nanny Diary image" width={216} height={96} objectFit="fill" />
                </div>
                <div className="text">
                    <h2>Coming soon: Nanny Share Daily Diary!</h2>
                    <p>With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!</p>
                </div>
            </Content>
        </Container>
    )
}
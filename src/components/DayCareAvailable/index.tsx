import Link from 'next/link'
import { Container, Content } from './style';

export function DayCareAvailable() {
    return (
        <Container>
            <Content>
                <img src="/profile-photo.png" alt="Profile Photo" />
                <p><Link href="#">Sarah’s day care available now in North Sydney</Link> <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span></p>
            </Content>
        </Container>
    )
} 
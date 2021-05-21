import Image from 'next/image';
import Link from 'next/link';
import { FooterSite, Container, Content } from './styles';

export function Footer() {
    return (
        <FooterSite>
            <Container>
                <Content>
                    <div className="logo-image">
                        <Image src="/logo.svg" width={64} height={24} objectFit="fill" />
                    </div>
                    <ul className="menu-footer">
                        <li><Link href="#"><a>Share Your Nanny</a></Link></li>
                        <li><Link href="#"><a>Our Story</a></Link></li>
                        <li><Link href="#"><a>Blog</a></Link></li>
                        <li><Link href="#"><a>Terms & Privacy</a></Link></li>
                    </ul>
                    <ul className="social-links">
                        <li><Link href="#"><a><Image src="/facebook.svg" width={45} height={45} objectFit="fill" /></a></Link></li>
                        <li><Link href="#"><a><Image src="/twitter.svg" width={45} height={45} objectFit="fill" /></a></Link></li>
                        <li><Link href="#"><a><Image src="/instagram.svg" width={45} height={45} objectFit="fill" /></a></Link></li>
                    </ul>
                    <p className="copyright">Copyright © 2017 Hapu PTY Limited All rights reserved</p>
                </Content>
            </Container>
        </FooterSite>
    )
}
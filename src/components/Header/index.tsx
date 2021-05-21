import React from 'react';
import Link from 'next/link';
import { Header, Menu, Content } from './style';

import { Experiment, Variant, experimentDebugger } from '@marvelapp/react-ab-test';

if (process.env.NODE_ENV === "development") {
    experimentDebugger.enable();
}

export function MainContent() {
    return(
        <>
            <Header>
                <Menu>
                    <img src="/shape.svg" alt="Shape Image" />
                    <nav>
                        <ul>
                            <li><Link href="#"><a>Create Your Nanny Share</a></Link></li>
                            <li><Link href="#"><a>Browse Shares</a></Link></li>
                            <li><Link href="#"><a>Our Story</a></Link></li>
                        </ul>
                    </nav>
                    <button type="button">Become a Nanny Share Host</button>
                    <Link href="#"><a>Sign In</a></Link>
                </Menu>
                <Content>
                    <div className="text">
                        <Experiment name="Change of title and description">
                            <Variant name="Design version">
                                <h1>Easily create or join a local nanny share with Hapu</h1>
                                <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
                            </Variant>
                            <Variant name="Test version">
                                <h1>Create the childcare you need at a price you can afford</h1>
                                <p>Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.</p>
                            </Variant>
                        </Experiment>
                        <Link href="#"><a><img src="/play-icon.svg" alt="Play Icon"/>See hapu in action (27 seconds)</a></Link>
                    </div>
                    <img src="/imageHeader.png" alt="Image Header" className="imageHeader" />
                </Content>
            </Header>
        </>
    )
}
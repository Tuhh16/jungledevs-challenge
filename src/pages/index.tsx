import { GetStaticProps } from 'next';
import Head from 'next/head';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from '../styles/global';

import { MainContent } from '../components/Header';
import { DayCareAvailable } from '../components/DayCareAvailable';
import { ShareCosts } from '../components/ShareCosts';
import { Newsletter } from '../components/Newsletter';
import { SharedPayments } from '../components/SharedPayments';
import { FrameworkBuilt } from '../components/FrameworkBuilt';
import { NanyShare } from '../components/NannyShareDaily';
import { BecomeNannyShare } from '../components/BecomeNanny';
import { Footer } from '../components/Footer';

interface PagePreviewProps {
  preview: boolean;
}

export default function Home() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer />
      <Head>
        <title>Home | Hapu</title>
      </Head>
        <MainContent/>
        <DayCareAvailable/>
        <ShareCosts/>
        <Newsletter/>
        <SharedPayments/>
        <FrameworkBuilt/>
        <NanyShare/>
        <BecomeNannyShare/>
        <Footer/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }: PagePreviewProps) => {
  return {
    props: {},
  }
}
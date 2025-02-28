
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import WhyJoin from '@/components/WhyJoin';
import HowItWorks from '@/components/HowItWorks';
import WhoWeAre from '@/components/WhoWeAre';
import FAQ from '@/components/FAQ';
import ParticipationForm from '@/components/ParticipationForm';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhyJoin />
      <HowItWorks />
      <WhoWeAre />
      <FAQ />
      <ParticipationForm />
    </Layout>
  );
};

export default Index;

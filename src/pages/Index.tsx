
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ImpactStories from '@/components/ImpactStories';
import WhyJoin from '@/components/WhyJoin';
import HowItWorks from '@/components/HowItWorks';
import EvidenceChecklist from '@/components/EvidenceChecklist';
import LegalTimeline from '@/components/LegalTimeline';
import ResourceLibrary from '@/components/ResourceLibrary';
import WhoWeAre from '@/components/WhoWeAre';
import FAQ from '@/components/FAQ';
import NewsletterCTA from '@/components/NewsletterCTA';
import ParticipationForm from '@/components/ParticipationForm';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ImpactStories />
      <WhyJoin />
      <HowItWorks />
      <EvidenceChecklist />
      <LegalTimeline />
      <ResourceLibrary />
      <WhoWeAre />
      <FAQ />
      <NewsletterCTA />
      <ParticipationForm />
    </Layout>
  );
};

export default Index;

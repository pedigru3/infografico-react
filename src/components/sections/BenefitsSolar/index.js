import React from 'react';
import TitleCard from '../../TitleCard';
import BenefitsCard from './BenefitsCard';
import './style.css'

export default function BenefitsSolar() {
  return (
    <div className='limitar-secao'>
      <TitleCard source="Source: ABSOLAR, 2022.">Solar PV Energy Benefits to Brazil</TitleCard>
      <div className='benefits-container'>
        <BenefitsCard src="/assets/icon-sol-painel.png">Over 18.1 GW in operation.</BenefitsCard>
        <BenefitsCard src="/assets/icon-sol-painel.png">Over R$ 97,8 billion in new investments.</BenefitsCard>
        <BenefitsCard src="/assets/icon-sol-painel.png">Over 559,6 thousand new jobs created.</BenefitsCard>
        <BenefitsCard src="/assets/icon-sol-painel.png">Over R$ 26,5 billion in taxes collected.</BenefitsCard>
        <BenefitsCard src="/assets/icon-sol-painel.png">Over 27,3 million tons of CO 2 avoided.</BenefitsCard>
      </div>
    </div>
  );
};
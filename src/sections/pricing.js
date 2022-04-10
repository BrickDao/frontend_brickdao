import React, { useState } from 'react';
import { keyframes } from '@emotion/core';
import { Box, Container, Grid, Button, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import PriceCard from 'components/cards/price-card';
import priceIcon1 from 'assets/project-image.png';
import priceIcon2 from 'assets/project-image2.png';
import priceIcon3 from 'assets/project-image3.png';
import priceIcon4 from 'assets/project-image4.png';

const PRICE_MONTHLY_DATA = [
  {
    recommended: null,
    title: 'B1G1 Business for good',
    icon: priceIcon2,
    amount: '24.559.99 USD',
    options: [
      {
        status: true,
        label: 'B1G1 more than 2500+ businesses around the world on the mission to create a world full of giving.',
      },
      {
        status: true,
        label:
          'Create your own Giving Stories so every time you sell a product, create a new client or celebrate a milestone.',
      },
      {
        status: true,
        label: 'Inspire others to be part of the change you’re making.',
      },
      {
        status: true,
        label: 'Every $5 goes to the charity that supplies eco bricks to their community.',
      },
      {
        status: true,
        label: 'Make Impact.',
      },
      
    ],
  },
  {
    recommended: null,
    title: 'The Blocker',
    icon: priceIcon1,
    amount: '14.559.99 USD',
    options: [
      {
        status: true,
        label: 'The Blocker is solving the plastic waste problem.',
      },
      {
        status: true,
        label:
          'Donate to gift a Blocker to a community to start cleaning up the waste in their environment, turning it into bricks.',
      },
      {
        status: true,
        label: 'Communities can use these bricks to start building schools and community structures.',
      },
      {
        status: true,
        label: 'Every 5$ contributed goes to the pool to support the blocker owner to work for the good of their community.',
      },
     
    ],
  },
  {
    recommended: null,
    title: 'Gjenges pledge ',
    icon: priceIcon3,
    amount: '11.559.99 USD',
    options: [
      {
        status: true,
        label: 'Gjenges pledge is to be true to our vision and mission while maintaining sustainable practices as a social enterprise.',
      },
      {
        status: true,
        label:
          'Gjenge have recycled over 100 tonnes of plastic waste.',
      },
      {
        status: true,
        label: 'We have also managed to create 112 job opportunities for garbage collectors, women, and youth groups by turning plastic waste into affordable beautiful building materials.',
      },
      {
        status: true,
        label: 'Every 5$ contributed goes to the pool to support the blocker owner to grow jobs and continue their good work in their community.',
      },
      {
        status: true,
        label: 'Make impact.',
      },
      
    ],
  },
  {
    recommended: null,
    title: 'Plastic Smartcities',
    icon: priceIcon4,
    amount: '4.559.99 USD',
    options: [
      {
        status: true,
        label: 'Today an estimated 60% of plastic marine debris derives from urban centers.',
      },
      {
        status: true,
        label:
          'While cities will rapidly increase their population densities to account for two-thirds of the global population by 2050, they must also continue to adopt smart solutions that reduce the collective impact of their prospering communities.',
      },
      {
        status: true,
        label: 'Plastic Smart Cities is a WWF initiative that supports a no plastic in nature agenda.',
      },
      {
        status: true,
        label: 'Every 5$ contributed goes to the pool to support Smart Cities in building a cleaner living space for our future generations.',
      },
      
    ],
  },
  
];




const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'monthly',
    pricingPlan: PRICE_MONTHLY_DATA,
  });

  const handlePlan = (plan) => {
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        pricingPlan: PRICE_MONTHLY_DATA,
      });
    }
    if (plan === 'yearly') {
      setPlan({
        ...plan,
        active: 'yearly',
        pricingPlan: PRICE_YEARLY_DATA,
      });
    }
  };
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          title="BrickDao Projects"
          text="Check our latest projects"
        />
        
        <Grid sx={styles.grid}>
          {plan.pricingPlan.map((price, index) => (
            <PriceCard data={price} key={`${plan.active}-card--key${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricing: {
    pt: ['10px', null, null, null, '10px', null, '240px'],
    pb: ['80px', null, null, null, '80px', '100px', '140px'],
  },
  btnWrap: {
    width: '302px',
    height: '60px',
    mt: ['-20px', null, null, '0px'],
    mb: ['40px', null, null, '60px'],
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    p: '7px',
    mx: 'auto',
    button: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: '5px',
      color: '#0F2137',
      letterSpacing: '-0.24px',
      fontSize: '16px',
      fontWeight: 500,
      position: 'relative',
      outline: 'none',
      fontFamily: 'DM Sans',
      transition: 'all 500ms ease',
      '&.active': {
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
        backgroundColor: '#ffffff',
      },
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0)',
      },
    },
  },
  grid: {
    width: '100%',
    maxWidth: '960px',
    mx: ['auto'],
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};

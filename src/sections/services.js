import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'Vote for their favourite projects with their wallet (quadratic funding)',
    heading: 'Quadratic Funding',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'Instead of raising the money once, the funding will be in a Subscription Model.',
    heading: 'Subscription Model',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'The DAO will pay developer contributors from a fixed sum or a percentage of the Budget.',
    heading: 'Developers Rewarded',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      'Everybody vote counts only once but they can increase their subscription .',
    heading: 'Votation Power',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'The DAO decides which public good will be accepted to the List of Project.',
    heading: 'DAO Projects',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      'Grants will available to organisations what will donate bricks to a building project.',
    heading: 'Grants Distribution',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="What is BrickDao ?"
          text=" ♻️BrickDAO will be joined by a large community of philanthropists who are on a mission of creating something good.  Helping communities build learning centres and attract some NPO’s such as B1G1 as well as be an avenue for the Insights Group, YGV (Global Village Metaverse) impact campaign and awards. 🌍"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
        
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};

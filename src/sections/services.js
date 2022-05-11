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
      'Education is at the heart of every country to build it’s citizens to become the contributors and pioneers of the future – by building schools, we create a safe learning space where people may come together, find the time to imagine and create then grow their communities to beyond sustainable development.',
    // heading: 'Quadratic Funding',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'DAO is incentivized by a brick token At its core, it primarily pools funds for grants, however there will also be opportunity for investing in start-up programmes creating new product. Only token holders can make proposals and vote on their execution.We have interested companies and NPO’s such as B1G1 as well as Subscription Model',
    // heading: 'Subscription Model',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'Manage grants to projects to donate bricks to build schools:  Source of bricks could be plastic bricks – this supports cleaning up the environment The final goal of this DAO should be to fail, because there is no more plastic waste produced on the planet.  In a sub-DAOs we could create revenue streams to access grants and donations.',
    // heading: 'Developers Rewarded',
    path: '#',
  },
  // {
  //   image: serviceImage4,
  //   text:
  //     'Everybody vote counts only once but they can increase their subscription .',
  //   heading: 'Votation Power',
  //   path: '#',
  // },
  // {
  //   image: serviceImage5,
  //   text:
  //     'The DAO decides which public good will be accepted to the List of Project.',
  //   heading: 'DAO Projects',
  //   path: '#',
  // },
  // {
  //   image: serviceImage6,
  //   text:
  //     'Grants will available to organisations what will donate bricks to a building project.',
  //   heading: 'Grants Distribution',
  //   path: '#',
  // },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="ECO BRICKS BUILD SCHOOLS          "
          text="brickDAO aims to unlock the current donor ecosystem into a decentralized autonomous organization for donations

          A transparent charity for the people to the people."
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

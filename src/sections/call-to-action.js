import React from 'react';
import { Box, Container, Flex, Text, Heading, Image } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';

import callImage from 'assets/call-image.png';

const CallToAction = () => {
  return (
    
    <Box as="section" sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>          
          <Box sx={styles.content}>        
            
            <Text as="span">GIVING FOR GOOD</Text>
            <Heading as="h3">
            Through Business Initiatives We Create Opportunity For Giving.
            </Heading>
            <Text as="p">
            brickDAO will be joined by a large community of philanthropists who are on a mission of creating something good. We have a Subscription Model Instead of raising the money once, the funding will be in a Subscription Model.

            </Text>
            {/* <Link path="#" sx={styles.button}>
              Donate Now
            </Link> */}
          </Box>
          <Box sx={styles.images}>
            <Image src={callImage} alt="call image" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CallToAction;

const styles = {
  callToAction: {
    mt: ['-90px', null, null, null, '0'],
    py: ['50px', null, null, null, '110px', null, '120px'],
  },
  flex: {
    flexWrap: 'wrap',
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 38.5%'],
    textAlign: ['center', null, null, null, 'left'],
    pt: ['80px', null, null, null, '0'],
    maxWidth: ['100%', null, null, '80%', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['30px', null, null, null, '0'],
    span: {
      fontSize: '18px',
      fontWeight: 700,
      color: 'primary',
      display: 'block',
      lineHeight: 1,
    },
    h3: {
      color: '#0F2137',
      fontWeight: 700,
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      lineHeight: 1.36,
      letterSpacing: '-1.5px',
      mt: '20px',
      mb: '30px',
    },
    p: {
      color: '#02073E',
      fontSize: ['16px', null, null, '18px'],
      lineHeight: ['2', null, null, 2.33],
      mb: '30px',
    },
  },
  button: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  images: {
    flex: ['0 0 100%', null, null, null, '0 0 61.5%'],
  },
};

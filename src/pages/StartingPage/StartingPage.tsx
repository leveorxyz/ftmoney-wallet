import React from "react";

import { Stack, Button, Flex, Image, Text, Link, Input } from '@chakra-ui/react'


interface Props {}

const StartingPage: React.FC<Props> = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={3} w={'full'} maxW={'lg'}>
        <Image src="./src/assets/images/logo.png" height="350px" width="550px"></Image>
        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
        Securely manage your digital assets on-the-go with our trusted wallet app. Download now and take control of your financial future!
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
        <Input type="text" />
          <Link href="/welcome">
          <Button
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Get Started
          </Button>
          </Link>
        </Stack>
      </Stack>
    </Flex>
    <Flex flex={1}>
      <Image
        alt={'Login Image'}
        objectFit={'cover'}
        src={
          'https://img.freepik.com/premium-vector/fantom-ftm-coin-banner-ftm-coin-cryptocurrency-concept-banner-background_32996-1414.jpg'
        }
      />
    </Flex>
  </Stack>
  );
};

export default StartingPage;

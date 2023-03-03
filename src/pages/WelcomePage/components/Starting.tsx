import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Heading, Flex } from '@chakra-ui/react'


const StartingPage = () => {
  return (
    <Stack>
      <h1>Welcome to My Crypto Wallet</h1>
      <p>
        Manage your digital assets with ease and security. Sign in or create an
        account to get started.
      </p>
    </Stack>
  );
};

export default StartingPage;
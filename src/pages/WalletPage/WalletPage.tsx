import React from "react";

import { Stack, Button, Flex, Image, Text, Link } from '@chakra-ui/react'
import styled from "styled-components";


const Input = styled.input`
*,
*::after,
*::before {
  user-select: none;
  -webkit-user-select: text;
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
  cursor: default;
}

`;

interface Props {}

const WalletPage: React.FC<Props> = () => {
  return (
   <Stack>
    <Input></Input>
   </Stack>
  );
};

export default WalletPage;

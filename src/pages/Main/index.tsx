import * as React from 'react';
import { router } from "@/router";
import { RouterProvider } from 'react-router-dom';

export default function Main() {

  return (
    <RouterProvider router={router} />
  );
}
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ZustandPage from '@/pages/ZustandPage';
import SidebarLayout from '@/common/components/Common/Layouts/SidebarLayout';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import TauriPage from '@/pages/TauriPage/TauriPage';
import StartingPage from '@/pages/StartingPage/StartingPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route index element={<StartingPage />}></Route>
    <Route path="/" element={<SidebarLayout />}>
      <Route path='/welcome' element={<WelcomePage />} />
      <Route path="/tauri" element={<TauriPage />} />
      <Route path="/zustand" element={<ZustandPage />} />
    </Route>
    </Route>
  )
)

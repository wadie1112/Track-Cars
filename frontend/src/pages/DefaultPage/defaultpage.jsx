import React from 'react';
import NavBarUi from '../../components/UInterfaces/NavBarUi';
import { Sidebar } from 'lucide-react';
import SidebarVehicles from '../../components/UInterfaces/SideBarVehicules';
const DefaultPage = () => {
  return (
    <div className='bg-custom-grey-background h-screen'>
      <NavBarUi />
      <SidebarVehicles/>
    </div>
  );
}
export default DefaultPage;
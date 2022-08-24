import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AccountSidebar from '../components/accountSidebar/AccountSidebar';
import Locations from '../components/locations/Locations';
import Orders from '../components/orders/Orders';
import Reminders from '../components/reminders/Reminders';
import Settings from '../components/settings/Settings';

const AccountPage = () => {
  return (
    <main style={{padding: '40px 0 80px 0'}}>
        <div className="container">
            <div className="wrap" style={{display: 'flex', columnGap: 45}}>
                <AccountSidebar/>
                <Routes>
                    <Route path='locations' element={<Locations/>}/>
                    <Route path='orders' element={<Orders/>}/>
                    <Route path='settings' element={<Settings/>}/>
                    <Route path='reminders' element={<Reminders/>}/>
                </Routes>
            </div>
        </div>
    </main>
  )
}

export default AccountPage;
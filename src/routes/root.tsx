import {Outlet, Link} from 'react-router-dom';
import {RoleContext} from '../context';
import {useState} from 'react';
import {Menu, MenuItem, Sidebar, useProSidebar} from 'react-pro-sidebar';

import '../index.css'

export default function Root() {

  const {collapseSidebar} = useProSidebar();

  const [isAdmin, setIsAdmin] = useState(false);
  return (
    
    <RoleContext.Provider value={{isAdmin, setIsAdmin}}>
      
      <Sidebar>
        <Menu>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100vh',
              overflow: 'hidden',
            }}>
            <div>
              <MenuItem
                icon={<i className="bi bi-list" />}
                onClick={() => {
                  collapseSidebar();
                }}
                style={{textAlign: 'center'}}>
                <h2>PAWVILLE </h2>
              </MenuItem>
              <MenuItem
                icon={<i className="bi bi-file-person"></i>}
                component={<Link to={'/'} />}>
                Home
              </MenuItem>
              <MenuItem
                icon={<i className="bi bi-house"></i>}
                component={<Link to={'ourAnimals/'} />}>
                Our paws
              </MenuItem>
              <MenuItem
                icon={<i className="bi bi-box2-heart"></i>}
                component={<Link to={'donations/'} />}>
                Donations
              </MenuItem>
              <MenuItem
                icon={<i className="bi bi-newspaper"></i>}
                component={<Link to={'news/'} />}>
                News
              </MenuItem>
              {isAdmin && (
                <MenuItem
                  icon={<i className="bi bi-file-earmark-plus" style={{fontSize: "1.2rem"}}></i>}
                  component={<Link to={'add/'} />}>
                  Add
                </MenuItem>
              )}
              {isAdmin && (
                <MenuItem
                  icon={<i className="bi bi-envelope" style={{fontSize: "1.2rem"}}></i>}
                  component={<Link to={'contacts/'} />}>
                  Messages
                </MenuItem>
              )}
            </div>
            <div>
              <MenuItem
                icon={
                  isAdmin ? (
                    <i className="bi bi-unlock"></i>
                  ) : (
                    <i className="bi bi-lock"></i>
                  )
                }
                onClick={() => setIsAdmin(!isAdmin)}>
                Admin
              </MenuItem>
            </div>
          </div>
        </Menu>
      </Sidebar>
      <div id="detail" className={'pageView'}>
        <Outlet />
      </div>
    </RoleContext.Provider>
  );
}

import React,{useState} from "react"; 
import {Box} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const BranchPageLayout=()=>{
    const [value, setValue] = useState(0);
    const {auth}=useAuth();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const tabRoutes = [
        { path: '/branch', label: 'Branch Details', id: 'branch_details' },
        { path: '/branch/bill-history', label: 'Bill History', id: 'bill_history' },
        { path: '/branch/stock', label: 'Stock', id: 'stock' },
        { path: '/branch/employee-view', label: 'Employee view', id: 'employee_view' },
      ];

      const filteredTabRoutes=()=>{
        let loggedUserRole=auth.roles[0];
        switch(loggedUserRole){
          case "BRANCH_MANAGER":
            return tabRoutes.slice(1); // select the bill-history,stock and employee-view;
          case "ADMIN":
          case  "OWNER":
            return tabRoutes.slice(0, 1); // select the branch Details link only
        }
      }
      
      const renderTabs = () => {
        return filteredTabRoutes().map((route, index) => (
          <Tab 
            key={"tab"+index} 
            component={Link} 
            to={route.path} 
            label={route.label} 
            id={route.id} 
          />
        ));
      };
  
    return(
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} >
                    {renderTabs()}
                </Tabs>
            </Box>
            <Outlet/>
        </>
     
    )
}

export default BranchPageLayout;
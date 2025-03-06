import { useEffect, useState } from "react";
import PopUp from '../../component/PopUp'
import { Container, Grid2, Button, Paper } from "@mui/material";
import UserDetailsForm from "../../forms/UserDetailForm";
import { DataGrid } from '@mui/x-data-grid';
import { useGetAllUsername, useRegister } from '../../hooks/servicesHook/useApiUserService'
import { initialErrors, validateFullForm } from '../../utils/validateUserDetailsForm'; // Import the utility function

const initialUserRegData = {
    userDto: {
        username: "",
        firstName: "",
        lastName: "",
        email: ""
    },
    password: "",
    userRoleDto: {
        roleName: ""
    },
    userContactDto: [{
        contactNum: ""
    }]
}

const initialPwds = {
    pwd_1: "",
    pwd_2: ""
}

const columns = [
    { field: 'id', headerName: '#', width: 20 },
    { field: 'username', headerName: 'Username', width: 100 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', type: 'email', width: 130, },
    { field: 'role', headerName: 'Role', width: 120, },
];

const AllUsersView = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getAllUsername = useGetAllUsername();
    const loadAllUsers = () => {
        setIsLoading(true)
        getAllUsername().then((response) => {
            setUsers(response.data);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        loadAllUsers();
    }, []);

    const rows = users.map((item, index) => ({
        id: index,
        username: item.userDto.username,
        firstName: item.userDto.firstName,
        lastName: item.userDto.lastName,
        email: item.userDto.email,
        role: item.userRoleDto.roleName
    }));

    const [openPopup, setOpenPopup] = useState(false);
    const setOkButtonAction = (event) => {
        handleSubmit(event)
    }
    const setCancelButtonAction = () => {
        resetTheForm()
        setOpenPopup(false)
    }

    const [userRegData, setUserRegData] = useState(initialUserRegData);
    const [errors, setErrors] = useState(initialErrors);
    const registerUser = useRegister();

    const [pwds, setPwds] = useState(initialPwds);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { isValid, newErrors } = validateFullForm(userRegData, pwds);
        if (!isValid) {
            setErrors(newErrors);
            return;
        }
        userRegData.password = pwds.pwd_1; // Update password
        if (window.confirm('Are you sure you want to submit the form?')) {
            try {
                const response = await registerUser(userRegData);
                alert('Registration successful!');

                resetTheForm(); // Reset the form after successful submission
                setOpenPopup(false)

                // Update table data after successful registration
                loadAllUsers(); // Fetch updated user data
            } catch (error) {
                console.error('Error during registration:', error);
                alert('Registration failed. Please try again.');
            }
        }
        setErrors(initialErrors);
    };

    const resetTheForm = () => {
        setUserRegData(initialUserRegData);
        setErrors(initialErrors);
        setPwds(initialPwds)
    }

    const handlePwds = (event) => {
        const { name, value } = event.target;
        setPwds({ ...pwds, [name]: value });
    };

    return (
        <Container sx={{ pt: 2 }}>
            <Paper sx={{ height: "auto", width: '100%' }}>
                {!isLoading &&
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { page: 0, pageSize: 5 } }}
                        pageSizeOptions={[5, 10, 25, 50, 100]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                }
            </Paper>
            <Grid2 container spacing={2} justifyContent="end" sx={{ my: 2 }}>
                <Grid2 item xs="auto">
                    <Button variant="contained" color="primary" onClick={() => setOpenPopup(true)}>
                        Add User
                    </Button>
                </Grid2>
            </Grid2>

            <PopUp
                popUpTitle={"Add new user"}
                openPopup={openPopup}
                isDefaultButtonsDisplay={true}
                setOpenPopup={setOpenPopup}
                setOkButtonAction={setOkButtonAction}
                setCancelButtonAction={setCancelButtonAction}>
                <UserDetailsForm
                    onSubmit={handleSubmit}
                    userUpdateData={userRegData}
                    editMode={true}
                    setUserUpdateData={setUserRegData}
                    handlePwds={handlePwds}
                    pwds={pwds}
                    error={errors}
                    setError={setErrors} />
            </PopUp>
        </Container>
    );
}

export default AllUsersView;

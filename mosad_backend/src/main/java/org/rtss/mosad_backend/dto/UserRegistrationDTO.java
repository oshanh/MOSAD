package org.rtss.mosad_backend.dto;

import org.springframework.stereotype.Component;

@Component
public class UserRegistrationDTO{
    private UserDTO userDto;
    private String password;
    private UserRoleDTO userRoleDto;
    private UserContactDTO userContactDto;

    public UserRegistrationDTO(UserDTO userDto, String password, UserRoleDTO userRoleDto, UserContactDTO userContactDto) {
        this.userDto = userDto;
        this.password = password;
        this.userRoleDto = userRoleDto;
        this.userContactDto = userContactDto;
    }

    public UserRegistrationDTO() {
    }

    public UserDTO getUserDto() {
        return userDto;
    }

    public void setUserDto(UserDTO userDto) {
        this.userDto = userDto;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserRoleDTO getUserRoleDto() {
        return userRoleDto;
    }

    public void setUserRoleDto(UserRoleDTO userRoleDto) {
        this.userRoleDto = userRoleDto;
    }

    public UserContactDTO getUserContactDto() {
        return userContactDto;
    }

    public void setUserContactDto(UserContactDTO userContactDto) {
        this.userContactDto = userContactDto;
    }

    @Override
    public String toString() {
        return "UserRegistrationDTO{" +
                "userDto=" + userDto +
                ", password='" + password + '\'' +
                ", userRoleDto=" + userRoleDto +
                ", userContactDto=" + userContactDto +
                '}';
    }
}

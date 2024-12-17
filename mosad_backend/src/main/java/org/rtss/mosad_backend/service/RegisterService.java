package org.rtss.mosad_backend.service;

import org.rtss.mosad_backend.dto.ResponseDTO;
import org.rtss.mosad_backend.dto.UserRegistrationDTO;
import org.rtss.mosad_backend.dto_mapper.UserContactDTOMapper;
import org.rtss.mosad_backend.dto_mapper.UserDTOMapper;
import org.rtss.mosad_backend.dto_mapper.UserRoleDTOMapper;
import org.rtss.mosad_backend.entity.UserContacts;
import org.rtss.mosad_backend.entity.UserRoles;
import org.rtss.mosad_backend.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegisterService {

    private UserDTOMapper userDTOMapper;
    private UserRoleDTOMapper userRoleDTOMapper;
    private UserContactDTOMapper userContactDTOMapper;
    private ResponseDTO responseDTO;

    @Autowired
    public void setUserDTOMapper(UserDTOMapper userDTOMapper) {
        this.userDTOMapper = userDTOMapper;
    }
    @Autowired
    public void setUserRoleDTOMapper(UserRoleDTOMapper userRoleDTOMapper) {
        this.userRoleDTOMapper = userRoleDTOMapper;
    }

    @Autowired
    public void setUserContactDTOMapper(UserContactDTOMapper userContactDTOMapper) {
        this.userContactDTOMapper = userContactDTOMapper;
    }

    @Autowired
    public void setResponseDTO(ResponseDTO responseDTO) {
        this.responseDTO = responseDTO;
    }

    public ResponseDTO addUser(UserRegistrationDTO userRegistrationDTO) {
        Users users=userDTOMapper.userDtoToUsers(userRegistrationDTO.getUserDto());
        users.setPassword(userRegistrationDTO.getPassword());
        UserRoles userRoles=userRoleDTOMapper.userRoleDTOToUserRoles(userRegistrationDTO.getUserRoleDto());
        users.setUser_roles(userRoles);

        UserContacts userContacts=userContactDTOMapper.userContactsDTOToUserContacts(userRegistrationDTO.getUserContactDto());
        users.setUser_contacts(List.of(userContacts));

        System.out.printf(users.toString());

        return responseDTO;
    }

    //TODO : check the userDto username,firstname,lastname,email validity


    //TODO: check username validity(duplicate)

    //TODO: check firstname and lastname validity(duplicate)

    //react front end valid email is received
    //TODO: check email validity(duplicate)

    //TODO : check the userRoleDto user role validity

    //In react frontend check password is greater than 6 characters and has alphanumeric characters
    //TODO : Encrypt the password

   //TODO : store data in the database

    //TODO : Generate response over the result and pass the responseDTO
    private void generateResponse(){

    }


}

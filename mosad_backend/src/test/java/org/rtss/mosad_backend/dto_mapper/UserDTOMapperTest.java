package org.rtss.mosad_backend.dto_mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.rtss.mosad_backend.dto.UserDTO;
import org.rtss.mosad_backend.entity.UserContacts;
import org.rtss.mosad_backend.entity.UserRoles;
import org.rtss.mosad_backend.entity.Users;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class UserDTOMapperTest {

    //Testing Service
    private UserDTOMapper userDTOMapper;

    //Declare model mapper
    private ModelMapper modelMapper;

    //Reference for user Roles and user contacts for Users object
    private UserRoles userRoles;
    private UserContacts userContacts;

    @BeforeEach
    void setUp() {
        modelMapper=new ModelMapper();
        userDTOMapper=new UserDTOMapper(modelMapper);

        //Create UserRoles object for pass to the Users object
        userRoles=new UserRoles();

        //Crete UserContacts object for pass to the Users object
        userContacts=new UserContacts();
    }

    @Test
    public void shouldMapUserDTOToUsers() {
        //Given
        UserDTO dto = new UserDTO(
                "OwnerSp",
                "Sanjaya",
                "Pradeep",
                "mymail@gmail.com"
        );

        //When
        Users users = userDTOMapper.userDtoToUsers(dto);

        //Then
        assertEquals(dto.getUsername(), users.getUsername());
        assertEquals(dto.getFirst_name(), users.getFirst_name());
        assertEquals(dto.getLast_name(), users.getLast_name());
        assertEquals(dto.getEmail(), users.getEmail());
    }

    @Test
    public void shouldMapUsersToUserDTO() {
        //Given
        Users users = new Users(
                1,
                "OwnerSp",
                "mypasssword",
                "Sanjaya",
                "Pradeep",
                "mymail@gmail.com",
                userRoles,
                new ArrayList<>(List.of(userContacts))
        );

        //when
        UserDTO dto = userDTOMapper.usersToUserDTO(users);

        //then
        assertEquals(users.getUsername(), dto.getUsername());
        assertEquals(users.getFirst_name(), dto.getFirst_name());
        assertEquals(users.getLast_name(), dto.getLast_name());
        assertEquals(users.getEmail(), dto.getEmail());
    }

}
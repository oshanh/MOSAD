package org.rtss.mosad_backend.dto_mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import org.rtss.mosad_backend.dto.UserContactDTO;
import org.rtss.mosad_backend.entity.UserContacts;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;

//@ExtendWith(MockitoExtension.class)
class UserContactDTOMapperTest {

    //Testing Service
    //@InjectMocks
    private UserContactDTOMapper userContactDTOMapper;

    //Declare model mapper
    //@Mock
    private ModelMapper modelMapper;

    @BeforeEach
    void setUp() {
        modelMapper = new ModelMapper();
        userContactDTOMapper = new UserContactDTOMapper(modelMapper);
    }

    @Test
    void shouldMapuserContactsDTOToUserContacts() {
        //Given
        UserContactDTO userContactDto = new UserContactDTO(
            "0112536722"
        );

        //When
        UserContacts userContacts=userContactDTOMapper.userContactsDTOToUserContacts(userContactDto);

        //Then
        assertNotNull(userContacts);
        assertEquals(userContactDto.getContact_num(),userContacts.getContact_num());
    }

    @Test
    void shouldMapuserContactsToUserContactDTO() {
    }
}
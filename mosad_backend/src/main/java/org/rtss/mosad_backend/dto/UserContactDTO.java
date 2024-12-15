package org.rtss.mosad_backend.dto;

import org.springframework.stereotype.Component;

@Component
public class UserContactDTO{
    private String contact_num;

    public UserContactDTO(String contact_num) {
        this.contact_num = contact_num;
    }

    public UserContactDTO() {
    }

    public String getContact_num() {
        return contact_num;
    }

    public void setContact_num(String contact_num) {
        this.contact_num = contact_num;
    }

    @Override
    public String toString() {
        return "UserContactDTO{" +
                "contact_num='" + contact_num + '\'' +
                '}';
    }
}

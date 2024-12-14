package org.rtss.mosad_backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user_contact")
public class UserContacts {

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users user;

    @Id
    @Column(name = "contact_num")
    private String contact_num;

    public UserContacts(Users user, String contact_num) {
        this.user = user;
        this.contact_num = contact_num;
    }

    public UserContacts() {
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public String getContact_num() {
        return contact_num;
    }

    public void setContact_num(String contact_num) {
        this.contact_num = contact_num;
    }

    @Override
    public String toString() {
        return "UserContacts{" +
                "user=" + user +
                ", contact_num='" + contact_num + '\'' +
                '}';
    }
}

package org.rtss.mosad_backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id",nullable = false, unique = true)
    private Integer user_id;
    @Column(name = "username",nullable = false,length = 30)
    private String username;
    @Column(name = "password",nullable = false)
    private String password;
    @Column(name = "first_name",nullable = false,length = 30)
    private String first_name;
    @Column(name = "last_name",length = 30)
    private String last_name;
    @Column(name = "email")
    private String email;

    @ManyToOne
    @JoinColumn(name = "role_id",nullable = false)
    private UserRoles user_roles;

    @OneToMany(mappedBy = "contact_num")
    private List<UserContacts> user_contacts;

    public Users() {
    }

    public Users(Integer user_id, String username, String password, String first_name, String last_name, String email, UserRoles user_roles, List<UserContacts> user_contacts) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.user_roles = user_roles;
        this.user_contacts = user_contacts;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UserRoles getUser_roles() {
        return user_roles;
    }

    public void setUser_roles(UserRoles user_roles) {
        this.user_roles = user_roles;
    }

    public List<UserContacts> getUser_contacts() {
        return user_contacts;
    }

    public void setUser_contacts(List<UserContacts> user_contacts) {
        this.user_contacts = user_contacts;
    }

    @Override
    public String toString() {
        return "Users{" +
                "user_id=" + user_id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", user_roles=" + user_roles +
                ", user_contacts=" + user_contacts +
                '}';
    }
}

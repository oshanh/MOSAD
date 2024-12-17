package org.rtss.mosad_backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "user_roles")
public class UserRoles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id", unique = true, nullable = false)
    private Integer role_id;

    @Column(name = "role_name", nullable = false, length = 20)
    private String role_name;

    @OneToMany(mappedBy = "user_roles")
    private List<Users> users;

    public UserRoles(Integer role_id, String role_name, List<Users> users) {
        this.role_id = role_id;
        this.role_name = role_name;
        this.users = users;
    }

    public UserRoles() {
    }

    public Integer getRole_id() {
        return role_id;
    }

    public void setRole_id(Integer role_id) {
        this.role_id = role_id;
    }

    public String getRole_name() {
        return role_name;
    }

    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }

    public List<Users> getUsers() {
        return users;
    }

    public void setUsers(List<Users> users) {
        this.users = users;
    }

    @Override
    public String toString() {
        return "UserRoles{" +
                "role_id=" + role_id +
                ", role_name='" + role_name + '\'' +
                ", users=" + users +
                '}';
    }
}

package com.models;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by pushkar on 1/4/16.
 */
@Entity
@Table(name="Role")
public class Role implements Serializable {

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Role role = (Role) o;

        if (id != role.id) return false;
        if (code != null ? !code.equals(role.code) : role.code != null) return false;
        return name != null ? name.equals(role.name) : role.name == null;

    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (code != null ? code.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }

    @Id
    @GeneratedValue
    @Column(name="role_id")
    private int id;

    @Column(name="CODE")
    private String code;

    @Column(name="name")
    private String name;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}

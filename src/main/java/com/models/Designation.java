package com.models;

import javax.persistence.*;

/**
 * Created by dhirender on 29/3/16.
 */
@Entity
@Table(name = "Designation")
public class Designation {
    public void setId(int id) {
        this.id = id;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Id
    @GeneratedValue
    private int id;

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Designation{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", name='" + name + '\'' +
                '}';
    }

    @Column(name="CODE")
    private String code;

    public String getName() {
        return name;
    }

    public String getCode() {
        return code;
    }

    @Column(name="name")
    private String name;
}

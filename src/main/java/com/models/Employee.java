package com.models;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Created by pushkar on 28/3/16.
 */

@Entity
@Table(name="employee")
public class Employee implements Serializable {

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "designation_id")
    private Designation designation;

    @Id
    @GeneratedValue
    private int id;

    @Column(name="firstName")
    private String firstName;

    @Column(name="middleName")
    private String middleName;

    @Column(name="lastName")
    private String lastName;

    @Column(name="mobileNo")
    private String mobileNo;

    @Column(name="email")
    private String email;

    @Column(name="empCode")
    private String empCode;

    @Column(name="address")
    private String address;

    @Column(name="postalCode")
    private String postalCode;

    @Column(name="phoneNo")
    private String phoneNo;

    @Column(name="password")
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public Designation getDesignation() {
        return designation;
    }

    public void setDesignation(Designation designation) {
        this.designation = designation;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmpCode() {
        return empCode;
    }

    public void setEmpCode(String empCode) {
        this.empCode = empCode;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Employee(){

    }
}

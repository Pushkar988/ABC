package com.dao;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.models.Employee;
import com.utils.HibernateUtil;

/**
 * Created by pushkar on 28/3/16.
 */
public class EmployeeDao {
    public Integer addUser(Employee user) {
        Transaction trns = null;
        Integer employeeID = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            employeeID = (Integer) session.save(user);
            session.getTransaction().commit();
        } catch (RuntimeException e) {
            if (trns != null) {
                trns.rollback();
            }
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
            return employeeID;
        }
    }
    public Employee getUserById(Integer userid) {
        Employee user = null;
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            String queryString = "from Employee where id = :id";
            Query query = session.createQuery(queryString);
            query.setInteger("id", userid);
            user = (Employee) query.uniqueResult();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return user;
    }

    public Employee findEmpByEmail(String email) {
        Employee user = null;
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            String queryString = "from Employee where email = :email";
            Query query = session.createQuery(queryString);
            query.setString("email", email);
            user = (Employee) query.uniqueResult();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return user;
    }
}

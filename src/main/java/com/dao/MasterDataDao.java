package com.dao;

import com.models.Designation;
import com.utils.HibernateUtil;

import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;


/**
 * Created by pushkar on 29/3/16.
 */
public class MasterDataDao {
    public static List<Designation> getAllDesignations() {
        List<Designation> designations = new ArrayList<Designation>();
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            designations = session.createQuery("from Designation").list();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return designations;
    }


}

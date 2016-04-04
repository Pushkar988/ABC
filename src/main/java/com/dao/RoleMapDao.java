package com.dao;

import com.models.RoleMap;
import com.utils.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 * Created by pushkar on 3/4/16.
 */
public class RoleMapDao {
    public Integer createRoleMap (RoleMap roleMap) {
        Transaction trns = null;
        Integer roleMapID = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            roleMapID = (Integer) session.save(roleMap);
            session.getTransaction().commit();
        } catch (RuntimeException e) {
            if (trns != null) {
                trns.rollback();
            }
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
            return roleMapID;
        }
    }
}

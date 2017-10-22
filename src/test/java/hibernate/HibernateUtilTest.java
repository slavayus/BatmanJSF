package hibernate;

import entity.Point;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.junit.Test;

import java.util.Date;
import java.util.List;
import java.util.Locale;

public class HibernateUtilTest {
    @Test
    public void getSession() throws Exception {
        Locale.setDefault(Locale.ENGLISH);
        try (Session session = HibernateUtil.getSession()) {
            session.beginTransaction();

            Point point = new Point(2d, 3d, 3d, true, new Date(), 23);

            session.save(point);

            session.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }

        List<Point> peopleList = null;

        try (Session session = HibernateUtil.getSession()) {
            session.beginTransaction();

            Query query = session.createQuery("from Point ");

            peopleList = query.list();
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        if (peopleList != null && !peopleList.isEmpty()) {
            peopleList.forEach(System.out::println);
        }

    }

}
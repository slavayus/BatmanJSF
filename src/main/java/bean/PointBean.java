package bean;

import entity.Point;
import hibernate.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@ManagedBean(name = "point")
@SessionScoped
public class PointBean {
    private List<Point> points = new ArrayList<>();

    public PointBean() {
    }

    private void loadPoints() {
        Locale.setDefault(Locale.ENGLISH);
        printClassPath();
        try (Session session = HibernateUtil.getSession()) {
            session.beginTransaction();

            Query query = session.createQuery("from Point ");

            points = query.list();
            session.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }


    public void setPoints(List<Point> points) {
        this.points = points;
    }

    public List<Point> getPoints() {
        loadPoints();
        return points;
    }

    private void printClassPath() {
        ClassLoader cl = ClassLoader.getSystemClassLoader();

        URL[] urls = ((URLClassLoader) cl).getURLs();

        for (URL url : urls) {
            System.out.println(url.getFile());
        }
    }

}

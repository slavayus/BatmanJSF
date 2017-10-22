package bean;

import entity.Point;
import hibernate.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.annotations.Where;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@ManagedBean(name = "point")
@SessionScoped
public class PointBean {

    @Where(clause = "zoom=2")
    private List<Point> points = new ArrayList<>();
    private double inputTextZoom = 2;

    public PointBean() {
    }

    private void loadPoints() {
        Locale.setDefault(Locale.ENGLISH);
        try (Session session = HibernateUtil.getSession()) {
            session.beginTransaction();


            CriteriaBuilder builder = session.getCriteriaBuilder();

            CriteriaQuery<Point> criteria = builder.createQuery(Point.class);
            Root<Point> root = criteria.from(Point.class);
            criteria.select(root);
            criteria.where(builder.equal(root.get("zoom"), inputTextZoom));

            points = session.createQuery(criteria).getResultList();
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

    public void setInputTextZoom(double inputTextZoom) {
        this.inputTextZoom = inputTextZoom;
    }

    public double getInputTextZoom() {
        return inputTextZoom;
    }
}

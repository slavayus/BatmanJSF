package viewers;

import entity.Point;
import hibernate.HibernateUtil;
import logic.CheckBatman;
import org.hibernate.Session;
import org.primefaces.event.SlideEndEvent;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@ManagedBean
@SessionScoped
public class DataView implements Serializable {
    private int coordX = 0;
    private int coordY = 0;
    private int zoom = 15;
    private boolean inBatman = true;

    private List<Point> points = new ArrayList<>();

    public DataView() {
    }

    private void loadPoints() {
        Locale.setDefault(Locale.ENGLISH);
        try (Session session = HibernateUtil.getSession()) {
            session.beginTransaction();


            CriteriaBuilder builder = session.getCriteriaBuilder();

            CriteriaQuery<Point> criteria = builder.createQuery(Point.class);
            Root<Point> root = criteria.from(Point.class);
            criteria.select(root);
            criteria.where(builder.equal(root.get("zoom"), zoom));

            points = session.createQuery(criteria).getResultList();
            session.getTransaction().commit();
            session.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public List<Point> getPoints() {
        loadPoints();
        return points;
    }

    public void setPoints(List<Point> points) {
        this.points = points;
    }

    public boolean isInBatman() {
        return inBatman;
    }

    public void setInBatman(boolean inBatman) {
        this.inBatman = inBatman;
    }

    public int getCoordX() {
        return coordX;
    }

    public void setCoordX(int coordX) {
        this.coordX = coordX;
    }

    public int getCoordY() {
        return coordY;
    }

    public void setCoordY(int coordY) {
        this.coordY = coordY;
    }

    public int getZoom() {
        return zoom;
    }

    public void setZoom(int zoom) {
        this.zoom = zoom;
    }

    public void onChangeX() {
        FacesMessage message = new FacesMessage("Координаты точки предпросмотра изменены", "Текущие координаты: (" + coordX + "," + coordY + ")");
        FacesContext.getCurrentInstance().addMessage(null, message);
    }

    public void onChangeY() {
        FacesMessage message = new FacesMessage("Координаты точки предпросмотра изменены", "Текущие координаты: (" + coordX + "," + coordY + ")");
        FacesContext.getCurrentInstance().addMessage(null, message);
    }

    public void onSlideEnd(SlideEndEvent event) {
        FacesMessage message = new FacesMessage("Радиус изменен", "Текущий радиус: " + event.getValue());
        FacesContext.getCurrentInstance().addMessage(null, message);
    }

    public void addPoint(ActionEvent actionEvent) {
        CheckBatman checkBatman = new CheckBatman(coordX, coordY, zoom);
        updateDataSession(checkBatman);


        addMessage("Точка добавлена!", "Координаты точки: (" + coordX + "," + coordY + ")");
    }

    private void updateDataSession(CheckBatman checkBatman) {
        Point point = checkBatman.updateRequest();
        inBatman = point.isInBatman();
        Locale.setDefault(Locale.ENGLISH);
        try (Session session = HibernateUtil.getSession()) {
            session.beginTransaction();

            session.save(point);

            session.getTransaction().commit();
            session.close();
        } catch (Exception ex) {
            ex.printStackTrace();
//            throw ex;
        }
    }

    public void addMessage(String summary, String s1) {
        FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_INFO, summary, s1);
        FacesContext.getCurrentInstance().addMessage(null, message);
    }

    public void submit() {
        System.out.println(coordY);
        System.out.println(coordX);
    }

}

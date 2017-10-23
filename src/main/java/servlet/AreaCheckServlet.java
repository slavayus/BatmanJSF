package servlet;

import entity.Point;
import hibernate.HibernateUtil;
import logic.CheckBatman;
import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

public class AreaCheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    private void processRequest(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        if (request.getAttribute("error") == null) {
            doResponse(response, request);
        } else {
            forbidden(response);
        }
    }

    private void doResponse(HttpServletResponse response, HttpServletRequest request) throws IOException, ServletException {
        CheckBatman checkBatman = checkBatman(request);
        if (checkBatman == null) {
            request.getRequestDispatcher("/index.xhtml").forward(request, response);
        } else {
            updateDataSession(checkBatman);
            response.sendRedirect("ControllerServlet");
//            request.getRequestDispatcher("/index.xhtml").forward(request, response);
        }

    }

    private void updateDataSession(CheckBatman checkBatman) throws ServletException, IOException {
        Point point = checkBatman.updateRequest();

        Locale.setDefault(Locale.ENGLISH);
        try (Session session = HibernateUtil.getSession()) {
            session.beginTransaction();

            session.save(point);

            session.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }
    }

    private CheckBatman checkBatman(HttpServletRequest request) {
        CheckBatman checkBatman = null;
        try {
            checkBatman = new CheckBatman(Integer.parseInt(request.getParameter("x")),
                    Integer.parseInt(request.getParameter("y")),
                    Integer.parseInt(request.getParameter("zoom")));
        } catch (NumberFormatException e) {
//            e.printStackTrace();
        }
        return checkBatman;
    }

    private void forbidden(HttpServletResponse response) throws IOException {
        response.sendError(response.SC_FORBIDDEN);
    }
}

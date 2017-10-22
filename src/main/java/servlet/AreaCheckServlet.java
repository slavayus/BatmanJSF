package servlet;

import logic.CheckBatman;
import logic.DataSessionBean;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

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
            updateDataSession(checkBatman, request);
            response.sendRedirect("ControllerServlet");
//            request.getRequestDispatcher("/index.xhtml").forward(request, response);
        }

    }

    private void updateDataSession(CheckBatman checkBatman, HttpServletRequest request) throws ServletException, IOException {
        if (request.getSession().getAttribute("data") == null) {
            ArrayList<DataSessionBean> dataList = new ArrayList<>();
            dataList.add(checkBatman.updateRequest(request));
            request.getSession().setAttribute("data", dataList);
        } else {
            ArrayList<DataSessionBean> dataList;
            try {
                dataList = (ArrayList<DataSessionBean>) request.getSession().getAttribute("data");
                dataList.add(checkBatman.updateRequest(request));
            } catch (Exception e) {
                //Ops..
            }
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

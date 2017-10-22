<%@ page import="logic.DataSessionBean" %>
<%@ page import="java.util.ArrayList" %><%--
  Created by IntelliJ IDEA.
  User: slavik
  Date: 24.09.17
  Time: 20:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<body >
<table width="100%" cellspacing="0" height="100%">
    <tr id="tr-top-header">
        <td width="20%"></td>
        <!--<td > <img src="logobatman.png" width="124" height="60" alt="логотип">  </td>-->
        <td align="right" style="min-width:1170px" colspan="3" width="1170px">
            <img src="img/logobatman.png" align="left" vspace="10px" width="254" height="60" alt="логотип">
            <p class="text" id="variant">Вариант 13</p>
            <p class="text" id="group">P3211 </p>
            <p class="text" id="name">Юсюмбели В.И.
                Плохотнюк В.С.</p>
        </td>
        <td width="20%"></td>
    </tr>

    <tr id="tr-bottom-header">
        <td width="20%" class="td-bottom-header"></td>
        <td colspan="3" class="td-bottom-header"></td>
        <td width="20%" class="td-bottom-header"></td>
    </tr>
    <tr height="30">
        <td width="20%" rowspan="5"></td>
        <td colspan="3"></td>
        <td width="20%" rowspan="5"></td>
    </tr>
    <form method="GET" action="ControllerServlet">
        <tr>
            <td align="center" id="menu1">
                <h1 style="color: #2aa5a0">Радиус </h1>
                <input onmousemove="swap()" onchange="swap()" name="zoom" id="myRange" type="range" min="10" max="20"
                       step="1">
                <br><br><br>
                <input onchange="swap2()" onkeydown="if(event.keyCode===13){return false;}" type="text" id="myRange2"
                       value=<%
                       int value;
                        if(request.getSession().getAttribute("data")==null){
                            value =15;
                        }else {
                            value =((ArrayList<DataSessionBean>)(request.getSession().getAttribute("data")))
                       .get(((ArrayList<DataSessionBean>)(request.getSession().getAttribute("data"))).size()-1)
                       .getZoom();
                        }%>
                    <%=value%>>
                <br><br><br><br>
            </td>
            <td width="30"></td>
            <td align="center" rowspan="3" id="menu3">
                <canvas id="myCanvas" style=" margin: 0; "></canvas>
            </td>
        </tr>

        <tr height="30">
            <td></td>
            <td width="30"></td>
            <td></td>
        </tr>

        <tr>

            <td align="center" id="menu2">
                <input type="text" onload="checkCoords(this)"
                       onkeydown="if(event.keyCode===13){return false;}" onkeyup="checkCoords(this)"
                       name="x" id="coordX"
                       placeholder="Введите X">
                <br><br><br>
                <input type="text" onload="checkCoords(this)"
                       onkeydown="if(event.keyCode===13){return false;}" onchange="checkCoords(this)"
                       name="y" id="coordY"
                       placeholder="Введите Y">
                <br><br><br>
                <button onclick="getCoords(this)" type="submit" id="submit" class="submit-btn">отправить
                </button>
                <br><br><br>

            </td>
            <td width="30"></td>
        </tr>
    </form>

    <tr>
        <td></td>
        <td width="30"></td>
        <td style="background-color: white;z-index: 9; box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.35);">
            <table class="result" align="center" style="width: 600px; height: 100px " border="1px">
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Strike</th>
                    <th>Time</th>
                    <th>ProgramLiveTime</th>
                </tr>
                <%
                    ArrayList<DataSessionBean> dataList;
                    try {
                        dataList = (ArrayList<DataSessionBean>) request.getSession().getAttribute("data");
                        for (DataSessionBean bean : dataList) {
                %>
                <script>
                    document.getElementById("coordX").value =<%=bean.getX()%>;
                    document.getElementById("coordY").value =<%=bean.getY()%>;
                    getCoords();
                </script>
                <tr>
                    <td><%=bean.getX()%>
                    </td>
                    <td><%=bean.getY()%>
                    </td>
                    <td><%=bean.getZoom()%>
                    </td>
                    <td><%=bean.isInBatman()%>
                    </td>
                    <td><%=bean.getCurrentTime()%>
                    </td>
                    <td><%=bean.getProcessTime()%>
                    </td>
                </tr>
                <%}%>
                <%
                } catch (Exception e) {%>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>15</td>
                    <td>false</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <%} %>
            </table>
        </td>
    </tr>

    <tr height="20%">
        <td></td>
        <td width="30"></td>
        <td></td>
    </tr>
    <tr id="tr-footer">
        <td width="20%"></td>
        <td colspan="3"><p style="color:#2aa5a0">&copy; Copyright 2017 ITMO University</p></td>
        <td width="20%"></td>
    </tr>
</table>
<!--</form>-->

</body>
</html>
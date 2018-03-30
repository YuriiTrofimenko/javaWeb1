<%-- 
    Document   : index
    Created on : 23 мар. 2018 г., 15:48:45
    Author     : student
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>Today's date: <%= (new java.util.Date()).toLocaleString()%></p>
        <c:set var = "salary" scope = "session" value = "${2000*0.5}"/>
        <c:if test = "${salary > 2000}">
           <p>My salary is:  <c:out value = "${salary}"/><p>
        </c:if>
    </body>
</html>

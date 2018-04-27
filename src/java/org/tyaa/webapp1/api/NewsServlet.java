/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.tyaa.webapp1.api;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.tyaa.webapp1.entity.News;
import org.tyaa.webapp1.globals.GlobalVariables;
import org.tyaa.webapp1.model.Result;

/**
 *
 * @author student
 */
@WebServlet(name = "NewsServlet", urlPatterns = {"/NewsServlet"})
public class NewsServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        response.setContentType("application/json;charset=UTF-8");
        
        if (request.getParameterMap().containsKey("action")) {
            
            try (PrintWriter out = response.getWriter()) {

                Gson gson = new Gson();
                
                switch(request.getParameter("action")){
                
                    case "create" : {
                        
                        String titleString = request.getParameter("title");
                        String contentString = request.getParameter("content");
                        
                        News news = new News(titleString, contentString);
                        
                        GlobalVariables.news.add(news);
                        //Result result = new Result(GlobalVariables.news);
                        ArrayList<String> data = new ArrayList<>();
                        data.add("created");
                        Result result = new Result(data);
                        String resultJsonString = gson.toJson(result);
                        out.print(resultJsonString);
                        break;
                    }
                    case "fetch-all-news" : {
                        
                        /*try {
                            Thread.sleep(1000);
                        } catch (InterruptedException ex) {
                            Logger.getLogger(NewsServlet.class.getName()).log(Level.SEVERE, null, ex);
                        }*/
                        
                        Result result = new Result(GlobalVariables.news);
                        String resultJsonString = gson.toJson(result);
                        out.print(resultJsonString);
                        break;
                    }
                }
            }
        }
        
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.tyaa.webapp1.model;

import java.util.ArrayList;

/**
 *
 * @author student
 */
public class Result {
    
    private ArrayList data = new ArrayList();
    private String error = "";
    
    public Result(ArrayList _data){
    
        data.addAll(_data);
    }
    
    public Result(String _error){
    
        error = _error;
    }
}

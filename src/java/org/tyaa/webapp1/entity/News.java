/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.tyaa.webapp1.entity;

/**
 *
 * @author student
 */
public class News {
    
    public Long id;
    public String title;
    public String content;
    
    private static Long newId = 1L;

    public News(String title, String content) {
        
        this.id = newId;
        this.title = title;
        this.content = content;
        
        newId++;
    }
}

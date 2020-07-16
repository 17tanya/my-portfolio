package com.google.sps.model;

public class Comment{

    //ID to define each comment
    private long id;

    //Comment data
    private String text;

    public Comment(long id, String text){
        this.id = id;
        this.text = text;
    }
}
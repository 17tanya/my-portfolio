package com.google.sps.model;

public class Comment{

    //ID to define each comment
    private long id;

    //Comment data
    private String text;

    //Timestamp
    private long timeStamp;

    public Comment(long id, String text, long timeStamp){
        this.id = id;
        this.text = text;
        this.timeStamp = timeStamp;
    }
}
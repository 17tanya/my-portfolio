package com.google.sps.model;

public class Comment{

    //ID to define each comment
    private long id;

    //Comment data
    private String text;

    //Timestamp
    private long timestamp;

    private String emailId;

    public Comment(long id, String text, long timestamp, String emailId){
        this.id = id;
        this.text = text;
        this.timestamp = timestamp;
        this.emailId = emailId;
    }
}
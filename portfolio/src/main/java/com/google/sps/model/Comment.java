package com.google.sps.model;

public class Comment{

    //ID to define each comment
    private long commentId;

    //Comment data
    private String commentData;

    public Comment(long commentId, String commentData){
        this.commentId = commentId;
        this.commentData = commentData;
    }
}
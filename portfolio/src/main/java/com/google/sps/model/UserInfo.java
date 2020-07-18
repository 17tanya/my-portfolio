package com.google.sps.model;

//A class to store user details

public class UserInfo{
    private String emailID;
    private boolean isUserLoggedIn;
    private String loginURL;
    private String logoutURL;

    // public UserInfo(String emailID, boolean isUserLoggedIn){
    //     this.emailID = emailID;
    //     this.isUserLoggedIn = isUserLoggedIn;
    // }


    public void setEmailID(String emailID){
        this.emailID = emailID;
    }

    public void setIsUserLoggedIn(boolean isUserLoggedIn){
        this.isUserLoggedIn = isUserLoggedIn;
    }

    public void setLoginURL(String loginURL){
        this.loginURL = loginURL;
    }

    public void setLogoutURL(String logoutURL){
        this.logoutURL = logoutURL;
    }

}
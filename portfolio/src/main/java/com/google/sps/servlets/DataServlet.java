// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.sps.model.Comment;
import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/comment-data")
public class DataServlet extends HttpServlet {

    //A list of Comment objects
    private List<Comment> comments;

//   @Override
//   public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
//     //generate the data to be converted into JSON
//     generateComments();
//     response.setContentType("application/json");
//     response.getWriter().println(convertToJsonUsingGson(comments));
//   }

//   public void generateComments(){
//         comments = new ArrayList<>();
//         for(int id = 1 ; id <= 4 ; id++){
//             Comment comment = new Comment(id, "Test Comment "+id);
//             comments.add(comment);
//         }
//   }

//   private String convertToJsonUsingGson(List<Comment> comments) {
//     Gson gson = new Gson();
//     String json = gson.toJson(comments);
//     return json;
//   }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Query query = new Query("Comment").addSort("timeStamp", SortDirection.DESCENDING);

        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        PreparedQuery results = datastore.prepare(query);

        List<Comment> comments = new ArrayList<>();
        for (Entity entity : results.asIterable()) {
            long id = entity.getKey().getId();
            String text = (String) entity.getProperty("text");
            long timeStamp = (long) entity.getProperty("timeStamp");

            Comment comment = new Comment(id, text, timeStamp);
            comments.add(comment);
        }

        Gson gson = new Gson();

        response.setContentType("application/json;");
        response.getWriter().println(gson.toJson(comments));
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String text = request.getParameter("comment-input");
        long timeStamp = System.currentTimeMillis();

        Entity commentEntity = new Entity("Comment");
        commentEntity.setProperty("text", text);
        commentEntity.setProperty("timeStamp", timeStamp);

        DatastoreService datastoreService = DatastoreServiceFactory.getDatastoreService();
        datastoreService.put(commentEntity);

        response.sendRedirect("/index.html");
  }
}

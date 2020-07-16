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

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    //generate the data to be converted into JSON
    generateComments();
    response.setContentType("application/json");
    response.getWriter().println(convertToJsonUsingGson(comments));
  }

  public void generateComments(){
        comments = new ArrayList<>();
        for(long id = 1 ; id <= 4 ; id++){
            Comment comment = new Comment(id, "Test Comment "+id);
            comments.add(comment);
        }

      //Creating a MovieData object
    //   List<String> movieNames = Arrays.asList("Breaking Bad", "Money Hiest", "Dark");
    //   movieData = new MovieData("Thriller", movieNames);
      
      //Adding the MovieData object to the list
    //   Movies = new ArrayList<>();
    //   Movies.add(movieData);
  }

  private String convertToJsonUsingGson(List<Comment> comments) {
    Gson gson = new Gson();
    String json = gson.toJson(comments);
    return json;
  }
}

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


function randomizeQuillingImage() {
    // The images directory contains 3 quillings images, so generate a random index between
    // 1 and 3.
    const imageIndex = Math.floor(Math.random() * 3) + 1;
    const imgUrl = 'images/quilling-' + imageIndex + '.png';
  
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
  
    const imageContainer = document.getElementById('random-image-container');
    // Remove the previous image.
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
}

function randomizePaintingImage() {
    // The images directory contains 5 paintings images, so generate a random index between
    // 1 and 5.
    const imageIndex = Math.floor(Math.random() * 5) + 1;
    const imgUrl = 'images/painting-' + imageIndex + '.jpg';
  
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
  
    const imageContainer = document.getElementById('random-image-container');
    // Remove the previous image.
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
}


/**

// Fetches data from the server and adds it to the DOM.

function getDataFromServlet() {
  console.log('Fetching.');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/comment-data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}


// Handles response by converting it to text and passing the result to
// addQuoteToDom().

function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addDataToDom() function.
  textPromise.then(addDataToDom);
}

// Adds data to the DOM.
function addDataToDom(dataFromServer) {
  console.log('Adding quote to dom: ' + dataFromServer);

  const dataContainer = document.getElementById('data-container');
  dataContainer.innerText = dataFromServer;
}
*/


/**
 * Fetches movie data from the servers and adds them to the DOM.
 */
function getCommentsData() {
  fetch('/comment-data').then(response => response.json()).then((comments) => {
    // comments is an object, not a string, so we have to
    // reference its fields to create HTML content

    console.log("Comments from the Servlet: " + comments);

    const dataElement = document.getElementById('data-container');
    dataElement.innerHTML = '';
    
    for(i = 0 ; i < comments.length ; i++){
        dataElement.appendChild(
        createListElement(comments[i].emailId + ' : ' + comments[i].text));
        console.log('Comment ' + comments[i].emailId + ' : ' + comments[i].text);
    }
    
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

//Checks if the user is logged in
async function checkUserStatus(){
    const loginButton = document.getElementById("login-btn");
    const commentPostButton = document.getElementById("comment-post-btn");
    const loginLogoutHeaderButton = document.getElementById("login-logout-header-btn");
    const commentTextArea = document.getElementById("comment");

    //Get UserInfo from UserServlet
    fetch('/user').then(response => response.json()).then((userInfo) => {
        console.log("User Info from Servlet: " + userInfo);
        console.log("Is user logged in: " + userInfo.isUserLoggedIn);

        //User is logged in
        if (userInfo.isUserLoggedIn) {
            //enable the comment box
            commentTextArea.removeAttribute("disabled");

            logoutUrl = userInfo.logoutURL;
            loginButton.style.display = "none";
            commentPostButton.style.display = "inline-block";

            //display Logout link
            loginLogoutHeaderButton.innerText = "Logout";
            loginLogoutHeaderButton.setAttribute("href", logoutUrl);
        }
        else { //User is not logged in
            //disable the comment box
            commentTextArea.setAttribute("disabled", "true");

            loginUrl = userInfo.loginURL;
            loginButton.style.display = "inline-block";
            commentPostButton.style.display = "none";
            
            //display Login link
            loginLogoutHeaderButton.innerText = "Login";
            loginButton.setAttribute("href", loginUrl);
            loginLogoutHeaderButton.setAttribute("href", loginUrl);
        }
    
    });
}

//Functions to be executed when the DOM loads
function onloadFunctions(){
    console.log("Starting execution of getCommentsData()");
    getCommentsData();
    console.log("Completed the execution of getCommentsData()");
}
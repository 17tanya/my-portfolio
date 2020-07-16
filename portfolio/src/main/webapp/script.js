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

    const dataElement = document.getElementById('data-container');
    dataElement.innerHTML = '';
    
    for(i = 0 ; i < comments.length ; i++){
        dataElement.appendChild(
        createListElement('Comment ' + comments[i].commentId + ' :' + comments[i].commentData));
        console.log('Comment ' + comments[i].commentId + ' :' + comments[i].commentData);
    }
    
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
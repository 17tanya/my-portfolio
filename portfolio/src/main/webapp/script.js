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


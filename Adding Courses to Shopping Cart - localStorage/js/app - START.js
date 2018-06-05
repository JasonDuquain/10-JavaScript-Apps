/* START AT 1:10 of first steps with project */

//////// Variables
const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody'),
      clearCartBtn = document.querySelector('#clear-cart');

/////////// Listeners
loadEventListeners();
function loadEventListeners() {
     // When a new course is added
     courses.addEventListener('click', buyCourse);

     // When the remove button is clicked
     shoppingCartContent.addEventListener('click', removeCourse);

     // Clear Cart Btn
     clearCartBtn.addEventListener('click', clearCart);

     document.addEventListener('DOMContentLoaded', getFromLocalStorage);
}


////////Functions
function buyCourse(e) {
     e.preventDefault();
     // Use delegation to find the course that was added
     
}

// Reads the HTML information of the selected course
function getCourseInfo(course) {
     // Create an Object with Course Data
     
}

// Display the selected course into the shopping cart
function addIntoCart(course) {
     // create a <tr>
     

     // Build the template
     row.innerHTML = `
          <tr>
               <td>
                    <img src="${course.image}" width=100>
               </td>
               <td>${course.title}</td>
               <td>${course.price}</td>
               <td>
                    <a href="#" class="remove" data-id="${course.id}">X</a>
               </td>
          </tr>
     `;
     // Add into the shopping cart
     

     // Add course into Storage
     
}

// Add the courses into the local storage
function saveIntoStorage(course) {
     

     // add the course into the array
     

     // since storage only saves strings, we need to convert JSON into String
     
}

// Get the contents from storage
function getCoursesFromStorage() {

     

}

// remove course from the dom
function removeCourse(e) {
     let course, courseId;

     // Remove from the dom
     
     // remove from the local storage
     
}

// remove from local storage
function removeCourseLocalStorage(id) {
     // get the local storage data
     

     // loop trought the array and find the index to remove
     

     // Add the rest of the array
     
}

// Clears the shopping cart
function clearCart() {
     // shoppingCartContent.innerHTML = '';

     

     // Clear from Local Storage
     
}
// Clears the whole local storage
function clearLocalStorage() {
     
}

// Loads when document is ready and print courses into shopping cart
function getFromLocalStorage() {
     

     // LOOP through the courses and print into the cart
     
	 
	 /* 
	 row.innerHTML = `
               <tr>
                    <td>
                         <img src="${course.image}" width=100>
                    </td>
                    <td>${course.title}</td>
                    <td>${course.price}</td>
                    <td>
                         <a href="#" class="remove" data-id="${course.id}">X</a>
                    </td>
               </tr>
          `;
	 */
	 
	 
     
}
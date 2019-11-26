//assign elements to variables
const newTask = document.querySelector('#taskInput');   //use of const and let variables
const addTaskBtn = document.querySelector('#addTask');
const taskList = document.querySelector("#taskList");



//create function to add new li to ul
taskToList = (task) => {
task = newTask.value
let li = document.createElement('li');
let checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'checkbox';
taskList.appendChild(li);
li.textContent = `Purchase: ${task}`; //string literal
li.appendChild(checkbox)
console.log(checkbox.value);
}


//delete item that is checked
taskList.addEventListener('click', function(e) {
  let tgt = e.target
  if(tgt.tagName == "INPUT") {
    tgt.parentNode.parentNode.removeChild(tgt.parentNode);
  }
})


addTaskBtn.addEventListener('click', taskToList) //event listener to execute function on click


//asyn function to retreive local json file
async function getRecipeData() {
  try {
      const response = await fetch('./recipes.json')
      return await response.json() //return the JSON object
  } catch (error) {
      console.error(error)
  }
}

let recipeData = {} //turn json data into object
getRecipeData().then(data => recipeData = data);


//Get a random recipe by generating a random number and matching it to the id of the recipe
 generateRecipe = () => {
  randomNum = Math.floor(Math.random() * 8) + 1;
  console.log(randomNum)
  let name = document.querySelector('#name')
  let ingredients = document.querySelector('#ingredients')
  console.log(recipeData)
  name.textContent = recipeData.recipes[randomNum].name
  ingredients.textContent = recipeData.recipes[randomNum].ingredients.join(', ')
}

document.querySelector('#random').addEventListener('click', generateRecipe)
 

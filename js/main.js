fetchText('pasta');
// let items;
let recipe_Id = 0
document.querySelector('#searchBtn').addEventListener('click', () => {
  let searchtxt = document.querySelector('#searchInput').value;
  fetchText(searchtxt)
});

async function fetchText(txt) {
  let response = await (await fetch(`https://forkify-api.herokuapp.com/api/search?q=${txt}`)).json();

  // console.log((response.recipes));

  let html = '';
  let meal;
  for (let i = 0; i < response.recipes.length; i++) {

    let id = (response.recipes[i].recipe_id);
    meal = await (await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)).json();
    html += `
    <div data-id = ${id} class="card flex-row bg-white pt-5 pb-5 curosor-pointer" onclick="displayIngrediants()"  
    >
    <div class="card-img w-25 d-flex justify-content-center align-items-center">
      <img src="${meal.recipe.image_url}" alt="" class="rounded-circle">
    </div>
    <div class="card-body text-start">
      <h5 class="card-title fs-3">${meal.recipe.title}</h5>
      <p class="card-text fs-5 text-bold">
      by ${meal.recipe.publisher}
    </div>
  </div>
    `
  }
  // console.log(html);
  document.querySelector('.sidemenu').innerHTML = html;
}

function displayIngrediants() {
  console.log(this.getSelection())
}





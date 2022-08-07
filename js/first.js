var x = []
var row = document.getElementById("rowData");
async function getRecipies(y) {
    //     var req = new XMLHttpRequest();
    // req.open("Get", `https://forkify-api.herokuapp.com/api/search?q=${y}`)
    // req.send();
    // req.addEventListener("readystatechange", function () {
    //     if (req.readyState == 4 && req.status == 200) {
    //         req.response;
    //         // x=req.response; // string
    //         x = JSON.parse(req.response).recipes;
    //         displayData()
    //         console.log(x) // display data of link
    //     }
    // })
    let req = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${y}`)
    let myData = await req.json()
    x = myData.recipes
    console.log(x)
    displayData()
}
getRecipies('pizza');
let newArray;
async function singleDetelis(id) {
    let singleReq = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    let myDataReq = await singleReq.json()
    newArray = myDataReq.recipe
    console.log(newArray.ingredients)
    displayDiteles()
}
let rewDetiles = document.getElementById("modalBody");
function displayDiteles(){
    let string = `
    <img  height="150px" srtring="${newArray.image_url}" class="card-img-top w-100">
    <p>${newArray.ingredients}</P>
    `
    rewDetiles.innerHTML = string;
}
function displayData() {
    var str = "";
    for (var i = 0; i < x.length; i++) {
        str += `
        <div class="col-lg-4 col-m-6">
        <div class="d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
        <button type="button" class="p-0 border-0" data-toggle="modal" data-target="#staticBackdrop">
        <img  height="150px" src="${x[i].image_url}" onclick="singleDetelis(${x[i].recipe_id})" class="card-img-top w-100">
      </button>
      <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="modalBody">
              
            </div>
          </div>
        </div>
      </div>
            <div class="card-body">
              <h5 class="card-title">${x[i].title}</h5>
              <p class="card-text">${x[i].publisher}</p>
              <a href="${x[i].source_url}" target="_blank">Details</a>
            </div>
          </div>
          </div>
        </div>`
    }
    row.innerHTML = str;

}
var links = document.querySelectorAll("nav .nav-link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (eventInfo) {
        // console.log(eventInfo.target) // بتعرض ال تاغ
        var innerWord = eventInfo.target.innerHTML; // بتعرض الي جوا ال تاغ
        // console.log(innerWord)
        getRecipies(innerWord)
    })
}

// Es  or  Es-next    2015


if (true) {
    var x = 10;
}
console.log(x)  //10

for (let i = 0; i < 5; i++) {
    let z = 20;
    console.log(i, z)
}

// function xyz(s,m){
//     if(s==undefined){
//         s=4
//     }
//     if(m==undefined){
//         m=5
//     }
//     console.log(s+m)
// }
// xyz()
// Or
// function xyz(s=10,m=20){
//     console.log(s+m)
// }
// xyz()

// let sos = function(){
//     console.log("sos")
// }
// sos()

// let third = () =>{
//     console.log("arrow function")
// }
// third()

// console.log(this)

let person = {
    userName: " Seme",
    age: 20,
    work: function () {
        console.log(this)
        console.log(this.userName)
    }
}
person.work()



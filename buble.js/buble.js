// document.getElementById('item-2').addEventListener('click', function(event){
//     console.log('item-2 clicked' )
//     event.stopPropagation();
// })
// document.getElementById('list-ul').addEventListener('click', function(){
//     console.log('ulcliced')
// })
// document.getElementById('list-container').addEventListener('click', function(){
//     console.log('section-containeer')
// })

// /  
// const items = document.getElementsByClassName('item');
// console.log(items);
// for(const item of items){
// item.addEventListener('click', function(event){
//     console.log(event.target.parentNode);

// })    
// }
// for display node// 
// const items = document.getElementsByClassName('item');
// console.log(items);
// for(const item of items){
// item.addEventListener('click', function(event){
//     event.target.parentNode.removeChild(event.target);

// })    
// }

// const items = document.getElementsByClassName('item');
// console.log(items);
// for(const item of items){
// item.addEventListener('click', function(event){
//     event.target.parentNode.removeChild(event.target);

// })    
// }

// === event deligate ===  ////
// const listContainer =document.getElementById('list-container').addEventListener('click' ,function(event){
//     // console.log(event.target)
//     event.target.parentNode.removeChild(event.target);
// })


// document.getElementById('add-item').addEventListener('click', function(){
//     const listContainer = document.getElementById('list-container');
//     const li = document.createElement('li');
//     li.classList.add('item');
//     li.innerText = 'brand new item added';
//     listContainer.appendChild(li);
// })

 document.getElementById('addColor1').addEventListener('click', function(){
    document.getElementById('section').style.backgroundColor = 'red';
    document.getElementById('addColor1').style.backgroundColor = 'red';
    document.getElementById('addColor1').style.color = 'white';
    document.getElementById('addColor1').style.border = '1px solid white';
    document.getElementById('body').style.backgroundColor = 'black';


 })
function Color (){
    document.getElementById('section').style.backgroundColor = "pink";
    document.getElementById('addColor2').style.backgroundColor = 'pink';
    document.getElementById('addColor2').style.color = 'white';
    document.getElementById('addColor2').style.border = '1px solid white';
    document.getElementById('body').style.backgroundColor = 'black';


}

document.getElementById('addColor3').addEventListener('click', function(){
    document.getElementById('section').style.backgroundColor = 'blue';
    document.getElementById('addColor3').style.backgroundColor = 'blue';
    document.getElementById('addColor3').style.color = 'white';
    document.getElementById('addColor3').style.border = '1px solid white';
    document.getElementById('body').style.backgroundColor = 'black';

 })
 function Color4 (){
    document.getElementById('section').style.backgroundColor = "orange";
    document.getElementById('addColor4').style.backgroundColor = 'orange';
    document.getElementById('addColor4').style.color = 'white';
    document.getElementById('addColor4').style.border = '1px solid white';
    document.getElementById('body').style.backgroundColor = 'black';

}
document.getElementById('addColor5').addEventListener('click', function(){
    document.getElementById('section').style.backgroundColor = 'tomato';
    document.getElementById('addColor5').style.backgroundColor = 'tomato';
    document.getElementById('addColor5').style.color = 'white';
    document.getElementById('addColor5').style.border = '1px solid white';
    document.getElementById('body').style.backgroundColor = 'black';

 })
 function Color6 (){
    document.getElementById('section').style.backgroundColor = "maroon";
    document.getElementById('addColor6').style.backgroundColor = 'maroon';
    document.getElementById('addColor6').style.color = 'white';
    document.getElementById('addColor6').style.border = '1px solid white';
    document.getElementById('body').style.backgroundColor = 'black';

}
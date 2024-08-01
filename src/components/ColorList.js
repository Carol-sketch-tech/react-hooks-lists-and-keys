import React from "react";
import ColorItem from "./ColorItem";

// function ColorList() {
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink",
//   ];

//   return (
//     <div>
//       <h1>Top 5 CSS Colors</h1>
//       <ol>
//         <li style={{ color: colors[0] }}>{colors[0]}</li>
//         <li style={{ color: colors[1] }}>{colors[1]}</li>
//         <li style={{ color: colors[2] }}>{colors[2]}</li>
//         <li style={{ color: colors[3] }}>{colors[3]}</li>
//         <li style={{ color: colors[4] }}>{colors[4]}</li>
//       </ol>
//     </div>
//   );
// }

// export default ColorList;
  // transforming arrays of data into arrays of JSX elements. 
// understand the need for key prop and when to use it.
 // working with arrays.
//  Say we have an array of colors and we want to display them in a list
// we could do the done above 
// store the prop values in an javascript variable with its value being an array of the colors/
// when passing them to the JSX value elemnt tags, we refer to them with  their indexes.


// however the code above isn't dynamic therefore we need a method to iterate through the items in the array.
// .map()method is the ideal method to make this a JSX elements or mor dynamic.
// here's how we could use .map() method.

export default function ColorList(){
  const colors =[
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
   const colorElements = colors.map((color) => {
    return <li  key={color} //Key prop.
    // the key prop allows React internally to keep track of each element in the array of JSX,
    // So that in the case any element is added, updated or deleted, react can optimize performance and keep track internally of those changes.
    // the key should have a unique value associateed with each element form the array.
    // NOTE---> ANYTIME you are creting and array of JSX elements you must use the key prop.
     style={{color:color}}>
      {color}</li>
   }) ; return (
    <div>
      <h1>Top 5 CS5 Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
   )
}

//Key prop with objects.
// if you have an array of objects its often best to use the object's id as the key.
 const users =[
  {id:1, firstName:"Duane", lastName:"watson"},
  {id:2, firstName:"Duane", lastName:"Johnson"}
 ];
 const usersHeadings = users.map((user)=>{
  return <h1 key={user.id}>{user.firstName}</h1>
 })

//  with non-unique Arrays
// if you hava an array of items that arent tha unique, and you cant use id you might be tempted to use the index.position
// example 
const fib = [0,1,1,2,3,5];
const fibList = fib.map((number,index)=>{
  return<div key={index}>{number}</div>
})

// with nested compounds.
// imagie you wan tot crate a separate component to display each color.
// we'd need to use the key prop on the <ColorItem> component, not the <li>

function ColorList(){
  const colors =[
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const colorElements = colors.map((color)=>{
    return 
    <ColorItem  key={color} color={color}/>}
  )
}
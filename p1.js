    //     //    let a =  document.querySelector("h2");
    //     //    a.innerHTML = a.innerHTML + "k  kj kj fkfk ef";

    //     // let userName = prompt();

    //     // let output = ` your name is:\n @${userName}${userName.length} `;

    //     // const myArray = [1, 2, 3, 4, 5];
    //     // for (const element of myArray) {
    //     //     console.log(element);
    //     // }
        
    //     //     const myObject = {
    //     //     name: 'John',
    //     //     age: 30,
    //     //     profession: 'Developer'
    //     // };
    //     // for (const key in myObject) {
    //     //     console.log(`${key}: ${myObject[key]}`);
    //     // }

    //     // console.log(output);
    //     // let arr = [1,2,3,4,5];
    //     // const as = element => {
    //     //    console.log(element*element);
    //     // };

    //     // arr.map(as);
    //     //         let marks = [10,96,98,100,90];
    //     //    let aray= marks.filter((val) => {
    //     //             return val > 90;
    //     //         })
    //     //         console.log(aray);

    //     // let input  = prompt("enter number");
    //     //     let arr = [];
    //     //    for(let i = 1; i <= input; i++){
    //     //          arr[i-1] = i;
    //     //    }
    //     //    let output = arr.reduce( (prev , next) =>{
    //     //         return prev+next;
    //     //    })
    //     //    let output2 = arr.reduce( (prev , next) =>{
    //     //         return prev*next;
    //     //    })
    //     //   console.log(output2);
    //     //    let cl =  document.getElementsByClassName("box");
    //     //    cl[0].innerHTML = "hwloobe ";
    //     //    cl[1].innerHTML = "hy ";
    //     //    cl[2].innerHTML = "kinh  ";

    //     let btn = document.querySelector("#btn");
    //     console.log(btn);
    //     btn.innerHTML = "hellow";
    //     btn.style.backgroundColor = "red";
    //     btn.style.color = "White";
    //     document.querySelector("body").prepend(btn); 

    //     const op = () =>{
    //         let as = document.querySelector("p");
           
    //         const s1 =()=>{
    //             k=true;
    //             console.log("ho");
    //         }
    //         const s2 =()=>{
    //             k=false;
    //             console.log("kjdd");
    //         }
    //      let a = 20;
    //         if(k==false){
    //         as.classList.add( "s2")
    //           s2();
    //         }
    //        else{
    //             as.classList.add("S1")
    //             s1();
    //     }
    // }

    
    // Light And Dark Mode
//     let btn = document.querySelector("#btn");
// let body = document.querySelector("body");
//     let mode = "light";
//     btn.addEventListener("click" , ()=>{
//         if(mode == "light"){
//             console.log("light");
//             mode = "dark";
//             body.classList.add("dark");;
//             body.classList.remove("light");
//         }
//         else{
//             console.log("dark");;
//             body.classList.add("light");
//             body.classList.remove("dark");
//  mode = "light";

//         }
//     })


//     // Mouse Hover
// btn.addEventListener("mouseover", ()=>{
//     alert("Hey");
// })

const test = document.getElementById("body");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener(
  "mouseenter",
  (event) => {
    // highlight the mouseenter target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);

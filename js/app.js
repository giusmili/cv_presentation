// main event js

document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault()
    console.log("Loaded")
let print_out, iterator, section
let modal = document.querySelector(".modal")
let btn_modal = document.querySelector("aside ul li")

/**
 * 
 * @param {number} number 
 * @returns 
 */
const calc = (number)=>{
    return number
}
print_out = calc(10)
    console.log(print_out)

    // object js
    const user = ({
        firstname: "Militello",
        lastname: "Giuseppe",
        age: 55,
        printf(){
            return `${this.firstname} : ${this.lastname} ${this.age}`
        }
    })

print_out = user.printf()
   console.log(print_out)

//compter les section

section = document.querySelectorAll("section")
console.log(section.length)
    for(row of section){
        console.log(row)
       
    }

// destructuring js and spread operator
const numbers = [25, 12, 30]
/**
 * 
 * @param {number} nb1 
 * @param {number} nb2 
 * @param {number} nb3 
 * @returns 
 */
let calculator = (nb1,nb2,nb3)=>{
    return nb1 + nb2 + nb3
}
// let result = calculator(10,20,30)
// console.log(result)

//calcule

let result = calculator(...numbers) //spread operator
console.log(result)
console.log(...numbers) //décomposition de l'opération

const tab_date = [2021, 5, 25]
let dates = new Date(...tab_date )
console.log(dates)
console.log(...tab_date)

//obejct destructuring
const prenom = {
    yourname: "Gius",
    country: "It"
}
const job = {
    job: "developer"
}
const hobbie ={
    hobbies : "music"

}
const profil = {...prenom, ...job, ...hobbie} //association d'objet
console.table(profil)
for(let index in profil) { console.log(index+" "+profil[index])}

/**
 * 
 * @param {string} msg 
 * @param {number} nombre 
 * @param {string} help 
 * @returns 
 */
const call = (msg, nombre, help)=>{
        return msg+" "+nombre+" "+help;
    }

    let afficher = call("wath?",2021,"bonjour");

    console.log(afficher)

//test noms et méthode reduce
const tab_name = ["html","css","js"]
console.log(...tab_name)
console.log(tab_name.includes("html"))

const reducer = (a, b) => a + b;
result = numbers.reduce(reducer)
console.log(result)


    //function for modale

    let modals = function(){
        let image= this.dataset.image
        let titles = this.dataset.titles
        let contents = this.dataset.contents

        //open modal and injection
        modal.classList.add("modal-active")
        document.querySelector(".modal img").setAttribute("src", image)
        document.querySelector(".modal h2").innerText = titles
        document.querySelector(".modal p").innerText = contents
        console.log(image+' '+titles)
    }


        //  modale de base
         btn_modal.addEventListener("click", modals);
           
           
        
        
        //fermer la fenetre
        modal.addEventListener('click',function(){
            this.classList.remove("modal-active")
    })

   
})


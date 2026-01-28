import React from "react";

export default function Test(){

    function signUp(formData) {
        console.log(Object.fromEntries(formData))
      }
    

    function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        // const email = formData.get("email") 
        // const password = formData.get("password")
        // const EmploymentID = formData.get('employmentStatus')
        // const dietaryName = formData.getAll('dietaryName')
        // const favColor = formData.get("favColor")
        // // Submit the info to a backend
        // formEl.reset()
        // console.log(email)
        // console.log(password)
        // console.log(EmploymentID)
        // console.log(dietaryName)
        // console.log(favColor)
        const data = Object.fromEntries(formData)
        const dietaryName = formData.getAll("dietaryName")
        
        const AllData = {
            ...data,
            dietaryName
        }
        console.log(AllData)
        
        
      }
      
      return (
        <section>
          <h1>Signup form</h1>
          <form 
          onSubmit={handleSubmit} 
        //   action={signUp}
          
          method="post">
            <label htmlFor="email">Email:</label>
            <input id="email" 
            defaultValue="Abioduninaolaji@gmail.com" 
            type="email" name="email" placeholder="joe@schmoe.com" />
            <br />
            
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" defaultValue="Abiodun" />
            <br />
            
            <label htmlFor="description">Description</label>
           
            <textarea id="description" name="description" defaultValue="This is a description"></textarea>
            
            <fieldset>
                <legend>Employment Status</legend>
            <label htmlFor=""  >
            <input type="radio"  name="employmentStatus"  value="Unemployed"  />
                Unployment
             </label>
             <label htmlFor=""  >
            <input type="radio"   name="employmentStatus"  value="Part-time" />
                Part-Time
             </label>
             <label htmlFor=""  >
            <input type="radio"   name="employmentStatus" defaultChecked={true} value="Full-Time" />
                Full-time
             </label>
             </fieldset>

             <fieldset>
                <legend>Dietary Restriction</legend>
            <label htmlFor=""  >
            <input type="checkbox"  name="dietaryName"  value="Eba"  />
                Eba
             </label>
             <label htmlFor=""  >
            <input type="checkbox"   name="dietaryName"  value="Egg" />
                Egg
             </label>
             <label htmlFor=""  >
            <input type="checkbox"   name="dietaryName" defaultChecked={true} value="Bitter-leaf" />
                Bitter-leaf
             </label>
             </fieldset>

            <label htmlFor="facColor"> What is your fav color? </label>
            <select name="favColor" id="favColor" defaultValue="" required>
                <option value="" disabled >-- Choose a color --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option> 
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

           
            <button>Submit</button>
            
          </form>
        </section>
      )
    
//   function signUp (formData) {
//     const email = formData.get("email")
//     const password = formData.get("password")
//     const employmentStatus = formData.get("employmentStatus")
//     console.log(email)
//     console.log(password)
    
//   }

//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form action={signUp}>

//         <label htmlFor="email">Email:</label>
//         <input id="email" defaultValue="Abiodun@gmail.com" type="email" name="email" placeholder="Abiodun@gmail.com" />

//         <label htmlFor="password">Password:</label>
//         <input id="password" defaultValue="password123" type="password" name="password" />

//         <label htmlFor="description">Description:</label>
//         <textarea id="description" name="description" defaultValue="This is a description"></textarea>

//         <fieldset>
//           <legend>Employment Status:</legend>
//           <label>
//             <input type="radio" name="employmentStatus" value="unemployed" />
//             Unemployed
//         </label>
//           <label>
//             <input type="radio" name="employmentStatus" value="part-time" />
//             Part-time
//         </label>
//           <label>
//             <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
//             Full-time
//         </label>
//         </fieldset>

        

//         <button>Submit</button>

//       </form>
//     </section>
//   )
}
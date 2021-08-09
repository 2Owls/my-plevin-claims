import React from "react";

function Form3({ register, shouldDisplay }) {
  return (

    <div style={{ display: shouldDisplay ? "block" : "none" }}>

        <div class="grid grid-flow-row grid-col-3 gap-4"> 

        <div>
        <label htmlFor="email"  class="mr-2">Email:</label>
        <input   
          type="email"
          id="email"                
          name="email"
          placeholder="Enter your email"                
          {...register("email", { required: true } )}   
        />  
        </div> 

        <div>
        <label htmlFor="tel"  class="mr-2">Telephone:</label>
        <input   
          type="tel"
          id="tel"                
          name="tel"
          placeholder="Enter your number"                
          {...register("tel", { required: true } )}   

        />  
        </div>  

        <div>
          <input
              className="float-left m-3"
              type="checkbox"
              id="privacy"                    
              name="privacy"
              value="yes"                
              {...register("privacy", { required: true } )}   
            />
          <label htmlFor="checkbox" className="mr-2 text-sm">By clicking the box and entering your email address &amp; phone number you agree to our Privacy Policy and terms and conditions and to be contacted both by email &amp; phone. Message and data rates apply.</label>               
        </div>                                       

        </div>

    </div>
  );
}

export default Form3;

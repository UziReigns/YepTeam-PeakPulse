import './Contact.css';


function Contact() {
    

  return (
        <div>
            <div className="flex">
                <label>
                    First Name    
                    <input/>
                </label>
                <label>
                    Last Name 
                    <input/>
                </label>
            </div>  
            <div className="flex">
                <label>
                    Email
                    <input/>
                </label>
                <label>
                    Phone Number
                    <input/>
                </label>
            </div>  
            <div className="flex">
                <label>
                    Subject
                    <input className="input-full"/>
                </label >
                
            </div>
            <div className="flex">
                <label>
                    Message
                    <input className="input-full"/>
                </label>
                
            </div>  
        </div>
  ) 
}

export default Contact
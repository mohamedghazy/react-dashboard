import './newuser.css'
const Newuser =()=>{
   return(
      <div className="newuser">
         <h1 className='newUserTitle' > New User</h1>
         <form className='newUserForm'>
            <div className='newUserItem'>
               <label>User Name</label>
               <input type='text' placeholder='john' />
            </div>
            <div className='newUserItem'>
               <label>Full Name</label>
               <input type='text' placeholder='john Snow' />
            </div>
            <div className='newUserItem'>
               <label>Email</label>
               <input type='email' placeholder='john@gmial.com' />
            </div>
            <div className='newUserItem'>
               <label>Password</label>
               <input type='password' placeholder='password' />
            </div>
            <div className='newUserItem'>
               <label>Phone</label>
               <input type='text' placeholder='+2 012 456 789 13' />
            </div>
            <div className='newUserItem'>
               <label>Address</label>
               <input type='text' placeholder='New York | USA' />
            </div>
            <div className='newUserItem'>
               <label>Gender</label>
               <div className='newUserGender'>
               <input type='radio' name='gender' id='male' value='male' />
               <label for='male' >Male</label>
               <input type='radio' name='gender' id='male' value='female' />
               <label for='female' >Female</label>
               </div>
            </div>
            <div className="newUserItem">
               <label>Active</label>
               <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
            </div>
            <button className="newUserButton">Create</button>
         </form>
      </div>
   )
}
export default Newuser
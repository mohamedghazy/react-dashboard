import './topBar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar =()=>{
   return (
      <div className="topbar">
         <div className="topbarWrapper">
            <div className="topLeft">
                  <span className='logo'>
                     React Dashboard
                  </span>
            </div>
            <div className="topRight">
               <div className='topbarIconsContainer'>
                  <NotificationsIcon/>
                  <span className='iconBadge'>2</span>
               </div>
               <div className='topbarIconsContainer'>
                  <LanguageIcon/>
                  <span className='iconBadge'>2</span>
               </div>
               <div className='topbarIconsContainer'>
                  <SettingsIcon/>
               </div>
               <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='mohamed ghazy' className='topbaravatar'/>
            </div>
         </div>
      </div>
   )
}
export default Topbar
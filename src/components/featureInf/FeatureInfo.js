import './featureInf.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
const FeaturedInfo =()=>{
   return (
      <div className='featured' >
         <div className='featuredItem'>
            <span className='featuredTitle'>Revanue</span>
            <div className='featuredMoneyContainer'>
               <span className='featuredMoney'>$2,415</span>
               <span className='featuredMoneyRate'>
                  -2,415
                  <ArrowDownwardIcon className=' featuredIcon negative'/>
               </span>
            </div>
            <span className='featuredSub'> Comared to last Month </span>
         </div>
         <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
               <span className='featuredMoney'>$2,45</span>
               <span className='featuredMoneyRate'>
                  -2,415
                  <ArrowDownwardIcon className=' featuredIcon negative'/>
               </span>
            </div>
            <span className='featuredSub'> Comared to last Month </span>
         </div>
         <div className='featuredItem'>
            <span className='featuredTitle'>Cost</span>
            <div className='featuredMoneyContainer'>
               <span className='featuredMoney'>$2,41</span>
               <span className='featuredMoneyRate'>
                  +2,415
                  <ArrowUpwardIcon className=' featuredIcon'/>
               </span>
            </div>
            <span className='featuredSub'> Comared to last Month </span>
         </div>
      </div>
   )
}
export default FeaturedInfo
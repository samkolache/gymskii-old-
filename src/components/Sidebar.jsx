import samPFP from '../assets/sam-pfp.jpg'
import SideItem from './SideItem'

export default function Sidebar() {
    return (
      <div>
        <aside className="w-72 h-screen bg-neutralLighter pl-8 pr-8 flex flex-col justify-between">
          <div class = "flex flex-col gap-5">
             {/* first section, logo and close */}
          <div className="flex items-center justify-between pt-4"> 
            <h1 className='text-3xl font-bold'>gym<span className='text-brand'>skii</span></h1>
            <span className=" text-4xl material-icons">chevron_left</span>
          </div>
          {/* profile info  */}
          <div className="flex flex-col gap-2 bg-neutralLight rounded-lg items-center py-6">
            <img src= {samPFP}
                  className='w-28 h-28 rounded-full object-cover'   
            />
            <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-xl'>Sam Kotecha</h2>
            <p className='text-brand font-semibold text-lg'>GymRat</p>
            </div>
          </div>
          {/* nav links */}
          <nav className='flex flex-col gap-4'>
            <SideItem icon = "dashboard" name = "Dashboard" path = "/dashboard" />
            <SideItem icon = "fitness_center" name = "Workout History" path = "/dashboard/workout-history" />
            <SideItem icon = "trending_up" name = "Progress" path = "/progress" />
            <SideItem icon = "restaurant" name = "Diet Tracker" path = "/diet-tracker" />
          </nav>
          {/* button to log workout */}
          <button
            className='bg-brand text-white font-medium rounded-lg px-5 py-3 w-3/4 mx-auto'
          >+  Log Workout</button>
          </div>
       
          {/* utility links */}
          <div className='pb-4 flex flex-col gap-4'>
          <SideItem icon = "settings" name = "Settings" path = "settings" />
          <SideItem icon = "help" name = "FAQ" path = "faq" />
          </div>
        </aside>
      </div>
    )
  }
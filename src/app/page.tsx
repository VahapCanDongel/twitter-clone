import LeftNav from "./components/LeftNav/LeftNav";
import WhatIsHappening from "./components/WhatIsHappening/WhatIsHappening";
import WhoToFollow from "./components/WhoToFollow/WhoToFollow";

export default function Home() {
  return (
    <main className="flex">
      <LeftNav/> 

      
      <div className="border-l-[1px] border-r-[1px] w-[35%]  border-gray-600">
        {/* Middle Home Section */}
      </div>
  
      <div className="flex flex-col justify-center items-center ">
        {/* Search Bar */}
        <input type="serch" placeholder="Search Twitter" className="rounded-3xl p-[12px] my-2 w-[350px] bg-gray-800 focus:outline-none focus:outline-[1px] focus:outline-blue-500 text-white"/>
        <div className="flex flex-col p-8 gap-4">
          <WhatIsHappening/>
          <WhoToFollow/>
        </div>
      
      </div>
  
  
    </main>
  )
}

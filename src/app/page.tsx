import LeftNav from "./components/LeftNav/LeftNav";
import WhatIsHappening from "./components/WhatIsHappening/WhatIsHappening";
import WhoToFollow from "./components/WhoToFollow/WhoToFollow";

export default function Home() {
  return (
    <main className="flex">
      <LeftNav/> 

      
      <div className="border-l-[1px] border-r-[1px] w-[35%] h-screen border-gray-600">
        {/* Middle Home Section */}
      </div>
  
      <div>
        {/* Search Bar */}

        <div className="flex flex-col p-8 gap-4">
          <WhatIsHappening/>
          <WhoToFollow/>
        </div>
      
      </div>
  
  
    </main>
  )
}

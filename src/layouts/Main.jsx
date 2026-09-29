import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"

const Main = () => {
  return (
<div className="font-sans overflow-x-hidden bg-white w-full">
      
      {/* 1. Hero Section Wrapper (শুধুমাত্র এই অংশটুকু নীল থাকবে) */}
      <div className="w-full bg-[#113de5] relative flex flex-col lg:h-screen">
        <Navbar />
        <Header />
      </div>

      {/* 2. Next Sections (এগুলো ইমেজের ঠিক নিচ থেকে সাদা ব্যাকগ্রাউন্ডে শুরু হবে) */}
      <div className="w-full min-h-[500px] py-10">
        <h2 className="text-center text-2xl text-black font-bold">
          Next Component Goes Here
        </h2>
        {/* <YourNextComponent /> */}
      </div>
      
    </div>
  )
}

export default Main

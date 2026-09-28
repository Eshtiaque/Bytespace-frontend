import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"

const Main = () => {
  return (
    <div className="h-screen w-full bg-[#113de5] relative flex flex-col font-sans overflow-hidden">
      
      
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
             backgroundSize: `80px 80px`
           }}>
      </div>

      <Navbar />
      <Header />
      
    </div>
  )
}

export default Main

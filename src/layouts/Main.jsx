import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"

const Main = () => {
  return (
    <div className="min-h-screen bg-[#0038ff] relative font-sans overflow-hidden">
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
             backgroundSize: `80px 80px`
           }}>
      </div>

      {/* Components */}
      <Navbar />
      <Header />
      
    </div>
  )
}

export default Main

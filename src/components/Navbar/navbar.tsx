import './style.scss'

export const Navbar = () => {
  return (
    <div className="fixed h-20 px-10 w-screen z-30">
      <div className="flex flex-row py-5">
        <span className="text-white text-3xl font-bold text-center hover:text-red-500">
          Sosna Dev
        </span>
        <div className="ml-55 mt-5 text-xl"></div>
      </div>
    </div>
  )
}

export default Navbar

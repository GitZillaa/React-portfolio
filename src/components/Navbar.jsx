import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaGitlab } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex intems-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex intes-center justify-center gap-4 text-2xl">
    <FaGithub />
    <FaLinkedin />
    <FaGitlab />
    </div>
    </nav>
  )
}

export default Navbar
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
  <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white text-center py-4 mt-auto">
    
    <div className="flex justify-center container mx-auto">
           <Link to="/" className="text-white hover:text-gray-400 mx-2">
            Anasayfa
            </Link>
            <Link to="/hakkimizda" className="text-white hover:text-gray-400 mx-2">
            Hakkımızda
            </Link>
            <Link to="/iletisim" className="text-white hover:text-gray-400 mx-2">
            İletişim
            </Link>
            <Link to="/gizlilik-politikasi" className="text-white hover:text-gray-400 mx-2">
            Gizlilik Politikası
            </Link>

    </div>
    
     <div className="flex justify-center container mx-auto m-2">
        <a href="https://www.instagram.com/egzersizrehberi/"  className="text-white hover:text-gray-400 mx-2">
           <FaInstagram className="text-2xl hover:text-blue-500 hover:scale-110 hover:transition-all " />
        </a>
<a href="https://www.x.com/egzersizrehberi/"  className="text-white hover:text-gray-400 mx-2">
           <FaTwitter className="text-2xl hover:text-blue-500 hover:scale-110 hover:transition-all" />
        </a>
     
        <a href="https://www.facebook.com/egzersizrehberi/"  className="text-white hover:text-gray-400 mx-2">
           <FaFacebook className="text-2xl hover:text-blue-500 hover:scale-110 hover:transition-all"  />
        </a>
     </div>
    

        <p>© 2025 Egzersiz Rehberi - Tüm hakları saklıdır.</p>
      </footer>
  )
}

export default Footer

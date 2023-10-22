import { Link } from "react-router-dom";


const Header = () => {
  const naveLink= <>
  <li><Link to='/singin'><h1 className="text-xl font-extrabold">Log IN</h1></Link></li>
  <li><Link to ='/singup'><h1 className="text-xl font-extrabold">Sing UP</h1></Link></li>
  </>
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-2 pl-3">
      {naveLink}
      
    </ul>
  </div>
</div>

    );
};

export default Header;
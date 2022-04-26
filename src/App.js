import { Link, Outlet } from "react-router-dom";




function App() {



  return (
    <div>
      <div>
        Site Header
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </ul>





        </nav>
      </div>
      <hr></hr>
      <div>
        <Outlet></Outlet>
      </div>
      <hr></hr>
      <div>
        Site Footer
      </div>

    </div>

  );


}

export default App;
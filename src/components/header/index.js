import { Link } from "react-router-dom"
import headerLinksData from "../../data/headerLinks"

export const Header = () => {
    return (
        <div class="header-container">
        <div class="header">
          <div class="logo" >

            <Link class="primary-color" to="/">
              <h2 class="main-title">
                magni<span class="bold-main-title">Z</span>ent <span class="bold-main-title secondary-color"></span>
              </h2>
            </Link>
  
          </div>
  
          <div class="header-main-content">
            <ul class="flex header-inner-container">
              <Link class="secondary-color" to="/">
                <li class="header-item">Home</li>
                </Link>
                <Link class="secondary-color" to="/product-list">
                <p class="header-item primary-color">Shop Now</p>
              </Link>
            </ul>
          </div>
  
          <div class="search-bar-container search-bar-inline">
            <div class="search-bar">
              <input class="input-search" type="text" placeholder="Search your favorite brand and products" />
              <span class="material-icons search-icon">
                search
              </span>
            </div>
          </div>
  
          <div class="icon-container flex">
            {headerLinksData.map(item => (
              <div class="icon-unit" key={item.id}>
              <Link class="flex-column flex-center secondary-color header-icon"  to={item.link}>
                <span class="material-icons icon"> {item.icon} </span>
                <p>{item.desc}</p>
              </Link>
            </div>
            ))}
          </div>

          <span class="material-icons icon hide-menu menu-logo"> menu </span>
        </div>

        <hr class="hr-line header-divider" />
        
        <div class="search-bar-container search-bar-block">
          <div class="search-bar flex">
            <input class="input-search" type="text" placeholder="Search your favorite brand and products" />
            <span class="material-icons search-icon flex-center"> search </span>
          </div>
        </div>
      </div>
    )
}
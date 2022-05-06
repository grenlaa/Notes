import React from "react";

const ControlNav = () => {
    return (
        <header>
            <nav class="navbar navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="position-sticky pt-3">
                            <ul className="nav flex-column">


                                <li className="nav-item">
                                    <a className="nav-link" href="/Notes">
                                        <span data-feather="shopping-cart"></span>
                                        Заметки
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cked">
                                        <span data-feather="shopping-cart"></span>
                                        Ckeditor
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default ControlNav;
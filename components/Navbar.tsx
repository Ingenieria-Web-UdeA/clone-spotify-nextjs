const Navbar = () => {
  return (
    <nav>
      <div className='navigation-icon-container'>
        <img src='/media/icons/go-back.png' />
        <button onclick='clickBoton()'>
          <img src='/media/icons/go-forward.png' />
        </button>
      </div>
      <div className='auth-container'>
        <span className='sign-up'>Sign up</span>
        <div className='login-button'>
          <span>Log in</span>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };

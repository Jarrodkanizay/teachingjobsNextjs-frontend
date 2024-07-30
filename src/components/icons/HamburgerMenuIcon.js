const HamburgerMenuIcon = ({ onClick, isOpen }) => {
  const hamburgerIcon = 'M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7';
  const crossIcon = 'M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7';

  return (
    <div className="hamburger-menu-icon" onClick={onClick}>
      <svg
        className="hamburger-menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 10"
        stroke="black"
        stroke-width=".6"
        fill="transparent"
        stroke-linecap="round"
      >
        <path
          d={isOpen ? crossIcon : hamburgerIcon}
          style={{ transition: 'd 0.3s' }}
        />
      </svg>
    </div>
  );
};

export default HamburgerMenuIcon;

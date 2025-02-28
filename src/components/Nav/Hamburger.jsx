import MobileMenu from '../../assets/images/mobile-menu.svg';

export default function Hamburger(props) {
  return (
    <div
      className="items-center w-10 h-11 cursor-pointer p-2.5"
      onClick={props.toggle}
    >
      <img
        src={MobileMenu}
        alt="Personal Logo"
        className="transition-transform duration-500 ease-in-out"
      />
    </div>
  );
}

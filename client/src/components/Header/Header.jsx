import "./Header.scss";
import logo from './../../assets/images/logo.png';

export default function () {
  return (
    <header className="header">
      <h1 className="header__title">Animal Rescue</h1>
      <img className="header__icon" src={logo} alt="logo"/>
    </header>
  );
}

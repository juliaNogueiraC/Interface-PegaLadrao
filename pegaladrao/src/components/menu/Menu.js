import './Menu.css';
import Icon from '../../img/Icon.png';

function Menu() {
  return (
    <div class="topnav">
      <img src={Icon} width="70" height="70" alt=""></img>
      <div class="topnav-right">
        <a class="active" href="#">Home</a>
        <a href="#">Registrar Ocorrência</a>
        <a href="#">Ver ocorrências de um local</a>
      </div>
    </div>
  );

}
export default Menu;
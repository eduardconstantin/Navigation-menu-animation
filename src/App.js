import style from './style/App.module.css';
import Menu from './components/Menu';

export default function App() {
  return (
    <div className={style.App}>
      <Menu/>
    </div>
  );
}
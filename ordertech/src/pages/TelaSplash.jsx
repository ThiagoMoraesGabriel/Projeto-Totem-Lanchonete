
import { useNavigate } from 'react-router-dom';
import styles from './TelaSplash.module.css';

export default function TelaSplash({ executarComAtraso }) {
    const navegar = useNavigate();
    return (
        <div
            className={styles['tela-splash']}
            onClick={() => executarComAtraso(() => navegar('/local'))}>
            <img src="/img/banner.jpeg" className={styles["banner-img"]} alt="Banner Promocional" />
            <h1 className={styles['texto-iniciar']}>Toque na tela para iniciar</h1>
        </div>
    );
}

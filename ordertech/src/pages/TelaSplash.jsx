
import { useNavigate } from 'react-router-dom';
import styles from './TelaSplash.module.css';

export default function TelaSplash({ executarComAtraso }) {
    const navegar = useNavigate();
    return (
        <div
            className={styles['tela-splash']}
            onClick={() => executarComAtraso(() => navegar('/local'))}>
            <div className={styles['banner-placeholder']}> <img src="../../public/img/banner.jpeg"/> </div>
            <h1 className={styles['texto-iniciar']}>Toque na tela para iniciar</h1>
        </div>
    );
}

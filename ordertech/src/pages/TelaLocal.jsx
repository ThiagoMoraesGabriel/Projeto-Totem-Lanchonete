
import { useNavigate } from 'react-router-dom';
import styles from './TelaLocal.module.css';

export default function TelaLocal({ executarComAtraso, setLocal }) {
  const navegar = useNavigate();

  const escolherLocal = (opcaoLocal) => {
    executarComAtraso(() => {
      setLocal(opcaoLocal);
      navegar('/menu');
    });
  };

  return (
      <div className={styles['tela-local']}>
          <h2 className={styles['titulo']}>Como você vai consumir?</h2>
          <div className={styles['opcao-card']} onClick={() => escolherLocal('AQUI')}>
              <span className={styles['icone-local']}>🪑</span>
              <h2>Comer Aqui</h2>
          </div>
          <div className={styles['opcao-card']} onClick={() => escolherLocal('LEVAR')}>
              <img
                  src="/img/pacote.jpeg"
                  alt="Para Levar"
                  className={styles['icone-local']}
                  style={{
                      width: '150px',
                      height: '150px',
                      objectFit: 'contain',
                      marginBottom: '20px',
                  }}
              />
              <h2>Para Levar</h2>
          </div>
      </div>
  );
}

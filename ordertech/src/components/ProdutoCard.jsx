import styles from './ProdutoCard.module.css';

export default function ProdutoCard({
    produto,
    onClick,
    nomeOpcao,
    precoExtra,
    iconeVisual,
    fontSize,
}) {
    const precoCalculado = produto.price + (precoExtra || 0);
    const nomeExibicao = nomeOpcao || produto.name;
    const imagemExibicao = iconeVisual || produto.image;

    return (
        <div className={styles['produto-card']} onClick={onClick}>
            <div className={styles['produto-img-container']} style={fontSize ? { fontSize } : {}}>
                {imagemExibicao ? (
                    <img
                        src={imagemExibicao}
                        alt={nomeExibicao}
                        className={styles['produto-imagem']}
                    />
                ) : (
                    <span className={styles['produto-placeholder']}>{nomeExibicao}</span>
                )}
            </div>
            <h3 className={styles['produto-titulo']}>{nomeExibicao}</h3>
            <p className={styles['produto-preco']}>
                R$ {precoCalculado.toFixed(2).replace('.', ',')}
            </p>
        </div>
    );
}

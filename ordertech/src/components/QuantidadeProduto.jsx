import styles from './QuantidadeProduto.module.css';

export default function QuantidadeProduto({
    produtoAtivo,
    variacaoSelecionada,
    quantidade,
    setQuantidade,
    executarComAtraso,
    setVariacaoSelecionada,
    setProdutoAtivo,
    adicionarAoCarrinho,
}) {
    const totalCalculado = (produtoAtivo.price + variacaoSelecionada.preco) * quantidade;

    return (
        <div className={styles['quantity-container']}>
            <button
                className={styles['btn-voltar-inline']}
                onClick={() => executarComAtraso(() => setVariacaoSelecionada(null))}>
                ← Voltar
            </button>

            <h2 className={styles['product-title']}>
                {produtoAtivo.name} ({variacaoSelecionada.nome})
            </h2>

            <div className={styles['produto-img-container']}>
                {produtoAtivo.image ? (
                    <img
                        src={produtoAtivo.image}
                        alt={produtoAtivo.name}
                        className={styles['produto-imagem']}
                    />
                ) : (
                    <span className={styles['produto-placeholder']}>Sem imagem</span>
                )}
            </div>

            <div className={styles['quantity-controls']}>
                <button
                    className={styles['btn-qty']}
                    onClick={() => setQuantidade(Math.max(1, quantidade - 1))}>
                    -
                </button>
                <span className={styles['qty-display']}>{quantidade}</span>
                <button className={styles['btn-qty']} onClick={() => setQuantidade(quantidade + 1)}>
                    +
                </button>
            </div>

            <h2 className={styles['total-price']}>
                Total: R$ {totalCalculado.toFixed(2).replace('.', ',')}
            </h2>

            <div className={styles['quantity-actions']}>
                <button
                    className={styles['btn-cancelar']}
                    onClick={() =>
                        executarComAtraso(() => {
                            setProdutoAtivo(null);
                            setVariacaoSelecionada(null);
                        })
                    }>
                    Cancelar
                </button>
                <button className={styles['btn-adicionar']} onClick={adicionarAoCarrinho}>
                    Adicionar ao Pedido
                </button>
            </div>
        </div>
    );
}

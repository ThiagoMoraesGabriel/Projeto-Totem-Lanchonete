import { useNavigate } from 'react-router-dom';
import styles from './TelaModificarItem.module.css';

export default function TelaModificarItem({
    itemParaModificar,
    setItemParaModificar,
    indiceModificacao,
    carrinho,
    setCarrinho,
    executarComAtraso,
}) {
    const navegar = useNavigate();

    // Prevenção de erro caso o item não tenha carregado
    if (!itemParaModificar) return null;

    const totalCalculado = itemParaModificar.price * itemParaModificar.quantity;

    return (
        <div className={styles['tela-review']}>
            <h2 className={styles['titulo-tela']}>Modificar Item</h2>

            <div className={styles['quantity-container']}>
                <h2 className={styles['product-title']}>{itemParaModificar.name}</h2>

                <div className={styles['produto-img-container']}>
                    {itemParaModificar.image ? (
                        <img
                            src={itemParaModificar.image}
                            alt={itemParaModificar.name}
                            className={styles['produto-imagem']}
                        />
                    ) : (
                        <span className={styles['produto-placeholder']}>
                            {itemParaModificar.name}
                        </span>
                    )}
                </div>

                <div className={styles['quantity-controls']}>
                    <button
                        className={styles['btn-qty']}
                        onClick={() =>
                            setItemParaModificar({
                                ...itemParaModificar,
                                quantity: Math.max(1, itemParaModificar.quantity - 1),
                            })
                        }>
                        -
                    </button>
                    <span className={styles['qty-display']}>{itemParaModificar.quantity}</span>
                    <button
                        className={styles['btn-qty']}
                        onClick={() =>
                            setItemParaModificar({
                                ...itemParaModificar,
                                quantity: itemParaModificar.quantity + 1,
                            })
                        }>
                        +
                    </button>
                </div>

                <h2 className={styles['total-price']}>
                    Total: R$ {totalCalculado.toFixed(2).replace('.', ',')}
                </h2>

                <div className={styles['quantity-actions']}>
                    <button
                        className={styles['btn-adicionar']}
                        onClick={() =>
                            executarComAtraso(() => {
                                const novoCarrinho = [...carrinho];
                                novoCarrinho[indiceModificacao] = itemParaModificar;
                                setCarrinho(novoCarrinho);
                                navegar('/resumo');
                            })
                        }>
                        Salvar Alterações
                    </button>

                    <button
                        className={styles['btn-remover']}
                        onClick={() =>
                            executarComAtraso(() => {
                                setCarrinho(carrinho.filter((_, i) => i !== indiceModificacao));
                                navegar('/resumo');
                            })
                        }>
                        Remover Item
                    </button>

                    <button
                        className={styles['btn-voltar']}
                        onClick={() => executarComAtraso(() => navegar('/resumo'))}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

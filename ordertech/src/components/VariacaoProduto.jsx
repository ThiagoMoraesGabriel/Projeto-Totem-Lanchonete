import styles from './VariacaoProduto.module.css';
import ProdutoCard from './ProdutoCard';

export default function VariacaoProduto({
    produtoAtivo,
    selecionarVariacao,
    executarComAtraso,
    setProdutoAtivo,
}) {
    return (
        <div className={styles['options-container']}>
            <button
                className={styles['btn-voltar-inline']}
                onClick={() => executarComAtraso(() => setProdutoAtivo(null))}>
                ← Voltar
            </button>

            <h2 className={styles['options-title']}>Escolha a opção:</h2>

            <div className={styles['produtos-grid']}>
                {produtoAtivo.category.name === 'Lanches' ? (
                    // CASO 1: Lanches → "Só o lanche" (sem acréscimo) e "Combo" (+R$15)
                    <>
                        <ProdutoCard
                            produto={produtoAtivo}
                            onClick={() => selecionarVariacao('Só o lanche', 0)}
                            nomeOpcao="Só o lanche"
                        />
                        <ProdutoCard
                            produto={produtoAtivo}
                            onClick={() => selecionarVariacao('Combo', 15.0)}
                            nomeOpcao="Combo"
                            precoExtra={15.0}
                            iconeVisual=""
                        />
                    </>
                ) : produtoAtivo.category.name === 'Acompanhamentos' ||
                  produtoAtivo.category.name === 'Bebidas' ? (
                    // CASO 2: Acompanhamentos e Bebidas → Pequeno / Médio / Grande
                    <>
                        <ProdutoCard
                            produto={produtoAtivo}
                            onClick={() => selecionarVariacao('Pequeno', 0)}
                            nomeOpcao="Pequeno"
                            fontSize="2rem"
                        />
                        <ProdutoCard
                            produto={produtoAtivo}
                            onClick={() => selecionarVariacao('Médio', 3.0)}
                            nomeOpcao="Médio"
                            precoExtra={3.0}
                            fontSize="2.8rem"
                        />
                        <ProdutoCard
                            produto={produtoAtivo}
                            onClick={() => selecionarVariacao('Grande', 5.0)}
                            nomeOpcao="Grande"
                            precoExtra={5.0}
                            fontSize="3.5rem"
                        />
                    </>
                ) : (
                    // CASO 3: Sobremesas → Tamanho Único (sem extra)
                    <ProdutoCard
                        produto={produtoAtivo}
                        onClick={() => selecionarVariacao('Tamanho Único', 0)}
                        nomeOpcao="Tamanho Único"
                    />
                )}
            </div>
        </div>
    );
}

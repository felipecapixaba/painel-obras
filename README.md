# Painel de Obras — Capixaba Shop

Aplicativo web que transforma a planilha de custos de uma construtora em um painel
de gestão: custo realizado contra orçado, obra por obra, etapa por etapa, fornecedor
por fornecedor.

**Acesse:** https://felipecapixaba.github.io/painel-obras/

## Como usar

1. Abra o endereço acima no celular ou no computador.
2. **Carregar a planilha de custos da empresa** e escolha o arquivo `.csv`.
3. Confira as colunas que o app reconheceu e corrija o que estiver errado.
4. O painel é montado na hora.

Quem quiser só conhecer, a opção **Abrir a demonstração** usa uma construtora
fictícia com quatro obras e doze meses de lançamentos.

## Onde ficam os dados

No próprio aparelho, no armazenamento do navegador. **Nenhuma planilha é enviada
para a internet** — não existe servidor recebendo esses dados. Trocar de aparelho,
limpar os dados do navegador ou usar uma aba anônima significa carregar a planilha
de novo.

## O que a planilha precisa ter

Uma linha por lançamento e a primeira linha com os nomes das colunas.

| Coluna | Obrigatória | Observação |
|---|---|---|
| Data | sim | `31/12/2026` ou `2026-12-31` |
| Valor realizado | sim | o que foi gasto |
| Valor orçado | não | sem ela não há saldo de orçamento |
| Obra | não | vira o gráfico principal e um filtro |
| Etapa | não | vira gráfico e filtro |
| Fornecedor | não | vira gráfico e filtro |
| Tipo, Descrição, Status | não | aparecem na tabela |

Os nomes não precisam ser exatos: o app reconhece `Empreendimento` por obra,
`Credor` por fornecedor, `Valor Previsto` por orçado, e assim por diante. O que ele
não acertar sozinho, você corrige na tela de conferência.

Aceita CSV separado por vírgula ou por **ponto e vírgula** (o padrão do Excel em
português), com acentuação em UTF-8 ou Windows-1252.

## Instalar como aplicativo

- **Android/Chrome:** menu do navegador → *Instalar aplicativo*
- **iPhone/Safari:** botão de compartilhar → *Adicionar à Tela de Início*
- **Computador:** ícone de instalar na barra de endereço

Depois de instalado, abre sem internet.

---

Este diretório é gerado — não editar à mão. O código-fonte (motor, camada de
aplicativo e ferramentas de build) vive fora deste repositório, e o app é remontado
com `node ferramentas/gerar-app.js`.

Capixaba Shop — Trabalha e Confia

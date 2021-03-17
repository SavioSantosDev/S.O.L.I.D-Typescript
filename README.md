# S.O.L.I.D-Typescript
Repositório para o entendimento dos 5 princípios S.O.L.I.D utilizando Typescript.

Será utilizado um programa de carrinho de compras com funcionalidades para adicionar/remover itens, verificar se o carrinho está vazio, calcular o valor total dos itens do carrinho, checar e finalizar o pedido.

A pasta `src/legacy` contém o arquivo inicial de carrinho de compras com todas as funcionalidades acima.

## S - Single responsability principle || Princípio da responsabilidade única

Todas as entidades (classes, módulos, métodos...) devem ter apenas uma responsabilidade, por exemplo, se for desenvolvido um programa para eccomerce, as responsabilidades deverão ser abstraídas em várias classes, como carrinho de compras, envio de email, envio de mensagens informativas, verificação dos produtos no carrinho... e assim por diante.

- Atualmente o carrinho tem a responsabilidade de gerenciar os ítens do carrinho, checar e confirmar o pedido. Tudo será abstraído em outras classes, novas funcionalidades foram adicionadas e o arquivo `main.ts` será utilizado para instanciar tudo.

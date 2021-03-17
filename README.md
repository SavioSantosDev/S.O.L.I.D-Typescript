# S.O.L.I.D-Typescript
Repositório para o entendimento dos 5 princípios S.O.L.I.D utilizando Typescript.

Será utilizado um programa de carrinho de compras com funcionalidades para adicionar/remover itens, verificar se o carrinho está vazio, calcular o valor total dos itens do carrinho, checar e finalizar o pedido.

A pasta `src/legacy` contém o arquivo inicial de carrinho de compras com todas as funcionalidades acima.

## S - Single responsability principle || Princípio da responsabilidade única

As classes devem ter apenas uma responsabilidade, por exemplo, se for desenvolvido um programa para eccomerce, as responsabilidades deverão ser abstraídas em várias classes, como carrinho de compras, envio de email, envio de mensagens informativas, verificação dos produtos no carrinho... e assim por diante.

- Em legacy o carrinho tem a responsabilidade de gerenciar os ítens do carrinho, checar e confirmar o pedido. Tudo será abstraído em outras classes, novas funcionalidades foram adicionadas e o arquivo `main.ts` será utilizado para instanciar tudo.

## O - Open/Closed principle || Princípio do aberto/fechado

Todas as entidades (classes, módulos, métodos...) devem ser abertas para expansão e fechadas para a modificação.

Será adicionado a funcionalidade de cupom de descontos de uma forma que não seja necessário modificar nossas entidades para adicionar/remover descontos em nosso programa e que ao mesmo tempo seja possível expandir novas funcionalidades em nossa aplicação.

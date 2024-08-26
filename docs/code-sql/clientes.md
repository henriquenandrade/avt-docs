# CLIENTES

Comandos SQL para manipular a tabela de clientes.

> ### IMPORTANTE!
> É sempre recomendado realizar um **backup**<br>
> do banco de dados caso ocorra algum problema

## Limite de crédito

Comando para inserir um padrão de limite de crédito em
todos os clientes que estão com o seu limite em 0, ou seja,
não informado o limite.

> OBSERVAÇÃO:
> - Em  “x”, você colocará o limite que será<br>
> em todos os clientes com o limite 0.

```sql
UPDATE CLIENTES SET LMTE_CREDITO = x WHERE LMTE_CREDITO = 0
```
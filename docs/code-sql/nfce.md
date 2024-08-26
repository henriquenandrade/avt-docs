# NFC-e

Comandos SQL para manipular a tabela de NFC-e.

> ### IMPORTANTE!
> É sempre recomendado realizar um **backup** do banco de dados,<br>
> caso ocorra algum problema podemos retornar a cópia do banco.

## Mudar o status NFC-e

Comando para mudar o status da NFCe. Nesse comando você pode mudar
para **‘INUTILIZADO’** ou ainda preencher como **‘CANCELADO’** ou **‘AUTORIZADO’**.

Lembrando, para mudar a nfce que você quer, basta colocar o statuse<br>
o número da nfce a ser mudada

> **OBSERVAÇÕES**:
> - Em  “XX”, você colocará o numéro da NFC-e que vai<br>
> alterar o status. Não esquecer da cláusula **WHERE**.
> - O valor de NFCE_STATUS é sempre escrito em maiúsculo!

```sql
UPDATE NFCE SET NFCE_STATUS = 'INUTILIZADO' WHERE NFCE_NUMERO = XX
```
# Cálculo dos dígitos verificadores de CNPJ alfanumérico

## 1. Cálculo dos dígitos verificadores

O CNPJ alfanumérico é composto por doze caracteres alfanuméricos e dois dígitos verificadores numéricos.  
Os dígitos verificadores (DV) são calculados a partir dos doze primeiros caracteres em duas etapas, utilizando o módulo de divisão 11 e pesos distribuídos de 2 a 9.

### 1.1. Cálculo do primeiro dígito verificador

Para cada um dos caracteres do CNPJ, atribuir o valor da coluna **"Valor para cálculo do DV"**, conforme a tabela abaixo (ou subtrair 48 do **"Valor ASCII"**):

# Tabela Resumo

| CNPJ Alfanumérico (números e letras) | Valor ASCII | Valor para cálculo do DV |
| ------------------------------------ | ----------- | ------------------------ |
| 0                                    | 48          | 0                        |
| 1                                    | 49          | 1                        |
| 2                                    | 50          | 2                        |
| 3                                    | 51          | 3                        |
| 4                                    | 52          | 4                        |
| 5                                    | 53          | 5                        |
| 6                                    | 54          | 6                        |
| 7                                    | 55          | 7                        |
| 8                                    | 56          | 8                        |
| 9                                    | 57          | 9                        |
| A                                    | 65          | 17                       |
| B                                    | 66          | 18                       |
| C                                    | 67          | 19                       |
| D                                    | 68          | 20                       |
| E                                    | 69          | 21                       |
| F                                    | 70          | 22                       |
| G                                    | 71          | 23                       |
| H                                    | 72          | 24                       |
| I                                    | 73          | 25                       |
| J                                    | 74          | 26                       |
| K                                    | 75          | 27                       |
| L                                    | 76          | 28                       |
| M                                    | 77          | 29                       |
| N                                    | 78          | 30                       |
| O                                    | 79          | 31                       |
| P                                    | 80          | 32                       |
| Q                                    | 81          | 33                       |
| R                                    | 82          | 34                       |
| S                                    | 83          | 35                       |
| T                                    | 84          | 36                       |
| U                                    | 85          | 37                       |
| V                                    | 86          | 38                       |
| W                                    | 87          | 39                       |
| X                                    | 88          | 40                       |
| Y                                    | 89          | 41                       |
| Z                                    | 90          | 42                       |

**Exemplo:**

| **CNPJ**  | **1** | **2** | **A**  | **B**  | **C**  | **3** | **4** | **5** | **0** | **1** | **D**  | **E**  |
| --------- | ----- | ----- | ------ | ------ | ------ | ----- | ----- | ----- | ----- | ----- | ------ | ------ |
| **Valor** | **1** | **2** | **17** | **18** | **19** | **3** | **4** | **5** | **0** | **1** | **20** | **21** |

Distribuir os pesos de 2 a 9 da direita para a esquerda (recomeçando depois do oitavo caractere), conforme o exemplo:

| **CNPJ**  | **1** | **2** | **A** | **B** | **C** | **3** | **4** | **5** | **0** | **1** | **D** | **E** |
| --------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Valor** | 1     | 2     | 17    | 18    | 19    | 3     | 4     | 5     | 0     | 1     | 20    | 21    |
| **Peso**  | 5     | 4     | 3     | 2     | 9     | 8     | 7     | 6     | 5     | 4     | 3     | 2     |

Multiplicar valor e peso de cada coluna e somar todos os resultados:

| **CNPJ**          | **1** | **2** | **A**  | **B**  | **C**   | **3**  | **4**  | **5**  | **0** | **1** | **D**  | **E**  |
| ----------------- | ----- | ----- | ------ | ------ | ------- | ------ | ------ | ------ | ----- | ----- | ------ | ------ |
| **Valor**         | 1     | 2     | 17     | 18     | 19      | 3      | 4      | 5      | 0     | 1     | 20     | 21     |
| **Peso**          | 5     | 4     | 3      | 2      | 9       | 8      | 7      | 6      | 5     | 4     | 3      | 2      |
| **Multiplicação** | **5** | **8** | **51** | **36** | **171** | **24** | **28** | **30** | **0** | **4** | **60** | **42** |

**Somatório (5+8+...+42) = 459**

Obter o resto da divisão do somatório por 11.  
Se o resto da divisão for igual a 1 ou 0, o primeiro dígito será igual a 0 (zero).  
Senão, o primeiro dígito será igual ao resultado de **11 – resto**.

No exemplo:

**Resto da divisão 459/11 = 8.**

➡️ **1º DV = 3** (resultado de 11 - 8)

## 1.2. Cálculo do segundo dígito verificador

Para o cálculo do segundo dígito é necessário acrescentar o primeiro DV ao final do CNPJ,  
formando assim treze caracteres, e repetir os passos realizados para o primeiro dígito.

Assim, no exemplo, temos:

| **CNPJ**                | **1** | **2** | **A** | **B** | **C** | **3** | **4** | **5** | **0** | **1** | **D** | **E** | **3** |
| ----------------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Atribuição de Valor** | 1     | 2     | 17    | 18    | 19    | 3     | 4     | 5     | 0     | 1     | 20    | 21    | 3     |
| **Atribuição de Peso**  | 6     | 5     | 4     | 3     | 2     | 9     | 8     | 7     | 6     | 5     | 4     | 3     | 2     |
| **Multiplicação**       | 6     | 10    | 68    | 54    | 38    | 27    | 32    | 35    | 0     | 5     | 80    | 63    | 6     |

**Somatório (6+10+...+6) = 424**

**Resto da divisão 424/11 = 6**

➡️ **2º DV = 5** (resultado de 11 - 6)

➡️ **Resultado final:** `12.ABC.345/01DE-35`

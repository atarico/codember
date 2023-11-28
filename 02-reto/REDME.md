# El reto 
>En el mundo del espionaje, se utiliza un lenguaje de codificación >con símbolos que realizan operaciones matemáticas simples.

**Tu tarea es crear un mini compilador que interprete y ejecute programas escritos en este lenguaje de símbolos.**

_Las operaciones del lenguaje son las siguientes:_
- "#" Incrementa el valor numérico en 1.
- "@" Decrementa el valor numérico en 1.
- "*" Multiplica el valor numérico por sí mismo.
- "&" Imprime el valor numérico actual.

**El valor numérico inicial es 0 y las operaciones deben aplicarse en elorden en que aparecen en la cadena de símbolos.**

## Ejemplos de entrada:
- Entrada: `"##*&"` <br>
- Salida esperada: `"4"`<br>
- **Explicación:** Incrementa (1), incrementa (2), multiplica (4), imprime (4). <br><br>

- Entrada: `"&##&*&@&"`<br>
- Salida esperada: `"0243"`<br>
- **Explicación:** Imprime (0), incrementa (1), incrementa (2), imprime (2), multiplica (4), imprime (4), decrementa (3), imprime (3).
<br><br><br>

## Tu desafío:
>Desarrolla un mini compilador que tome una cadena de texto y devuelva otra cadena de texto con el resultado de ejecutar el programa.

**Cómo resolverlo**
1. Resuelve el mensaje que encontrarás en este archivo: 

https://codember.dev/data/message_02.txt

`&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&`

2. Crea un programa al que le pases como entrada el mensaje anterior. Envía la salida con el comando "submit" en la terminal, por ejemplo así:<br>

```js 
submit 024899488
```


### Como lo pense

- --> Armar la función a la que se le pase un msj como parámetro <br>
- --> Inicializo una variable en 0 porque el msj puede imprimir un número inicial o devolver diferentes números<br>

`Descifrar el mensaje` <br>
- --> Separo cada carácter<br>
- --> Armo la iteración con un acumulador y los símbolos<br>

`para obtener la solución` <br>
- --> si el símbolo coincide, le asigno un valor y lo agrego a la variable inicial<br>
- --> Una vez chequeado todos los casos retorno el resultado<br>
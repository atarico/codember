# EL Reto
>Un grupo de espías ha descubierto que su sistema de cifrado de mensajes está comprometido.
>
>Han encontrado algunas contraseñas que no cumplen con laPolítica de Seguridad de Cifrado que tenían establecida cuando fueron creadas.
>
>Para solucionar el problema, han creado una lista (tu entrada al desafío) de contraseñas (según la base de datos corrupta) y la política de seguridad cuando esa clave fue establecida.
>
_Ejemplo de la lista:_

- ***2-4 f: fgff***
- ***4-6 z: zzzsg***
- ***1-6 h: hhhhhh*** 
#### Cada línea indica, separado por :, la política de la clave y la clave misma.

#### La política de la clave especifica el número mínimo y máximo de veces que un carácter dado debe aparecer para que la clave sea válida. Por ejemplo, 2-4 f significa que la clave debe contener f al menos 2 veces y como máximo 4 veces.

**Sabiendo esto, en el ejemplo anterior, hay 2 claves válidas:**

La segunda clave, `zzzsg`, **no lo es**; contiene 3 veces la letra z, pero necesita al menos 4. Las ***primeras*** y ***terceras*** claves son válidas: contienen la cantidad adecuada de f y h, respectivamente, según sus políticas.

## Tu desafío:
`Determina cuántas claves de cifrado son válidas según sus políticas.`

### Cómo resolverlo
1. Analiza la lista de políticas y claves de cifrado que encontrarás en este archivo: https://codember.dev/data/encryption_policies.txt

2. Crea un programa que devuelva la clave inválida número 42 (de todas las claves inválidas, la 42ª en orden de aparición). Por ejemplo:
`submit bqamidgewtbuz`


### Cómo lo pensé
(Todo fue mucho mas fácil cuando use un template String en vez de un string común )

`Dividir para iterar`
- Separo el grupo de todas las políticas aprovechando el \n 
- para cada resultado, vuelvo a dividir quedando por un lado el rango y la letra y por el otro la clave
- Vuelvo a dividir la primer parte para separar el rango por un lado y la letra por otro

`Conteo de letras`
- Tengo que contar cuantas veces aparece la letra en la clave corrupta
- Para esto separo la clave y filtro buscando la letra que coincide con la letra que ya separé
- Cuento el total de coincidencias

`Verificación`
- Si la letra aparece en la contraseña el mismo numero de veces que el rango.
- Si el conteo da fuera del rango entonces la linea es valida
- Las lineas que cumplen el criterio se recopilan y almacenan



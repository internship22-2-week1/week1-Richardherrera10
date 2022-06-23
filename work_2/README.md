#### 1. ¿Qué haría usted para que cuando un cliente compre algún producto se utilicen la menor cantidad de botellas, y se desperdicie la menor cantidad de espacio en las mismas.?

        Al tener la cantidad total de producto ver qué botella tiene la mayor cantidad de capacidad en relación a la compra, restar la compra menos la cantidad de botellas y asi tener la compra restante y repetir el proceso hasta cumplir con la cantidad total de producto para vender.
#### 2. Plasme la descripcion de su algoritmo
        1. Ver la cantidad total de la compra
        2. Ver la botella que tenga mayor capacidad y que sea menor a la compra
        3. Operar la cantidad total menos la cantidad de botella necesaria
        4. Del resultado volver a ver cuanto queda de la compra inicial y ver la siguiente botella con mayor capacidad.
            4.1. Repetir el resultado hasta que quede 0 o la compra sea menor a la capacidad máxima de alguna botella. 
#### 3. Ejemplifique cómo distribuiría el liquido en los contenedores de la tabla de arriba con las siguientes compras ficticias, siguiendo su propuesta.
| Cliente     | Compra en ML | Cantidad de botellas |
| ----------- | -----------  |----------------------|
| Paco        | 450 ML       |1 de 350 ML (450-350 = 100ML) -> 1 de 100 ML (100 - 100 = 0 ML). Sobran 0 ML
| Hugo        | 185 ML       |1 de 100 ML (185 - 100 = 85 ML).-> No hay botellas que sean menores a 85.  Sobran 85 ML. 
| Luis        | 940 ML       |1 de 500 ML (940 - 500 = 440 ML) -> 1 de 350 ML (440 - 350 = 90 ML). Sobran 90 ML 

#### 2. 👩‍💻 estás trabajando en un sistema operativo para ser usado en el taller de Santa Claus 🎅. 
      
        1. Crear una variable contadora (int) para la repeticion de cada elemento.
        2. inicializarla en 0
        3. Recorrer cada elemento en el array original 
            3.1. Con el primer elemento compararlo con cada elemento del array y ver si se repite
                3.1.1. Si no se repite pasar al siguiente elemento
                3.1.2. Si se repite incrementar la variable y añadir el valor al final de cada elemento repetido. 
            3.2. Al terminar el array volver a inicializar la variable contadora a 0
            3.3. Repetir el proceso con cada elemento hasta llegar al final. 
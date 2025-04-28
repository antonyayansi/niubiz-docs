# Lectura de pago

## General
![URL con parametros](https://i.ibb.co/8npHHjKH/url.png)

En este ejemplo, ```localhost:5174``` representa el dominio local y la `responseUrl` por defecto corresponde a la ruta raíz (/) del sitio. Este código se ejecuta automáticamente cuando se carga la página, ya que al procesar el PAGO en niubiz se trata de una carga completa del sitio web.

```js{4}
import { formatResponse } from '@dankira/niubiz'

const handleTransactionResponse = (response) => {
    console.log(response); // Información detallada de la transacción
};

/* Ejecutar al cargar la web en la ruta definida en
'responseUrl' para procesar la respuesta */
formatResponse(handleTransactionResponse);
```

Ejemplo de salida del ```console.log(response)```

![Console log](https://i.ibb.co/nMKPzy41/captura.png)

El objeto ```dataMap``` contiene la información detallada del pago. Puedes utilizar ```dataMap.ID_UNICO``` como identificador único para validar que el pago no se procese más de una vez.
Se recomienda almacenar este identificador en tu base de datos para prevenir duplicidades.

::: warning IMPORTANTE
Ten en cuenta que al ser una solicitud GET, esta información puede ser interceptada o manipulada. Por eso es importante no usarla como única medida de validación de pagos, sino complementarla con una validación en tu backend.
:::

## Lectura de pago (CDN)
Incruste este código en su pagina de `responseUrl`
```html{6}
<script>
document.addEventListener('DOMContentLoaded', function () {
    const niubiz = window.Niubiz;

    const handleTransactionResponse = (response) => {
        console.log(response); // Información detallada de la transacción
    };

    niubiz.formatResponse(handleTransactionResponse);
})
</script>
```
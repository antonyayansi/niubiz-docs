# Configuración

La configuración inicial del servicio de pago requiere contar con las credenciales de Niubiz. Si aún no dispone de ellas, puede solicitarlas siguiente enlace: [Niubiz  Web Oficial](https://niubiz.com.pe/)

## Código de configuración

```js
import { setInitialConfig } from '@dankira/niubiz';

setInitialConfig({
    production: false, 
    VISA_DEV_MERCHANT_ID: '456879852',
    VISA_DEV_USER: 'integraciones@niubiz.com.pe',
    VISA_DEV_PWD: '_7z3@8fF',
    VISA_PROD_MERCHANT_ID: '', // Producción
    VISA_PROD_USER: '', // Producción
    VISA_PROD_PWD: '', // Producción
    responseUrl: '/success',
});
```

**Parámetros**

| Parametro             |  Tipo   | Default                                 |
| --------------------- | :-----: | :-------------------------------------- |
| production            | Boolean | false                                   |
| VISA_DEV_MERCHANT_ID  | String  | 456879852                               |
| VISA_DEV_USER         | String  | integraciones@niubiz.com.pe             |
| VISA_DEV_PWD          | String  | _7z3@8fF                                |
| VISA_PROD_MERCHANT_ID | String  |                                         |
| VISA_PROD_USER        | String  |                                         |
| VISA_PROD_PWD         | String  |                                         |
| proxy_url             |   URL   | Proxy Free ✅                            |
| logo                  |   URL   | https://i.ibb.co/1JtQKJNk/logo-with.png |
| responseUrl           | String  | /                                       |

```responseUrl```
Este parámetro es MUY IMPORTANTE. Por defecto, su valor es la ruta raíz (/) de tu sitio web, es decir: ```https://tudominio.example/``` 

Al finalizar el proceso de pago, la respuesta será enviada a esta URL como parámetros en la URL. Por ejemplo

```php
https://tudominio.example/?CODE=SUCCESS&TRANSACTIONID=xxxx
```
Desde esta URL puedes capturar los parámetros de respuesta del pago (CODE, TRANSACTIONID, etc.) y procesarlos según lo necesites.

::: info Nota:
Puedes decodificar esta URL para que los datos sean más legibles y fáciles de manejar. En la sección "[Lectura de respuesta](./readpay)" encontrarás una explicación detallada de cómo interpretar estos parámetros.
:::


**Modo Producción ✅**
::: danger IMPORTANTE
Para pasar a producción todos los campos con prefijo ```VISA_PROD_``` deben estar completados y ademas el parametro ```production``` estar en ```true```
:::

```js{4,8-11}
import { setInitialConfig } from '@dankira/niubiz';

setInitialConfig({
    production: true, 
    VISA_DEV_MERCHANT_ID: '456879852',
    VISA_DEV_USER: 'integraciones@niubiz.com.pe',
    VISA_DEV_PWD: '_7z3@8fF',
    VISA_PROD_MERCHANT_ID: '5433XXXX',
    VISA_PROD_USER: 'dankira@example.dev',
    VISA_PROD_PWD: 'password123',
    responseUrl: '/pago-exitoso',
});
```

## Código de pago

```js
import { setPaymentConfig } from '@dankira/izipay'

setPaymentConfig({
    amount: 10, // Monto de la transacción
    antifraud: {
        merchantDefineData: {
            MDD4: 'integraciones@niubiz.com.pe', // Email del cliente
            MDD21: 1, // 1: Cliente frecuente | 2: Cliente NO frecuente
            MDD32: 'JD1892639123', // ID del cliente
            MDD75: 'Registrado', // Registrado | Invitado | Empleado | máx: 15 caracteres
            MDD77: 450 // Días desde registro del cliente
        }
    },
    channel: 'web' // Canal de pago (web, móvil, etc.)
});
```

**Parámetros**

| Parametro          |       Tipo        | Default |
| ------------------ | :---------------: | :------ |
| amount             |      Number       | 0       |
| channel            |      String       | web     |
| antifraud          |      Object       |         |
| merchantDefineData |      Object       |         |
| MDD4               |      String       |         |
| MDD21              |      Number       | 0       |
| MDD32              | String (Max. 100) |         |
| MDD75              | String (Max. 15)  |         |
| MDD77              |      Number       | 0       |

::: info Códigos MDD
Todos los códigos MDD de Niubiz: https://drive.google.com/file/d/1ylRwHM6vvqnRRV6dwkIFAS5gyHSQbT2D/view
:::
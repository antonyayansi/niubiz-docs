# Instalación

Para instalar necesitas tener instalado [Node.js](https://nodejs.org) en su versión mas estable.

## Terminal

Puedes usar npm, bun, yarn, etc.

**Instalación 🦄**

::: code-group
````sh [npm]
npm i @dankira/niubiz
````

````sh [pnpm]
pnpm i @dankira/niubiz
````

````sh [yarn]
yarn i @dankira/niubiz
````

````sh [bun]
bun i @dankira/niubiz
````

:::

## CDN

```html{3}
<form id="frmVisaNet" method="POST" action=""></form>

<script src="https://unpkg.com/@dankira/niubiz/dist/niubiz.umd.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function () {
    const niubiz = window.Niubiz;

    niubiz.setInitialConfig({
        production: false, 
        VISA_DEV_MERCHANT_ID: '456879852',
        VISA_DEV_USER: 'integraciones@niubiz.com.pe',
        VISA_DEV_PWD: '_7z3@8fF',
        VISA_PROD_MERCHANT_ID: '', // Producción
        VISA_PROD_USER: '', // Producción
        VISA_PROD_PWD: '', // Producción
        responseUrl: '/success',
    });

    niubiz.setPaymentConfig({
        amount: 50.00, // el monto del pago
        currency: 'PEN',
        orderId: 'ORDER123456'
    });

    niubiz.setup();
})
</script>
```

Para [Lectura de pago (CDN)](./readpay.md#lectura-de-pago-cnd), se explicará en detalle cómo capturar y procesar correctamente la información del pago.
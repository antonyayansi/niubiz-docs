# Vista de formulario

## Integración
Para incrustar el formulario en su proyecto simplemente necesita crear un ```<form>``` con ```id="frmVisaNet"``` metodo ```POST``` y atributo ```action``` obligatorio.

**Vista**
```html{1}
<!--Boton para activar el Form-->
<button onclick="setup()">Iniciar Pago</button>

<form id="frmVisaNet" method="POST" action=""></form>
```

**JavaScript**

Importamos la funcion ```setup()``` de ```@dankira/niubiz``` para mostrar el botón de pago.

```js{1,7}
import { setInitialConfig, setPaymentConfig } from '@dankira/niubiz' // [!code --]
import { setup, setInitialConfig, setPaymentConfig } from '@dankira/niubiz' // [!code ++]

setInitialConfig({...})
setPaymentConfig({...})
```
## Vista previa
![Formulario incrustado](https://raw.githubusercontent.com/antonyayansi/niubiz/b15215f9b80974a7d544d26fab6287ad4971cefd/src/img/button.png)

Luego de hacer click en ```PayHere``` mostrar el siguiente modal.

![Modal pago Niubiz](https://raw.githubusercontent.com/antonyayansi/niubiz/b15215f9b80974a7d544d26fab6287ad4971cefd/src/img/example_niubiz.png)

En la siguiente sección: [Lectura de pago](./readpay.md), se explicará en detalle cómo capturar y procesar correctamente la información del pago.

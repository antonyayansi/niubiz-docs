# Angular

Ejemplo de integración en Angular

```pago-payment.component.ts```

```ts{33}
import { Component, OnInit } from '@angular/core';
import { setup, setInitialConfig, setPaymentConfig, formatResponse } from '@dankira/niubiz';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html'
})
export class PagoComponent implements OnInit {

  ngOnInit(): void {
    // Configuración inicial
    setInitialConfig({
      responseUrl: ':5173'
    });

    // Configuración del pago
    setPaymentConfig({
      amount: 10,
      antifraud: {
        merchantDefineData: {
          MDD4: 'integraciones@niubiz.com.pe',
          MDD21: 1,
          MDD32: 'JD1892639123', // ID de cliente
          MDD75: 'Registrado',
          MDD77: 450
        }
      },
      channel: 'web'
    });

    // Capturar respuesta del pago
    formatResponse((response: any) => {
      console.log(response); // Información de la transacción
    });
  }

  iniciarPago(): void {
    setup();
  }
}
```

```pago.component.html```

```html
<div>
  <h1>Pago</h1>
  <button (click)="iniciarPago()">Iniciar Pago</button>
  <form id="frmVisaNet" method="POST" action=""></form>
</div>
```
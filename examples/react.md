# React

Ejemplo de integración en React

```jsx{28}
import { useEffect } from 'react';
import { 
  setup, 
  setInitialConfig, 
  setPaymentConfig, 
  formatResponse 
} from '@dankira/niubiz';

function Pago() {
  useEffect(() => {
    // Configuración inicial
    setInitialConfig({
      responseUrl: ':5173',
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
          MDD77: 450,
        },
      },
      channel: 'web',
    });

    // Formatear la respuesta del pago
    formatResponse((response) => {
      console.log(response); // Información de la transacción
    });
  }, []);

  return (
    <div>
      <h1>Pago</h1>
      <button onClick={setup}>Iniciar Pago</button>
      <form id="frmVisaNet" method="POST" action=""></form>
    </div>
  );
}

export default Pago;
```
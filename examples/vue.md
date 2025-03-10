# Vue

Ejemplo de integración en Vue

```vue{6}
<script setup>
import { onMounted } from 'vue'
import { setup, setInitialConfig, setPaymentConfig, formatResponse } from '@dankira/niubiz'

const callBack = (response) => {
  console.log(response) /* Información de la transacción */
}

onMounted(() => {
  setInitialConfig({
    responseUrl: ':5173',
  })

  setPaymentConfig({
    amount: 10,
      antifraud: {
          merchantDefineData: {
              MDD4: 'integraciones@niubiz.com.pe',
              MDD21: 1,
              MDD32: 'JD1892639123', /* Id de cliente */
              MDD75: 'Registrado',
              MDD77: 450
          }
      },
      channel: 'web'
  })
  
  formatResponse(callBack)
})

</script>

<template>
  <div>
    <h1>Pago</h1>
    <button @click="setup()">Iniciar Pago</button>
    <form id="frmVisaNet" method="POST" action=""></form>
  </div>
</template>
```
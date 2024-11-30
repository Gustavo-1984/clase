<!-- <script>
  import WebSocketManager from './wsManager.js';
  import { onMount } from "svelte";

  const wsManager = new WebSocketManager('ws://192.168.0.107:81', {
    
  reconnectInterval: 3000, // Intentar reconectar cada 3 segundos
  maxRetries: 5, // Máximo 5 intentos de reconexión
});

wsManager.on('open', () => {
  console.log('Conexión establecida con el servidor WebSocket.');
  wsManager.send('Hola desde el cliente!');
});

wsManager.on('message', (event) => {
  console.log('Mensaje del servidor:', event.data);
});
 

</script>

<main>
  <h1>WebSocket</h1>
  <p></p>
</main> -->
class WebSocketManager {
    constructor(url, options = {}) {
      this.url = url; // URL del WebSocket
      this.socket = null;
      this.reconnectInterval = options.reconnectInterval || 5000; // Tiempo de reconexión en ms
      this.maxRetries = options.maxRetries || Infinity; // Máximo número de intentos de reconexión
      this.retries = 0; // Contador de intentos
      this.eventHandlers = {}; // Almacenar handlers personalizados para eventos
    }
  
    // Conectar al WebSocket
    connect() {
      if (this.socket) {
        console.warn("Ya existe una conexión activa.");
        return;
      }
  
      console.log("Conectando a WebSocket:", this.url);
      this.socket = new WebSocket(this.url);
  
      // Eventos de WebSocket
      this.socket.onopen = () => {
        console.log("Conexión WebSocket establecida.");
        this.retries = 0; // Reiniciar contador de intentos
        this.emit("open");
      };
  
      this.socket.onmessage = (event) => {
        console.log("Mensaje recibido:", event.data);
        this.emit("message", event.data);
      };
  
      this.socket.onerror = (error) => {
        console.error("Error en WebSocket:", error);
        this.emit("error", error);
      };
  
      this.socket.onclose = () => {
        console.warn("Conexión cerrada.");
        this.socket = null;
        this.emit("close");
        if (this.retries < this.maxRetries) {
          setTimeout(() => {
            this.retries++;
            console.log(`Intentando reconexión (${this.retries}/${this.maxRetries})...`);
            this.connect();
          }, this.reconnectInterval);
        } else {
          console.error("Se alcanzó el máximo número de intentos de reconexión.");
        }
      };
    }
  
    // Enviar un mensaje
    send(message) {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        console.log("Enviando mensaje:", message);
        this.socket.send(message);
      } else {
        console.warn("No se puede enviar, WebSocket no está conectado.");
      }
    }
  
    // Cerrar la conexión
    close() {
      if (this.socket) {
        this.socket.close();
        this.socket = null;
      }
    }
  
    // Registrar eventos personalizados
    on(event, handler) {
      if (!this.eventHandlers[event]) {
        this.eventHandlers[event] = [];
      }
      this.eventHandlers[event].push(handler);
    }
  
    // Emitir eventos personalizados
    emit(event, data) {
      if (this.eventHandlers[event]) {
        this.eventHandlers[event].forEach((handler) => handler(data));
      }
    }
  }
  
  export default WebSocketManager;
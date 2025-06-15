Claro! Aqui está o conteúdo completo do `README.md` para o seu projeto, formatado em Markdown e cobrindo todos os requisitos da atividade:

---

# 🛰️ Projeto IoT Multprotocol - AMQP + HTTP + Node-RED

Simulação funcional de um sistema IoT com sensores e atuadores usando dois protocolos de comunicação diferentes (AMQP e HTTP), integração com **RabbitMQ** e **Node-RED**, visualização de dados e mecanismo de alerta inteligente.

---

## 📌 Descrição

Este projeto foi desenvolvido como parte da disciplina **Tópicos Avançados em Web I - IFBA**, com o objetivo de aplicar os conceitos de:

- IoT com múltiplos sensores simulados
- Protocolos distintos de comunicação (AMQP e HTTP)
- Monitoramento com Node-RED
- Processamento em Edge (Node.js)
- Tratamento de alertas e visualização

---

## 🏗️ Arquitetura da Solução

![Diagrama de Arquitetura](diagram.png)

---

## 🔌 Protocolos Utilizados

| Sensor             | Protocolo | Tecnologia    |
|--------------------|-----------|---------------|
| Temperatura        | AMQP      | RabbitMQ      |
| Gás                | AMQP      | RabbitMQ      |
| Luminosidade       | HTTP      | Node-RED HTTP |

---

## 📦 Estrutura do Projeto

```
iot-multprotocol/
├── docker-compose.yml
├── .env
├── README.md
├── shared/
│   └── amqp.js
├── sensors/
│   ├── temperatureSensor.js
│   ├── gasSensor.js
│   └── lightSensorHttp.js
├── receiver/
│   └── index.js
├── rest-simulator/
│   └── nodeRedForwarder.js
├── node-red/
│   └── flow.json
└── diagram.png
```

---

## 📥 Instalação e Execução

### 1. Clonar o projeto

```bash
git clone <url-do-repositorio>
cd iot-multprotocol
```

### 2. Instalar dependências Node.js

```bash
npm install
```

### 3. Subir os serviços com Docker

```bash
docker-compose up
```

Acesse:
- RabbitMQ: [http://localhost:15672](http://localhost:15672)
- Node-RED: [http://localhost:1880](http://localhost:1880)

---

## 🚀 Executando os Sensores

```bash
# Sensores AMQP
node sensors/temperatureSensor.js
node sensors/gasSensor.js

# Sensor HTTP
node sensors/lightSensorHttp.js
```

---

## 🧠 Executando o Receptor Central

```bash
node receiver/index.js
```

Este componente consome mensagens da fila `sensor_data` do RabbitMQ e recebe dados HTTP no endpoint `/sensor`.

---

## 🖥️ Importar o Fluxo no Node-RED

1. Acesse [http://localhost:1880](http://localhost:1880)
2. Clique no menu ☰ → "Import"
3. Cole o conteúdo de `node-red/flow.json`
4. Clique em **Importar** e depois em **Deploy**

---

## 🔐 Segurança

- RabbitMQ com autenticação (usuário/senha: guest/guest)
- HTTP usado apenas localmente. Para ambientes reais, recomenda-se HTTPS ou autenticação por token.
- Comunicação interna pode ser protegida com SSL/TLS se necessário.

---

## 🛠️ Tratamento de Falhas

- Reconexão automática dos sensores (AMQP)
- Logs em tempo real no terminal
- Testes de perda de conexão e tolerância a falhas simples

---

## 📊 Estrutura de Mensagens (JSON)

```json
{
  "type": "temperature",
  "value": "32.5",
  "timestamp": "2025-06-14T19:30:21Z"
}
```

---

## 📈 Monitoramento

- Node-RED (`/from-sensor`) com lógica de alerta (temperatura > 30°C)
- Painel de debug do Node-RED mostra os dados
- Visualização opcional via `node-red-dashboard`

---

## 📌 Conclusões

| Critério       | Observação                                       |
|----------------|--------------------------------------------------|
| Desempenho     | Estável em simulação local com múltiplos sensores |
| Latência       | Baixa entre envio e recebimento                  |
| Robustez       | Mensagens persistem no RabbitMQ                  |
| Segurança      | Proteção com usuário/senha no broker             |

---

## 👨‍🏫 Informações Acadêmicas

- **Discentes:** Kaio Tavares, Tauynd Julia 
- **Disciplina:** Tópicos Avançados em Web I  
- **Turma:** 20251.6.TADSSAJ.1N  
- **Professor:** Felipe Silva  
- **Instituição:** IFBA – Campus Santo Antônio de Jesus

📅 **Entrega até:** 17/06/2025 às 23:59  
✉️ **Envio por e-mail:** felipe_silva@ifba.edu.br

---

## 📃 Licença

Projeto acadêmico - livre para uso educacional.

---
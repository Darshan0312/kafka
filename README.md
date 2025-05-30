# Kafka Project

This project demonstrates how to work with Apache Kafka using Node.js.  
It includes scripts for managing Kafka topics, producing messages, consuming messages, and Kafka client setup.

---

## Table of Contents

- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [File Descriptions](#file-descriptions)  
- [Configuration](#configuration)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Structure

```
kafka/
├── admin.js       # Kafka admin operations (create/delete topics)
├── client.js      # Kafka client setup and configuration
├── consumer.js    # Kafka consumer to read messages from topics
├── produce.js     # Kafka producer to send messages to topics
├── package.json   # Node.js dependencies and scripts
└── README.md      # Project documentation
```

---

## Installation

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1. Clone the repository:

   ```bash
   git clone https://github.com/Darshan0312/kafka.git
   cd kafka
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Usage

### Running Kafka Admin Script

```bash
node admin.js
```

### Running Kafka Producer

```bash
node produce.js
```

### Running Kafka Consumer

```bash
node consumer.js
```

### Kafka Client Setup

The `client.js` script handles the Kafka client configuration, which is imported and used in other scripts.

---

## File Descriptions

### `admin.js`

Contains Kafka administrative operations like creating, listing, or deleting topics.

### `client.js`

Defines the Kafka client configuration and connection details.

### `consumer.js`

Implements the Kafka consumer to subscribe to topics and process incoming messages.

### `produce.js`

Implements the Kafka producer to send messages to topics.

---

## Configuration

Make sure Kafka is running locally or update the Kafka broker address in `client.js`.  
You may need to configure environment variables if your setup requires authentication or custom ports.

---

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.  
Please adhere to existing code style and add tests if applicable.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or feedback, reach out to Darshan at [darshanbr081@gmail.com].

import app from "./app.js";
import { PORT } from "./config/serverConfig.js";

const startServer = () => {

    try {
        app.listen(PORT, () => {
            console.log(`Server is running on the port ${PORT}`)
        })
    } catch (error) {
        process.exit(1);
    }
}

startServer()
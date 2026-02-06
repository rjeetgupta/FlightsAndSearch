import app from "./app.js";

const startServer = () => {
    const PORT = 3000;
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on the port ${PORT}`)
        })
    } catch (error) {
        process.exit(1);
    }
}

startServer()
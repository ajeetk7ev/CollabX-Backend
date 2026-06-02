import { app } from "./app";
import { env } from "./config/env";
import { logger } from "./config/logger";


const PORT = env.PORT || 8000;


app.listen(PORT, () => {
    logger.info(`Server is running at port ${PORT}`)
})
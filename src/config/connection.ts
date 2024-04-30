import { Sequelize } from "sequelize";
import { dev } from "@/config/config.json"

export const sequelize = new Sequelize(`postgres://${dev.DB_USER}:${dev.DB_PASS}@${dev.DB_HOST}:5432/${dev.DB_NAME}`);

console.log(`postgres://${dev.DB_USER}:${dev.DB_PASS}@${dev.DB_HOST}:5432/${dev.DB_NAME}`);

export default async function ConnectDB() {
    try {
        await sequelize.authenticate();
        if (dev.NODE_ENV === "development") {
            await sequelize.sync();
            console.log('Database is synced successfully');
        }
        console.log('Connection has been established successfully');
    } catch (error) {
        console.error(error);
    }
}
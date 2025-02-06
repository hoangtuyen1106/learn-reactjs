import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // them de test tai cham
    // throw new Error('Loading meals failed'); // de tao ra loi
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

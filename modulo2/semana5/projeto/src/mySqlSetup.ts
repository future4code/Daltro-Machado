import {connection} from "./data/connection"

async function createTables(){
   try {
      await connection.raw(`
         CREATE TABLE labook_users(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
         )
      `)

      await connection.raw(`
         CREATE TABLE labook_posts(
            id VARCHAR(255) PRIMARY KEY,
            photo VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            type ENUM("normal","event") DEFAULT "normal",
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            author_id VARCHAR(255),
            FOREIGN KEY (author_id) REFERENCES labook_users (id)
         )
      `)

      await connection.raw(`
         CREATE TABLE labook_friendships(
            id_friend1 VARCHAR(255) NOT NULL,
            id_friend2 VARCHAR(255) NOT NULL,
            FOREIGN KEY (id_friend1) REFERENCES labook_users (id),
            FOREIGN KEY (id_friend2) REFERENCES labook_users (id)
         )
      `)

      await connection.raw(`
      CREATE TABLE labook_comments(
         id VARCHAR(255) PRIMARY KEY,
         id_post VARCHAR(255) NOT NULL,
         comment TEXT NOT NULL,
         author_id VARCHAR(255) NOT NULL,
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         FOREIGN KEY (id_post) REFERENCES labook_posts (id),
         FOREIGN KEY (id_author) REFERENCES labook_users (id)
      )
   `)

      console.log("MySql setup completed!")
   } catch (error) {
      console.log(error)
   }
}

createTables()
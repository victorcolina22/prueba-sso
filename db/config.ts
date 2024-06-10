import { defineDb, defineTable, column } from 'astro:db';

const LoginData = defineTable({
  columns: {
    name: column.text(),
    token: column.text()
  }
})

export default defineDb({
  tables: { LoginData }
});

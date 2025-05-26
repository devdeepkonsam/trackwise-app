import { 
    integer, numeric, pgTable, serial, varchar
} from "drizzle-orm/pg-core";

//BUDGET TABLE
export const Budgets = pgTable('budgets',{
    id : serial('id').primaryKey(),
    name : varchar('name').notNull(),
    amount : varchar('amount').notNull(),
    icon : varchar('icons'),
    createdBy : varchar('createdBy').notNull(),
})


//INCOME TABLE
export const Incomes = pgTable('incomes', {
    id : serial('id').primaryKey(),
    name : varchar('name').notNull(),
    amount : varchar('amount').notNull(),
    icon : varchar('icon'),
    createdBy : varchar('createdBy').notNull(),
})

//EXPENSES TABLE
export const Expenses = pgTable('expenses', {
    id : serial('id').primaryKey(),
    name : varchar('name').notNull(),
    amount : varchar('amount').notNull(),
    budgetId : integer('budgetId').references(() => Budgets.id),
    createdAt: varchar("createdAt").notNull(),
})



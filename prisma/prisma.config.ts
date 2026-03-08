// prisma/prisma.config.ts
export default {
  datasource: {
    provider: "postgresql",
    url: "postgresql://postgres:postgres@ecapstone_postgres:5432/ecapstone",
  },
  client: {
    output: "../src/generated/prisma"
  }
};


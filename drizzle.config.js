/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:gBOR8AME1Qnd@ep-bitter-resonance-a5t6vxh0.us-east-2.aws.neon.tech/clevercontent?sslmode=require',

    }
  };
  

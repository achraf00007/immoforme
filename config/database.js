module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'mysql'); // Assurez-vous que MySQL est défini comme client

  const connections = {
    mysql: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'SG-sepia-vest-9136-9040-mysql-master.servers.mongodirector.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'db'),
        user: env('DATABASE_USERNAME', 'sgroot'),
        password: env('DATABASE_PASSWORD', 'Td@XMkb0IVJ66ERE'),
        ssl: env.bool('DATABASE_SSL', true)
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    }
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};

function loadEnviromentVariable(keyname) {
    const envVar = process.env[keyname];

    if (!envVar) {
        throw new Error(`Must include ${keyname} as an environment variable.`);
    }

    return envVar;
}

module.exports = {
    postgresUri: loadEnviromentVariable('POSTGRES_URI')
};
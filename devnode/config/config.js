import options from './options'

// Common configuration goes here
// Configuration that depends on the environment, should go into config-<env>.js
// Infrastructure related configuration should go into parameters.json

const config = {
  api: {
    url: options.apiUrl,
    timeout: 15000,
  },
}

export default config

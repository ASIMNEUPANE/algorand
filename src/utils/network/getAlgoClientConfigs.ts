import {
  AlgoViteClientConfig,
  AlgoViteKMDConfig,
} from '../../interfaces/networks';

export function getAlgodConfigFromViteEnvironment(): AlgoViteClientConfig {
  // if (!process.env.NEXT_PUBLIC_ALGOD_SERVER) {
  //   throw new Error(
  //     'Attempt to get default algod configuration without specifying NEXT_PUBLIC_ALGOD_SERVER in the environment variables'
  //   );
  // }

  return {
    server: 'http://localhost',
    port: '4001', // "4001
    token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    network: 'show',
  };
}

export function getIndexerConfigFromViteEnvironment(): AlgoViteClientConfig {
  // if (!process.env.NEXT_PUBLIC_INDEXER_SERVER) {
  //   throw new Error(
  //     'Attempt to get default indexer configuration without specifying NEXT_PUBLIC_INDEXER_SERVER in the environment variables'
  //   );
  // }

  return {
    server: 'http://localhost',
    port: '8980',
    token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    network: '',
  };
}

export function getKmdConfigFromViteEnvironment(): AlgoViteKMDConfig {
  // if (!process.env.NEXT_PUBLIC_KMD_SERVER) {
  //   throw new Error(
  //     'Attempt to get default kmd configuration without specifying NEXT_PUBLIC_KMD_SERVER in the environment variables'
  //   );
  // }

  return {
    server: 'http://localhost',
    port: '4002',
    token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    wallet: 'unencrypted-default-wallet',
    password: '',
  };
}

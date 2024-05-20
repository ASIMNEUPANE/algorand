import {
  AlgoViteClientConfig,
  AlgoViteKMDConfig,
} from '../../interfaces/networks';

export function getAlgodConfigFromViteEnvironment(): AlgoViteClientConfig {
  if (!process.env.NEXT_PUBLIC_ALGOD_SERVER) {
    throw new Error(
      'Attempt to get default algod configuration without specifying NEXT_PUBLIC_ALGOD_SERVER in the environment variables'
    );
  }

  return {
    server: process.env.NEXT_PUBLIC_ALGOD_SERVER as string,
    port: process.env.NEXT_PUBLIC_ALGOD_PORT as string,
    token: process.env.NEXT_PUBLIC_ALGOD_TOKEN as string,
    network: process.env.NEXT_PUBLIC_ALGOD_NETWORK as string,
  };
}

export function getIndexerConfigFromViteEnvironment(): AlgoViteClientConfig {
  if (!process.env.NEXT_PUBLIC_INDEXER_SERVER) {
    throw new Error(
      'Attempt to get default indexer configuration without specifying NEXT_PUBLIC_INDEXER_SERVER in the environment variables'
    );
  }

  return {
    server: process.env.NEXT_PUBLIC_INDEXER_SERVER as string,
    port: process.env.NEXT_PUBLIC_INDEXER_PORT as string,
    token: process.env.NEXT_PUBLIC_INDEXER_TOKEN as string,
    network: process.env.NEXT_PUBLIC_ALGOD_NETWORK as string,
  };
}

export function getKmdConfigFromViteEnvironment(): AlgoViteKMDConfig {
  if (!process.env.NEXT_PUBLIC_KMD_SERVER) {
    throw new Error(
      'Attempt to get default kmd configuration without specifying NEXT_PUBLIC_KMD_SERVER in the environment variables'
    );
  }

  return {
    server: process.env.NEXT_PUBLIC_KMD_SERVER as string,
    port: process.env.NEXT_PUBLIC_KMD_PORT as string,
    token: process.env.NEXT_PUBLIC_KMD_TOKEN as string,
    wallet: process.env.NEXT_PUBLIC_KMD_WALLET as string,
    password: process.env.NEXT_PUBLIC_KMD_PASSWORD as string,
  };
}

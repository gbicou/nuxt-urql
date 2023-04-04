import type {
  Resolver as GraphCacheResolver,
  UpdateResolver as GraphCacheUpdateResolver,
  OptimisticMutationResolver as GraphCacheOptimisticMutationResolver,
  StorageAdapter as GraphCacheStorageAdapter,
  CacheExchangeOpts,
} from "@urql/exchange-graphcache";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A country record */
export type Country = {
  __typename?: "Country";
  /** Alpha‑3 code */
  alpha3: Scalars["String"];
  /** ISO code */
  code: Scalars["String"];
  /** Name of country */
  name: Scalars["String"];
  /** Neighbours countries */
  neighbours: Array<Country>;
  /** Numeric */
  numeric: Scalars["String"];
  tld: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  /** All countries */
  countries: Array<Country>;
  /** Country by code */
  country?: Maybe<Country>;
  /** Package version */
  version: Scalars["String"];
};

export type QueryCountryArgs = {
  code: Scalars["String"];
};

export type WithTypename<T extends { __typename?: any }> = Partial<T> & { __typename: NonNullable<T["__typename"]> };

export type GraphCacheKeysConfig = {
  Country?: (data: WithTypename<Country>) => null | string;
};

export type GraphCacheResolvers = {
  Query?: {
    countries?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Country> | string>>;
    country?: GraphCacheResolver<WithTypename<Query>, QueryCountryArgs, WithTypename<Country> | string>;
    version?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Scalars["String"] | string>;
  };
  Country?: {
    alpha3?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars["String"] | string>;
    code?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars["String"] | string>;
    name?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars["String"] | string>;
    neighbours?: GraphCacheResolver<
      WithTypename<Country>,
      Record<string, never>,
      Array<WithTypename<Country> | string>
    >;
    numeric?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars["String"] | string>;
    tld?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars["String"] | string>;
  };
};

export type GraphCacheOptimisticUpdaters = {};

export type GraphCacheUpdaters = {
  Mutation?: {};
  Subscription?: {};
};

export type GraphCacheConfig = {
  schema?: CacheExchangeOpts["schema"];
  updates?: GraphCacheUpdaters;
  keys?: GraphCacheKeysConfig;
  optimistic?: GraphCacheOptimisticUpdaters;
  resolvers?: GraphCacheResolvers;
  storage?: GraphCacheStorageAdapter;
};

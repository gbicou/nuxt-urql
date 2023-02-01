import type { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import type { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
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
  __typename?: 'Country';
  /** ISO code */
  code: Scalars['String'];
  /** Name of country */
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** All countries */
  countries: Array<Country>;
  /** Package version */
  version: Scalars['String'];
};

export type WithTypename<T extends { __typename?: any }> = Partial<T> & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Country?: (data: WithTypename<Country>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    countries?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Country> | string>>,
    version?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Scalars['String'] | string>
  },
  Country?: {
    code?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    name?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {};

export type GraphCacheUpdaters = {
  Mutation?: {},
  Subscription?: {},
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};
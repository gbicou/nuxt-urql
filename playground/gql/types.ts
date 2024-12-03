import { cacheExchange } from '@urql/exchange-graphcache';
import type { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver } from '@urql/exchange-graphcache';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** A country record */
export type Country = {
  __typename?: 'Country';
  /** Alpha‑3 code */
  alpha3: Scalars['String']['output'];
  /** ISO code */
  code: Scalars['ID']['output'];
  /** Name of country */
  name: Scalars['String']['output'];
  /** Neighbours countries */
  neighbours: Array<Country>;
  /** Numeric */
  numeric: Scalars['String']['output'];
  /** Top level domain */
  tld: Scalars['String']['output'];
};

/** Queries */
export type Query = {
  __typename?: 'Query';
  /** All countries */
  countries: Array<Country>;
  /** Country by code */
  country?: Maybe<Country>;
  /** Package version */
  version: Scalars['String']['output'];
};


/** Queries */
export type QueryCountryArgs = {
  code: Scalars['ID']['input'];
};

export type WithTypename<T extends { __typename?: any }> = Partial<T> & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Country?: (data: WithTypename<Country>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    countries?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Country> | string>>,
    country?: GraphCacheResolver<WithTypename<Query>, QueryCountryArgs, WithTypename<Country> | string>,
    version?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Scalars['String'] | string>
  },
  Country?: {
    alpha3?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    code?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    neighbours?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Array<WithTypename<Country> | string>>,
    numeric?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    tld?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {};

export type GraphCacheUpdaters = {
  Query?: {
    countries?: GraphCacheUpdateResolver<{ countries: Array<WithTypename<Country>> }, Record<string, never>>,
    country?: GraphCacheUpdateResolver<{ country: Maybe<WithTypename<Country>> }, QueryCountryArgs>,
    version?: GraphCacheUpdateResolver<{ version: Scalars['String'] }, Record<string, never>>
  },
  Mutation?: {},
  Subscription?: {},
  Country?: {
    alpha3?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    code?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    name?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    neighbours?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    numeric?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    tld?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>
  },
};

export type GraphCacheConfig = Parameters<typeof cacheExchange>[0] & {
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
};
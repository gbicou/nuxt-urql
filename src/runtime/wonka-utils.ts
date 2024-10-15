import { type Source, pipe, subscribe, make } from "wonka";
import { ref, watch, type Ref, type UnwrapRef } from "vue";
import { tryOnScopeDispose } from "@vueuse/shared";

/**
 * make a reactive ref from a wonka source
 * @param source
 */
export function sourceRef<T>(source: Source<T>): Ref<T | undefined> {
  const value = ref<T | undefined>(undefined);

  const subscription = pipe(
    source,
    subscribe((val: T) => {
      value.value = val as UnwrapRef<T>;
    }),
  );

  tryOnScopeDispose(() => {
    subscription.unsubscribe();
  });

  return value as Ref<T | undefined>;
}

/**
 *
 * @param r
 */
export function toSource<T>(r: Ref<T>): Source<T> {
  return make((observer) => {
    return watch(r, (val) => {
      observer.next(val);
    });
  });
}

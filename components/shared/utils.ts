import { TenantUsageReport } from '@basis-theory/basis-theory-elements-interfaces/models';

const stringify = (value: unknown, indentation = 0): string => {
  const json = JSON.stringify(value, undefined, 2);

  return json.replace(/\n/gu, `\n${' '.repeat(indentation)}`);
};

const getRandomInt = (min: number, max: number): number => {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);

  return Math.floor(Math.random() * (_max - _min)) + _min;
};

const makeArray = <T>(value?: T | T[]): T[] | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [value];
};

const delay = (time: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const sendAnalyticsEvent = async (
  eventName: string,
  props = {}
): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (window as any).dataLayer.push({
    event: eventName,
    ...props,
  });
};

/**
 * Creates a Promise that resolves to the resolved promise param when that is done,
 * or when the timeout is done. Whatever happens last.
 * @param promise
 * @param timeout
 */
const until = <T>(promise: Promise<T>, timeout: number): Promise<T> =>
  Promise.all([promise, delay(timeout)]).then((arr) => arr[0]);

const sortProps = <T>(object: T): T =>
  Object.keys(object)
    .sort()
    .reduce(
      (o, key) => ({
        ...o,
        [key]: object[key],
      }),
      {}
    ) as T;

/**
 * Splits a permission in a two-items long
 * array containing the permission label and impact level.
 * <br> e.g.: 'token:general:read:low' results into `['token:general:read', 'low']`
 *
 * @param permission
 * @return resulting array if permission is supposed to have impact level; `false` otherwise
 */
const splitPermissionImpactLevel = (
  permission: string
): false | [string, string] => {
  const HAS_IMPACT_LEVEL_REGEX = /^token:.+?:read:.+$/u;

  if (HAS_IMPACT_LEVEL_REGEX.test(permission)) {
    const index = permission.lastIndexOf(':');

    return [permission.slice(0, index), permission.slice(index + 1)];
  }

  return false;
};

const getTokenCountFromReport = (report?: TenantUsageReport): number =>
  Object.values(report?.tokenReport?.metricsByType || {}).reduce(
    (sum, { count }) => sum + count,
    0
  );

export {
  stringify,
  getRandomInt,
  makeArray,
  delay,
  until,
  sortProps,
  sendAnalyticsEvent,
  splitPermissionImpactLevel,
  getTokenCountFromReport,
};

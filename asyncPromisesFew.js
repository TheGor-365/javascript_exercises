import fsp from 'fs/promises';

const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (filesPath) => {
  const processPath = (filepath, result) => fsp.stat(filepath)
  .then((data) => [...result, getTypeName(data)])
  .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    Promise.resolve([]),
  );
  return resultPromise;
};
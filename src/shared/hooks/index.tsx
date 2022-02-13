import { DataObject as Object, DataContextProvider, useData } from './useData';

export type DataObjectType = Object;

interface CustomContextHooksProps {
  children: React.ReactNode;
}

export const CustomContextHooks = ({ children }: CustomContextHooksProps) => (
  <DataContextProvider>{children}</DataContextProvider>
);

export { useData };

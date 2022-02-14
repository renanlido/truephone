import {
  useContext,
  createContext,
  useCallback,
  useMemo,
  useState
} from 'react';

export type DataObject = {
  name: string;
  date: string;
  contactsList: {
    id: string;
    phone: string;
    message: string;
    fileIsValid: boolean;
  }[];
};

interface DataProps {
  children: React.ReactNode;
}

type DataContextType = {
  handleData: (value: DataObject) => void;
  data: DataObject;
};

const DataContext = createContext({} as DataContextType);

export const DataContextProvider = ({ children }: DataProps) => {
  const [data, setData] = useState<DataObject>({} as DataObject);

  const handleData = useCallback(value => {
    setData(value);
  }, []);

  const value = useMemo(
    () => ({
      data,
      handleData
    }),
    [data, handleData]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);

import {
  useContext,
  createContext,
  useState,
  useCallback,
  useMemo
} from 'react';

export type UploadedFile = File | null | undefined;

export interface HandleFileProps {
  file: UploadedFile;
  error?: {
    message: string;
  };
}

interface FileValidationProps {
  children: React.ReactNode;
}

type FileValidationContextType = {
  handleValidateFile: (file: UploadedFile) => HandleFileProps;
  isValidFile: boolean | undefined;
};

const FileValidationContext = createContext({} as FileValidationContextType);

export const FileValidationContextProvider = ({
  children
}: FileValidationProps) => {
  const [isValidFile, setIsValidFile] = useState<boolean>();

  const handleValidateFile = useCallback(
    (file: UploadedFile): HandleFileProps => {
      if (!file || file.type !== 'application/vnd.ms-excel') {
        if (!file || file.type !== 'text/csv') {
          setIsValidFile(false);

          return {
            file,
            error: {
              message: 'Ops, o arquivo enviado é inválido!'
            }
          };
        }
      }

      setIsValidFile(true);

      return {
        file
      };
    },
    []
  );

  const value = useMemo(
    () => ({
      handleValidateFile,
      isValidFile
    }),
    [handleValidateFile, isValidFile]
  );

  return (
    <FileValidationContext.Provider value={value}>
      {children}
    </FileValidationContext.Provider>
  );
};

export const useFileValidation = () => useContext(FileValidationContext);

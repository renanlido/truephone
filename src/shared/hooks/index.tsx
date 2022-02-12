import {
  HandleFileProps as HandleFilePropsUseValidation,
  UploadedFile as UploadFileUseValidation,
  FileValidationContextProvider
} from './useFileValidation';

export type HandleFileProps = HandleFilePropsUseValidation;
export type UploadedFile = UploadFileUseValidation;
export { useFileValidation } from './useFileValidation';

interface CustomContextHooksProps {
  children: React.ReactNode;
}

export const CustomContextHooks = ({ children }: CustomContextHooksProps) => (
  <FileValidationContextProvider>{children}</FileValidationContextProvider>
);

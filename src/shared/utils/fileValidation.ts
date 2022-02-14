import { isMobile } from 'react-device-detect';

export type UploadedFile = File | null | undefined;

export interface HandleFileProps {
  file: UploadedFile;
  error?: boolean;
}

const fileValidation = (file: UploadedFile): HandleFileProps => {
  if (isMobile) {
    if (file?.type !== 'text/comma-separated-values') {
      return {
        file,
        error: true
      };
    }
  } else if (file?.type !== 'text/csv') {
    if (file?.type !== 'application/vnd.ms-excel') {
      return {
        file,
        error: true
      };
    }
  }

  return {
    file
  };
};

export { fileValidation };

import React from 'react';
import { useDropzone } from 'react-dropzone';

import {
  useFileValidation,
  HandleFileProps
} from 'src/shared/hooks/useFileValidation';

import { Container } from './styles';

interface UploadFilesContainerProps {
  handleFile: (props: HandleFileProps) => void;
}

const UploadFilesContainer: React.FC<UploadFilesContainerProps> = ({
  children,
  handleFile
}) => {
  const { handleValidateFile, isValidFile } = useFileValidation();

  const { getRootProps, isFocused, isDragAccept, isDragReject, draggedFiles } =
    useDropzone({
      accept: ['text/csv', 'application/vnd.ms-excel'],
      noClick: true,
      maxFiles: 1
    });

  const fileValidate = handleValidateFile(draggedFiles[0]);

  handleFile(fileValidate);

  return (
    <Container
      isValid={isValidFile}
      {...getRootProps({ isFocused, isDragAccept, isDragReject })}
    >
      {children}
    </Container>
  );
};

export { UploadFilesContainer };

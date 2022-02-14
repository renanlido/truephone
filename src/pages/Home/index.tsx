import { useState } from 'react';
import { parse } from 'papaparse';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

import { delay, fileValidation } from 'src/shared/utils';

import { useData } from 'src/shared/hooks';

import { Body } from './Body';
import { Loading } from './Loading';

import { Container } from './shared/styles';

const Home: React.FC = () => {
  const { handleData } = useData();
  const navigate = useNavigate();
  const [isProcessing, setProcessing] = useState(false);
  const [isValidStateFile, setIsValidStateFile] = useState<boolean | null>(
    null
  );

  const handleFiles = async (sendedFile: File) => {
    setProcessing(true);
    const { file, error } = fileValidation(sendedFile);

    if (!file) {
      setProcessing(false);
      setIsValidStateFile(false);
      return;
    }

    if (error) {
      setProcessing(false);
      setIsValidStateFile(!error);
      return;
    }

    setIsValidStateFile(true);

    const getTextFromFile = await file.text();

    const result = parse<any>(getTextFromFile, {
      header: false,
      delimiter: ';'
    });

    const contactsList = result.data.map(data => {
      const phoneToString = String(data[0]);
      const textToString = String(data[1]);

      const lessThanEleven = phoneToString.length <= 11;
      const thirdCharacterIsNine = phoneToString
        .substring(2, 3)
        .startsWith('9');
      const lessThanHundredSix = textToString.length <= 160;

      return {
        id: uuidv4(),
        phone: phoneToString,
        message: textToString,
        fileIsValid:
          lessThanEleven && thirdCharacterIsNine && lessThanHundredSix
      };
    });

    const newData = new Date();

    const formattedData = format(newData, 'dd/MM/yyyy-kk:mm:ss');

    const data = {
      name: file.name,
      date: formattedData,
      contactsList
    };

    handleData(data);
    await delay(5000);

    navigate('/list');
  };

  const handleLoading = () => {
    setProcessing(false);
    setIsValidStateFile(null);
  };

  return (
    <Container isValid={isValidStateFile} isProcessing={isProcessing}>
      {!isProcessing ? (
        <Body handleFiles={handleFiles} />
      ) : (
        <Loading handleLoading={handleLoading} />
      )}
    </Container>
  );
};

export { Home };

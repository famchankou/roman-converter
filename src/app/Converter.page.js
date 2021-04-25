import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import { Card, ConvertResultCard, WarningMessage } from '../components/common';
import { useConverter } from '../hooks';

const StyledConverterPage = styled.div`
  display: flex;
  justify-content: center;
`;

const ConverterPage = () => {
  const intl = useIntl()
  const conversionOptions = useMemo(() => [
    { value: 1, caption: intl.formatMessage({ id: 'general.title.toroman' }), },
    { value: 2, caption: intl.formatMessage({ id: 'general.title.tonum' }), },
  ], [intl]);
  const [toRoman, fromRoman] = useConverter();
  const [inputValue, setInputValue] = useState('');
  const [isInvalidInputValue, setIsInvalidInputValue] = useState(false);
  const [inputPlaceholder, setInputPlaceholder] = useState('');
  const [inputType, setInputType] = useState('text');
  const [result, setResult] = useState('');
  const [selectedConversion, setSelectedConversion] = useState(conversionOptions[0].value);

  useEffect(() => {
    const isToRoman = parseInt(selectedConversion) === conversionOptions[0].value;
    const placeholderType = isToRoman ? 'numeric' : 'roman';
    const inputType = isToRoman ? 'number' : 'text';

    setInputPlaceholder(intl.formatMessage({ id: `general.input.placeholder.${placeholderType}` }));
    setInputType(inputType);
    setInputValue('');
  }, [selectedConversion, intl, conversionOptions]);

  useEffect(() => {
    if (inputValue) {
      setIsInvalidInputValue(false);
    }
  }, [inputValue])

  const onValueSubmit = _ => {
    const result = parseInt(selectedConversion) === conversionOptions[0].value ?
      toRoman(+inputValue) :
      fromRoman(inputValue);

    if (result) {
      setResult(`${inputValue} = ${result}`);
    } else {
      setIsInvalidInputValue(true);
    }
    setInputValue('');
  }

  return (
    <StyledConverterPage>
      <Card>
        <ConvertResultCard text={result} />
        <Select
          options={conversionOptions}
          selectedValue={selectedConversion}
          onSelect={setSelectedConversion}
          caption={<FormattedMessage id='general.select.conversion' />} />
        <Input
          inputValue={inputValue}
          placeholder={inputPlaceholder}
          format={inputType}
          onInputChange={setInputValue}
          caption={<FormattedMessage id='general.input.value' />} />
        {isInvalidInputValue &&
          <WarningMessage message={<FormattedMessage id='general.warning.value.invalid' />} />
        }
        <Button
          disabled={!inputValue}
          caption={<FormattedMessage id='general.button.convert' />}
          handleClick={onValueSubmit} />
      </Card>
    </StyledConverterPage>
  );
}

export default ConverterPage;

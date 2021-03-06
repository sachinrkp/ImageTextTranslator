import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RNTesseractOcr from 'react-native-tesseract-ocr';

export const convertImageToText = (imagePath, lang) => {

  const tessOptions = {
    whitelist: null,
    blacklist: '1234567890\'!"#$%&/()={}[]+*-_:;<>'
  };
  let text = '';
  return RNTesseractOcr.recognize(imagePath, lang, tessOptions)

}

export const tesseractStop = () => {
  return RNTesseractOcr.stop();
}
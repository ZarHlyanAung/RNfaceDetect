import React from 'react';
import {Button} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export interface ImageDetails {
  path: string;
  height: number;
  width: number;
}

interface ChooseImageButtonProps {
  onChoose: (image: ImageDetails) => void;
}

const ChooseImageButton = ({onChoose}: ChooseImageButtonProps) => {
  const handlePress = async () => {
    const imageResult = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });
    if (imageResult.didCancel) {
      return;
    }

    const asset = imageResult.assets![0];
    const currentImage = {
      path: asset.uri,
      width: asset.width,
      height: asset.height,
    };

    onChoose(currentImage);
  };

  return <Button title="Choose an Image" onPress={handlePress} />;
};

export default ChooseImageButton;

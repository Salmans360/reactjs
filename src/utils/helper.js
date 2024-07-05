const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const handleImageUpload = async (e) => {
  const files = e.target.files[0];
  if (!files) return;

  const fileType = files?.type || '';
  const fileSize = files?.size || '';
  let isValid = false;
  let errorMessage = '';
  if (
    fileType === 'image/jpeg' ||
    fileType === 'image/jpg' ||
    fileType === 'image/png'
  ) {
    if (fileSize <= 5000000) {
      // 5MB =  5000000 Bytes
      isValid = true;
    } else {
      errorMessage =
        'The image file exceeds the 5MB limit. Please upload a smaller image.';
    }
  } else {
    errorMessage = "Please Select only Images of type: 'PNG', 'JPG', 'JPEG' '";
  }

  if (isValid) {
    const imageBase64 = await toBase64(files);

    let file = '';

    try {
      file = new File([files], 'image', {
        type: 'image/png',
      });
    } catch (error) {
      console.log('errors::', error);
      errorMessage = error?.message;
      file = files;
    }

    // setFieldVals({ ...fieldVals, profileImg: imageBase64 });
    return { error: false, image: imageBase64 };
  } else {
    return { error: true, errorMessage: errorMessage, image: null };
  }
};

const handleNumbers = (value, limit) => {
  /* after using this function value must be converted into Number before using it/sending to api
       because state can contain a value like (10. -> adecimal point after value) */
  let check = true;
  const arr = value?.toString()?.split('.') || [];
  if (arr.length === 2) {
    if (arr[1] === '' || arr[1] === '0') {
      check = false;
    }
  }
  if (value === '-') {
    value = value;
  } else if (value === '0-') {
    value = '-';
  } else if (check || +value === limit) {
    value = Math.round(value * 100) / 100 || 0;
  }
  return value;
};

export { toBase64, handleNumbers, handleImageUpload };

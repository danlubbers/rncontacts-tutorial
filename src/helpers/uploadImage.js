import storage from '@react-native-firebase/storage';

export default file => onSuccess => onError => {
  console.log('file', file);

  const path = 'contact-pictures/user/777/' + file.creationDate || file.path;

  const ref = storage().ref(path);

  const task = ref.putFile(file.path);
  console.log('UPLOAD IMAGE FILE HIT!!!');

  task
    .then(async () => {
      const url = await ref.getDownloadURL();
      console.log('URL UPLOAD', url);
      onSuccess(url);
    })
    .catch(err => {
      onError(err);
    });
};

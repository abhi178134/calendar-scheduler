import { useState, useEffect } from 'react';
import { storage, db, timestamp } from '../firebase/config';

const getUrl = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);

  useEffect(() => {
    // references
    const storageRef = storage.ref(file.name);
    const collectionRef = db.collection('stuffs');

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const fileUrl = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      // await collectionRef.add({ fileUrl, createdAt });
      setFileUrl(fileUrl);
      setCreatedAt(createdAt);
    });
  }, [file]);

  return { progress, fileUrl, error, createdAt };
}

export default useStorage;

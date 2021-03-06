// NPM package
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";

// Project files
import { cloudStorageReference } from "scripts/firebase/firebase";
import { useCallback } from "react";

export const imagesBucketRef = ref(cloudStorageReference, `gs://images/`);

export const getCloudImage = useCallback(async (filename) => {
  try {
    const imageRef = ref(imagesBucketRef, filename);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  } catch {
    console.log("problem loading pictures");
  }
}, []);

export async function uploadFile(fileName: string, file: any) {
  const fileReference = ref(imagesBucketRef, fileName);
  await uploadBytes(fileReference, file);

  return await getDownloadURL(fileReference);
}

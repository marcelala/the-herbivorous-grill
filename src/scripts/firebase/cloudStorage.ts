// NPM package
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Project files
import { cloudStorageReference } from "scripts/firebase/firebase";

export const imagesBucketRef = ref(cloudStorageReference, `gs://images/`);

export async function getCloudImage(filename: string) {
  const result = { isWorking: false, payload: "" };
  try {
    const imageRef = ref(imagesBucketRef, filename);
    const imageUrl: string = await getDownloadURL(imageRef);
    result.payload = imageUrl;
    result.isWorking = true;
  } catch (error) {
    console.log("problem loading pictures");
    // @ts-ignore
    result.payload = error.code;
  }
  return result;
}

export async function uploadFile(fileName: string, file: any) {
  const fileReference = ref(imagesBucketRef, fileName);
  await uploadBytes(fileReference, file);

  return await getDownloadURL(fileReference);
}

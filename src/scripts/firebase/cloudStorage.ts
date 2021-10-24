// NPM package
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";

// Project files
import { cloudStorageReference } from "scripts/firebase/firebase";
import { useCallback } from "react";

export const imagesBucketRef = ref(cloudStorageReference, `gs://images/`);

// React code (useCallback) should only exist on components that are mounted on the Virtual DOM -1
// In other words, if it does not make sense to be placed into the component Tree as a blue block,
// Then is not a react element.
export async function getCloudImage(filename: string) {
  try {
    const imageRef = ref(imagesBucketRef, filename);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  } catch {
    console.log("problem loading pictures");
  }
}

// This one is well done
export async function uploadFile(fileName: string, file: any) {
  const fileReference = ref(imagesBucketRef, fileName);
  await uploadBytes(fileReference, file);

  return await getDownloadURL(fileReference);
}

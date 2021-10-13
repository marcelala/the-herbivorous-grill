// NPM package
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Project files
import { cloudStorageReference } from "scripts/firebase";

const imagesRef = ref(cloudStorageReference, `/images/`);

export async function uploadFile(filename: string, file: any) {
  const fileReference = ref(cloudStorageReference, filename);
  await uploadBytes(fileReference, file);

  return await getDownloadURL(fileReference);
}

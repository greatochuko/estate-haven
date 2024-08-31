import { createClient } from "./supabase/client";

export async function uploadPropertyImage(file: File) {
  const fileName = file.name.split(".")[0];
  const fileExtension = file.name.split(".")[1];
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from("properties")
    .upload(
      `${fileName}-${crypto.randomUUID().split("-")[0]}.${fileExtension}`,
      file
    );
  if (!data) return { url: null, error };

  const { data: urlData } = supabase.storage
    .from("properties")
    .getPublicUrl(data.path);

  return { url: urlData.publicUrl, error: null };
}

export async function uploadProfileImage(file: File) {
  const fileName = file.name.split(".")[0];
  const fileExtension = file.name.split(".")[1];
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from("profiles")
    .upload(
      `${fileName}-${crypto.randomUUID().split("-")[0]}.${fileExtension}`,
      file
    );
  if (!data) return { url: null, error };

  const { data: urlData } = supabase.storage
    .from("profiles")
    .getPublicUrl(data.path);

  return { url: urlData.publicUrl, error: null };
}

// export async function uploadImage2(file: File) {
//   try {
//     const response = await fetch(
//       "https://www.filestackapi.com/api/store/S3?key=ATmxns9QQ2OhhpR6rmotZz",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "image/png",
//         },
//         body: file,
//       }
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// }

export interface IConfigModel {
  movie_url: string;
  image_url: string;
}
export const ConfigMovie = {
  movie_url: process.env.NEXT_PUBLIC_MOVIES_BASE_URL || "",
  image_url: process.env.NEXT_PUBLIC_IMAGE_URL || "",
};

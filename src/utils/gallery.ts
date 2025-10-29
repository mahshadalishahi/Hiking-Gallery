import { IMAGES } from "@/constants/gallery";
import { ImageItem } from "@/types/gallery";

export function getImageById(id: string): ImageItem | undefined {
  return IMAGES.find((img) => img.id === id);
}

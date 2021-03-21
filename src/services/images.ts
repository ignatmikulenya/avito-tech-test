const imagesServiceSource = "https://boiling-refuge-66454.herokuapp.com/images";

export const imagesService = {
  getImages: () => fetch(imagesServiceSource),
  getPreview: (imageId: number) => fetch(`${imagesServiceSource}/${imageId}`),
  addComment: (imageId: number, comment: string) =>
    fetch(`${imagesServiceSource}/${imageId}/comments`, {
      method: "POST",
      body: comment,
    }),
};

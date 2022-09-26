export type ImageType = {
  data: {
    id: string;
    attributes: {
      alternativeText: string;
      url: string;
    };
  };
};

export type CategoryType = {
  data: {
    id: number;
    attributes: {
      name: string;
      slug: string;
      variant: string;
      image: ImageType;
    };
  };
};

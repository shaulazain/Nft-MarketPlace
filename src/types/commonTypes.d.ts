export type CategoryItem = {
  category: string;
  imgUrl: string;
  link: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
};

export interface TMealItemProps {
  id: string;
  title: string;
  slug: string;
  image: {
    name: string;
    arrayBuffer: () => Promise<ArrayBuffer>;
  };
  instructions: string;
  summary: string;
  creator: string;
  creator_email: string;
}

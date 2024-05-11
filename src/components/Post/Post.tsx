type Props = {
  id: number;
  title: string;
};

export const Post = ({ id, title }: Props) => (
  <li>{`id: ${id}, tytuł: ${title}`}</li>
);

interface Props {
  title: string;
  className?: string;
}

export const Title = ({ title, className }: Props) => {
  return <h1 className={className}>{title}</h1>;
};

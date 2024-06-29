const TwinName = ({ active, className, children }: Props) => {
  return active ? <span className={className}>{children}</span> : null;
};

interface Props {
  active: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default TwinName;

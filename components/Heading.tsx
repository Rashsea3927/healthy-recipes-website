export const HeadingSecond = ({ className = '', text }: { className?: string; text: string }) => {
  return <h2 className={`text-preset-2 ${className}`}>{text}</h2>;
};

type Props = {
  title: string;
};

export default function SectionHeader({ title }: Props) {
  return (
    <h2 className="reveal font-display font-medium text-[40px] sm:text-[60px] md:text-[76px] lg:text-[92px] display-tight text-ink">
      {title}
    </h2>
  );
}

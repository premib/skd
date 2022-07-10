interface SectionProps {
  children: React.ReactNode;
  overrideYPadding?: string | undefined;
}

const Section: React.FC<SectionProps> = ({ children, overrideYPadding = undefined }) => {
  return (
    <section className={`${overrideYPadding !== undefined ? overrideYPadding : "py-12 lg:py-24"}`}>
      <div className="mx-auto max-w-[1040px] px-5">{children}</div>
    </section>
  );
};

export default Section;

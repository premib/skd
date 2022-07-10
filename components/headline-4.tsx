interface Headline4Props {
  children: React.ReactNode;
}

const Headline4: React.FC<Headline4Props> = ({ children }) => {
  return (
    <h4 className="pb-2 text-xl font-extrabold leading-8 tracking-[0.01em] text-white">
      {children}
    </h4>
  );
};

export default Headline4;

import { Dot } from "@phosphor-icons/react/dist/ssr";

const SpanDotSection = () => {
  return (
    <div className="inline-block rounded-lg bg-white/10 p-1">
      <p className="inline-flex flex-wrap justify-center items-center text-center sm:text-lg text-sm font-semibold">
        <span>KESEHATAN</span>
        <span className="mx-1">
          <Dot size={20} />
        </span>
        <span>EKOLOGI</span>
        <span className="mx-1">
          <Dot size={20} />
        </span>
        <span>KEADILAN</span>
        <span className="mx-1">
          <Dot size={20} />
        </span>
        <span>PERLINDUNGAN</span>
      </p>
    </div>
  );
};

export default SpanDotSection;

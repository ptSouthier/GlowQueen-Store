import QuotationMarks from "@/src/components/icons/QuotationMarks";


export default function Testimonies() {
  return (
    <section className="w-[34.0625rem] h-[34.9375rem] top-[19.6875rem] right-[4.125rem] absolute flex flex-col justify-between">
        <div className="testimony self-end">
          <QuotationMarks />
          <p>
            I have a regular schedule to take
            <br/>treatment from GlowQueen, they gave
            <br/>me the best service and treatment ever
            <br/>to maintain the beauty and health of
            <br/>my skin
          </p>
          <span className="text-primary font-bold">
            Sophia Princeton
          </span>
        </div>
        <div className="testimony self-start">
          <QuotationMarks />
          <p>
            For the past few years, I've had a hard
            <br/>time finding the right place for skin
            <br/>care to deal with my complicated skin
            <br/>condition, thank God I found
            <br/>GlowQueen to treat my skin
          </p>
          <span className="text-primary font-bold">
            Tamara Jules
          </span>
        </div>
    </section>
  );
}

import Clock from "@/components/Clock";
import Hello from "@/components/Hello";

export default function Home() {
  return (<>
    {/* <p>Hello World</p>
    <p className="blue">Welcome BTI425</p>
    <hr /> */}

    <Clock /><br />
    <Clock locale="fr-CA" /><br />
    <Clock locale="ko-KO" />

    <Hello text="Hello World!" imgSrc="https://smapse.com/storage/2017/07/converted/825_585_seneca-college-4.jpg" />
    <Hello text="BTI425 at Seneca" imgSrc="https://live.staticflickr.com/5716/21751920744_2fac1ebf48_b.jpg" />
    <Hello />
  </>
  );
}

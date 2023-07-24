import Form from "./Form";
import Stocks from "./Stocks";

const Body = () => {
  return (
    <div class="grid">
      <section class="side">
        <Form />
      </section>
      <article class="main">
        <Stocks />
      </article>
    </div>
  );
};

export default Body;

// External Libraries
import React from "react";

// Components
import TestimonialCard from "../TestimonialCard";

// Stylization
import { Container } from "./styles";

const Testimonials: React.FC = () => {
  return (
    <Container>
      <h2>Testimonials</h2>
      <p>Some quotes from our happy customers</p>

      <div>
        <TestimonialCard
          avatar="/images/avatar-1.png"
          rating={4}
          quote="“I love it! No more air fresheners”"
          author="Luisa"
        />

        <TestimonialCard
          avatar="/images/avatar-2.png"
          rating={5}
          quote="“Recommended for everyone”"
          author="Edoardo"
        />

        <TestimonialCard
          avatar="/images/avatar-3.png"
          rating={4}
          quote="“Looks very natural, the smell is awesome”"
          author="Mart"
        />
      </div>
    </Container>
  );
};

export default Testimonials;

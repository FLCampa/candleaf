// External Libraries
import React from "react";

// Assets
import { Star, EmptyStar } from "../../styles/icons";

// Stylization
import { Container } from "./styles";

interface TestimonialCardProps {
  avatar?: any;
  rating?: number;
  quote?: string;
  author?: string;
  marginRight?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatar,
  rating,
  quote,
  author,
  marginRight,
}) => {
  return (
    <Container marginRight={marginRight}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={avatar} alt="avatar image" />

      <div>
        {Array(rating)
          .fill(0)
          .map((star, i) => (
            <span key={i}>{Star}</span>
          ))}

        {Array(5 - rating)
          .fill(null)
          .map((star, i) => (
            <span key={i}>{EmptyStar}</span>
          ))}
      </div>

      <h3>{quote}</h3>
      <p>{author}</p>
    </Container>
  );
};

export default TestimonialCard;

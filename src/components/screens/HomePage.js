import styled from "styled-components";

import { Card } from "./homepage/Card";

export const HomePage = ({ charactes }) => {
  return (
    <Container>
      <Card key={charactes.id} charactes={charactes} />
    </Container>
  );
};
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
  padding: 10px;
`;

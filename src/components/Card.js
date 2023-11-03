import styled from "styled-components";

function Card1(props) {
  return (
    <Card>
      <img src={props.img} width={250} height={150} />
      <Wrap>
        <Title>{props.title}</Title>
        <Price>{props.price}</Price>
      </Wrap>
      <Desc>{props.desc}</Desc>
    </Card>
  );
}

export default Card1;

const Card = styled.div`
  height: 280px;
  width: 250px;
  margin: 15px auto;
  box-shadow: 1px 2px 3px;
`;
const Title = styled.h3`
  text-transform: capitalize;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 2px;
`;
const Price = styled.p``;

const Wrap = styled.div`
  text-align: center;
`;

const Desc = styled.p`
  text-align: center;
`;

import styled from "styled-components";
const arrNumber = [1, 2, 3, 4, 5, 6];

const NumberSelector = (props) => {
  console.log(props);
  const numberSelectorHandler = (value) => {
    props.setSelectedNumber(value);
    props.setError("");
  };
  return (
    <NumbrSelectorContainer>
      <p className='error'>{props.error}</p>
      <div className='flex'>
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === props.selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumbrSelectorContainer>
  );
};

export default NumberSelector;
const NumbrSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setActive, getActive, setType } from "../redux/reducers/filterReducer";
const option = [
  {
    id: 1,
    title: "Every",
    value: "",
  },
  {
    id: 2,
    title: "Movies",
    value: "movie",
  },
  {
    id: 3,
    title: "Series",
    value: "series",
  },
];
export default function Filter(props) {
  const dispatch = useDispatch();
  const active = useSelector(getActive);

  // FUNCTIONS **********
  const handleClick = (element) => {
    dispatch(setActive(element.id));
    dispatch(setType(element.value));
  };
  return (
    <Container>
      {option.map((element) => {
        return (
          <button
            key={element.id}
            style={{
              backgroundColor: active === element.id && "var(--main-color)",
            }}
            onClick={() => {
              handleClick(element);
            }}
          >
            {element.title}
          </button>
        );
      })}
    </Container>
  );
}
// Styling
const Container = styled.div`
  button {
    cursor: pointer;
    border: none;
    background-color: var(--dark-color);
    color: var(--white-color);
    padding: 4px 10px;
    font-size: 14px;
    font-weight: 600;
  }
  button:nth-child(2) {
    border-left: none;
    border-right: none;
  }
  button:focus {
    background-color: var(--main-color);
  }
`;

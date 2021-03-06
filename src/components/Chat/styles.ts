import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding-bottom: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;

  form {
    background: rgba(0, 0, 0, 0.15);
    padding: 0.25rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 3rem;
    box-sizing: border-box;
    backdrop-filter: blur(10px);

    > button {
      background: #333;
      border: none;
      padding: 0 1rem;
      margin: 0.25rem;
      border-radius: 3px;
      outline: none;
      color: #fff;
    }
  }

  input {
    border: none;
    padding: 0 1rem;
    flex-grow: 1;
    border-radius: 2rem;
    margin: 0.25rem;

    :focus {
      outline: none;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    > li {
      padding: 0.5rem 1rem;

      :nth-child(odd) {
        background: #efefef;
      }
    }
  }
`;

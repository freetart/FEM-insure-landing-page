import styled from 'styled-components';

const Container = styled.div`
  .column-heading {
    color: var(--darkGrayishViolet);
    font-size: var(--xs);
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  .column-list {
    margin-bottom: 2rem;
  }
`;

const LinkColumn = ({ title, children }) => {
  return (
    <Container>
      <h4 className='column-heading'>{title}</h4>
      <ul className='column-list'>{children}</ul>
    </Container>
  );
};

export default LinkColumn;

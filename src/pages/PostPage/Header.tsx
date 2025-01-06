import styled from 'styled-components';
import Button from '../../components/Button';

const Container = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-bottom: 0;
`;

const Header = () => {
  return (
    <Container>
      <Button>Cancel</Button>
      <Button>Post</Button>
    </Container>
  );
};

export default Header;

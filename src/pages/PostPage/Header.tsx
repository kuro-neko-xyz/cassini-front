import styled from 'styled-components';
import Button from '../../components/Button';
import { Link } from 'react-router';

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
      <Link to="/">
        <Button>Cancel</Button>
      </Link>
      <Button>Post</Button>
    </Container>
  );
};

export default Header;

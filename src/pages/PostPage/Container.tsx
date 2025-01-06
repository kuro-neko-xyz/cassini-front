import styled from 'styled-components';

const Container = styled.div`
  @property --angle {
    syntax: '<angle>';
    inherits: false;
    initial-value: 28deg;
  }

  @property --color-1 {
    syntax: '<color>';
    inherits: false;
    initial-value: rgba(2, 0, 36, 1);
  }

  @property --color-2 {
    syntax: '<color>';
    inherits: false;
    initial-value: rgba(121, 9, 101, 1);
  }

  @property --color-3 {
    syntax: '<color>';
    inherits: false;
    initial-value: rgba(255, 216, 0, 1);
  }

  @keyframes example {
    0% {
      --angle: 28deg;
      --color-1: rgba(2, 0, 36, 1);
      --color-2: rgba(121, 9, 101, 1);
      --color-3: rgba(255, 216, 0, 1);
    }
    50% {
      --angle: 135deg;
      --color-1: rgba(130, 0, 255, 1);
      --color-2: rgba(9, 121, 96, 1);
      --color-3: rgba(136, 255, 0, 1);
    }
    100% {
      --angle: 28deg;
      --color-1: rgba(2, 0, 36, 1);
      --color-2: rgba(121, 9, 101, 1);
      --color-3: rgba(255, 216, 0, 1);
    }
  }

  --angle: 28deg;
  --color-1: rgba(2, 0, 36, 1);
  --color-2: rgba(121, 9, 101, 1);
  --color-3: rgba(255, 216, 0, 1);
  animation: example 5s infinite;
  background: linear-gradient(
    var(--angle),
    var(--color-1) 0%,
    var(--color-2) 50%,
    var(--color-3) 100%
  );
  height: 100%;
`;

export default Container;

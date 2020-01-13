// @format

import React, {useState} from 'react';
import useInterval from '@use-it/interval';

const Blink = ({children}) => {
  const [show, setShow] = useState(false);

  useInterval(() => {
    setShow(!show);
  }, 1000);

  return show ? children : null;
};

export default Blink;

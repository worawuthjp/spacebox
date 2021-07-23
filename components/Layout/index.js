import classNames from 'classnames';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import AutoHeight from 'react-auto-height';
import { Navbar } from 'components';
import { LayoutStyle } from './styled';

export default function Layout({ children, className, contentHeight, isHeightChange }) {
  const divRef = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    setBodyHeight(_.get(divRef, 'current.scrollHeight'));
  }, [divRef, bodyHeight, isHeightChange]);

  return (
    <LayoutStyle className={classNames('layout', className)} bodyHeight={!contentHeight ? _.get(divRef, 'current.scrollHeight') : contentHeight}>
      <Navbar bg="white" expand="lg" variant="white" />

      <AutoHeight
        // ref={divRef}
        className={classNames('main', 'mt-5')}
      >
        <div className="main-content-wrapper mt-5 pt-5">{children}</div>
      </AutoHeight>
    </LayoutStyle>
  );
}

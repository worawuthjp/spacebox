import { Layout } from 'components';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Image } from 'react-bootstrap';
import TypeDetailStyle from './styled';

export default function TypeDetailPage() {
  const router = useRouter();
  const [bodyHeight, setBodyHeight] = useState(0);
  const [isHeightChange, setIsHeightChange] = useState(false);
  const { id } = router.query;
  const [isFromRoute, setIsFromRoute] = useState(0);
  const divRef = useRef(null);
  useEffect(() => {
    setBodyHeight(divRef.current.scrollHeight);
    if (id && isFromRoute < 10) {
      setIsHeightChange(true);
      setIsFromRoute(isFromRoute + 1);
    }
  }, [id, isHeightChange, bodyHeight, isFromRoute]);
  return (
    <TypeDetailStyle>
      <Layout isHeightChange={isHeightChange}>
        <div ref={divRef} className="col-md-12">
          <div className="mb-4 row">
            <Col sm={12} md={5}>
              <Image className="col-md-12" src={`../images/3D-27.50/${id}/A1.jpg`} />
            </Col>
            <Col className="p-2 break-word" sm={12} md={7}>
              <h3>XXXXXXXXXXXXX</h3>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </Col>
          </div>

          <div className="mb-4 row">
            <Col className="p-2 break-word" sm={12} md={7}>
              <h3>XXXXXXXXXXXXX</h3>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </Col>
            <Col sm={12} md={5}>
              <Image className="col-md-12 img-fluid" src={`../images/3D-27.50/${id}/B1.jpg`} />
            </Col>
          </div>

          <div className="mb-4 row">
            <Col sm={12} md={5}>
              <Image className="col-md-12" src={`../images/3D-27.50/${id}/B1-1.jpg`} />
            </Col>
            <Col className="p-2 break-word" sm={12} md={7}>
              <h3>XXXXXXXXXXXXX</h3>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </Col>
          </div>

          <div className="mb-4 row">
            <Col className="p-2 break-word" sm={12} md={7}>
              <h3>XXXXXXXXXXXXX</h3>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </Col>
            <Col sm={12} md={5}>
              <Image className="col-md-12" src={`../images/3D-27.50/${id}/C1.jpg`} />
            </Col>
          </div>

          <div className="mb-4 row">
            <Col sm={12} md={5}>
              <Image className="col-md-12" src={`../images/3D-27.50/${id}/C1-1.jpg`} />
            </Col>
            <Col className="break-word" sm={12} md={7}>
              <h3>XXXXXXXXXXXXX</h3>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </Col>
          </div>
        </div>
      </Layout>
    </TypeDetailStyle>
  );
}

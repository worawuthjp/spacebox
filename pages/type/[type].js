import { Layout } from 'components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import TypeStyle from './styled';

export default function TypePage() {
  const router = useRouter();
  const { type } = router.query;

  useEffect(() => {}, [type]);
  return (
    <TypeStyle>
      <Layout>
        <Container>
          <Row className="text-center justify-content-md-center">
            <Link className="mouse-pointer" href="/type-details/1">
              <div className="text-center  mouse-pointer">
                <Col md={12} sm={12}>
                  <Image className="col-md-10 ml-auto mr-auto" style={{ height: '250px', width: 'auto' }} src="../images/Cover_27.5.jpg" />
                </Col>
                แบบที่1
              </div>
            </Link>
          </Row>
        </Container>
      </Layout>
    </TypeStyle>
  );
}

import { Layout, Image } from 'components';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { height } from 'styled-system';
import { ProjectStyle } from './styled';

export default function Project() {
  return (
    <ProjectStyle>
      <Layout>
        <div>
          <Container className="h-100">
            <div className="ml-auto mr-auto">
              <Row>
                <Col xs={12} sm={12} md={3}>
                  <Link className="mouse-pointer" href="/type/3D-27.50">
                    <div className="text-center  mouse-pointer">
                      <Image
                        className="col-md-12 ml-auto mr-auto"
                        style={{ height: '250px', width: 'auto' }}
                        src="../images/Cover_27.5.jpg"
                      />
                      <strong>แบบที่ 1 ขนาด 27.5 ตร.ม.</strong>
                    </div>
                  </Link>
                </Col>

                <Col xs={12} sm={12} md={3}>
                  <Link className="mouse-pointer" href="/type/3D-32.00">
                    <div className="text-center mouse-pointer">
                      <Image
                        className="col-md-12 ml-auto mr-auto"
                        style={{ height: '250px', width: 'auto' }}
                        onClcik={() => {}}
                        src="../images/Cover_32.00.jpg"
                      />
                      <strong>แบบที่ 2 ขนาด 32 ตร.ม.</strong>
                    </div>
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </Layout>
    </ProjectStyle>
  );
}

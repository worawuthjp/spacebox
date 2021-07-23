import classNames from 'classnames';
import { Fragment } from 'react';
import { Image } from 'react-bootstrap';
import { ImageStyle, ImageButtonStyle } from './styled';

export default function MyImage({ src, alt, isCircle, className, onClcik, onMouseOver, ...props }) {
  return (
    <Fragment>
      {onClcik ? (
        <ImageButtonStyle className={classNames('image-wrapper', { is_circle: isCircle })} onClick={onClcik} onMouseOver={onMouseOver}>
          <Image src={src} alt={alt} className={classNames(className)} {...props} />
        </ImageButtonStyle>
      ) : (
        <ImageStyle className={classNames('image-wrapper', { is_circle: isCircle })}>
          <Image src={src} alt={alt} className={classNames(className)} {...props} />
        </ImageStyle>
      )}
    </Fragment>
  );
}

// Image.defaultProps = {
//   width: 20,
//   height: 20,
// }

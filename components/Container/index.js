import classNames from 'classnames'
import { ContainerStyle } from './styled'

export default function Container({
  children,
  fluid,
  fullHeight,
  alignCenter,
  justifyCenter,
  className
}) {
  return (
    <ContainerStyle
      className={classNames(
        'container',
        {'is-fluid': fluid},
        {'is-full-height': fullHeight},
        {'is-align-center': alignCenter},
        {'is-justify-center': justifyCenter},
        className
      )}
    >
      {children}
    </ContainerStyle>
  )
}

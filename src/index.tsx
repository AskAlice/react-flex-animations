import React, { Fragment, Children, isValidElement } from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  children?: React.ReactNode
  component?: React.ElementType | React.Component
  spacerComponent?: React.Component | React.ElementType
}

const shrink = keyframes`
to {
  flex: 0.01;
  flex: 0.00001;
}
`

const Spacer = styled(({ component, className }) => {
  const Component = component?.type || component
  return <Component className={className} />
})`
  height: 100%;
  flex: ${(props) => props.leftover};

  &.hidden {
    flex: ${(props) => props.leftover};
    animation: ${shrink} 500ms ease forwards;
  }

  &.show {
    flex: 0.01;
    flex: 0.00001;
    animation: ${(props) => keyframes`to{ flex: ${props.leftOver};}`} 500ms ease
      forwards;
  }
`

const Spaced = styled(
  ({
    component,
    children,
    ratio,
    spacerComponent,
    hidden,
    className,
    ...rest
  }) => {
    const Component = component?.type || component
    const spacing = (1 - ratio) / 2
    return (
      <Fragment>
        {spacing !== 0 && (
          <Spacer
            className={hidden ? 'hidden' : 'show'}
            component={spacerComponent}
            leftOver={spacing}
          />
        )}
        <Component
          className={`${className}${hidden ? ' hidden' : ' show'}`}
          {...rest}
        >
          {children}
        </Component>
        {spacing !== 0 && (
          <Spacer
            className={hidden ? 'hidden' : 'show'}
            component={spacerComponent}
            leftOver={spacing}
          />
        )}
      </Fragment>
    )
  }
)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  flex: ${(props) => props.ratio};
  height: 100%;

  &.hidden {
    flex: ${(props) => props.ratio};
    animation: ${shrink} 500ms ease forwards;
  }

  &.show {
    flex: 0.00001;
    animation: ${(props) => keyframes`to{ flex: ${props.ratio};}`} 500ms ease
      forwards;
  }
`

const Flex = styled(({ component, children, className }) => {
  const Component = component
  return <Component className={className}>{children}</Component>
})`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

const AnimatedFlexbox = ({
  children,
  component = 'section',
  spacerComponent = 'section',
  ...rest
}: Props) => {
  return (
    <Flex
      children={Children.map(
        children,
        (child) =>
          isValidElement(child) && (
            <Spaced
              component={child}
              ratio={child?.props['data-ratio'] || 1}
              hidden={child?.props['data-hidden'] || false}
              {...child.props}
              spacerComponent={spacerComponent}
            />
          )
      )}
      component={component}
      {...rest}
    />
  )
}
export { AnimatedFlexbox }
export default AnimatedFlexbox

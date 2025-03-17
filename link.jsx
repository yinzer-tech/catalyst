import * as Headless from '@headlessui/react'
import { forwardRef } from 'react'
import { Link as RouterLink } from "react-router";

export const Link = forwardRef(function Link(props, ref) {
  return (
    <Headless.DataInteractive>
      {props.href.includes('http') ? <a {...props} ref={ref} /> : <RouterLink {...props} to={props.href} ref={ref} />}
    </Headless.DataInteractive>
  )
})
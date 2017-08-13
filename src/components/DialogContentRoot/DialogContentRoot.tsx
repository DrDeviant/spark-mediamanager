import * as React from "react"

import * as classNames from "classnames"
import { withStyles } from "material-ui/styles"
import createStyleSheet from "material-ui/styles/createStyleSheet"

export const styles = createStyleSheet("DialogContentRoot", theme => ({
  root: {
    ...theme.typography.subheading as any,
    color: theme.palette.text.secondary,
    margin: 0,
  },
}))

interface IProps {
  classes: {
    root: string
  }
  children: React.ReactNode
  className: string
}

const DialogContentRoot = ({ classes, children, className, ...other }: IProps) =>
  <div className={classNames(classes.root, className)} {...other}>
    {children}
  </div>

export default withStyles(styles)(DialogContentRoot)
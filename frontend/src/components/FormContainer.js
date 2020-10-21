import React from "react"
import Grid from "@material-ui/core/Grid"

const FormContainer = ({ children }) => {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={2}
    >
      {children}
    </Grid>
  )
}

export default FormContainer

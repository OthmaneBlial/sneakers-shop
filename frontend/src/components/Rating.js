import React from "react"
import { default as MdRating } from "@material-ui/lab/Rating"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const Rating = ({ value, text }) => {
  return (
    <Box component='fieldset' mb={1} mt={1} borderColor='transparent'>
      <Typography component='legend'>{text}</Typography>
      <MdRating name='read-only' value={value} readOnly />
    </Box>
  )
}

export default Rating

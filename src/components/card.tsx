import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import img from "../images/mini_view.png"
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme()

interface cardProps {
  isChecked: boolean
  isHover: boolean
  label: string
  onClick?: () => void
}

const CustomCard = ({ isChecked = false, isHover = false, label, ...props }: cardProps) => {
  const [hover, setHover] = React.useState(false)

  React.useEffect(() => {
    if (isChecked) {
      setHover(true)
    } else {
      setHover(false)
    }
  }, [isChecked])

  React.useEffect(() => {
    if (isHover) {
      setHover(true)
    } else {
      setHover(false)
    }
  }, [isHover])

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ maxWidth: 345, border: `2px solid ${hover ? "green" : "white"}` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          isChecked ? setHover(true) : setHover(false)
        }}
      >
        <CardMedia component='img' height='140' image={img} alt='map' />
        <CardActions>
          <FormGroup>
            <FormControlLabel control={<Checkbox {...props} checked={isChecked} />} label={label} />
          </FormGroup>
        </CardActions>
      </Card>
    </ThemeProvider>
  )
}

export default CustomCard

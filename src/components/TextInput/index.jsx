import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
export default function TextInput({
  label,
  loader,
  inputValue,
  handleInput,
  error,
  data,
  multiple,
  readOnly
}) {


  const handler = (e) =>{
      handleInput(e.target.value)
  }


  return (
    <TextField
      // error={error.state && true}
      sx={{
        color: 'success.main',
        '& .MuiOutlinedInput-input': {
          // color: 'red',
          // borderRadius: '20px',
        },
      }}
      select={data && true}
      id={
        data
          ? 'outlined-select-currency'
          : 'outlined-basic' || (multiple && 'outlined-multiline-static')
      }
      multiline={multiple && true}
      rows={multiple}
      value={inputValue}
      label={label}
      variant="outlined"
      onChange={handler}
      InputProps={{ readOnly: (readOnly && true) || (loader && true) }}
      helperText={error && error.state && error.message}
    >
      {data &&
        data.map((option) => (
          <MenuItem onChange={handler} key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  )
}

import TextField from "@mui/material/TextField";

const Search = () => {
	return (
		<div className={'search'}>
			<TextField fullWidth className={'search'} label={'Поиск по сайту'}  style={{borderRadius: '20px'}}/>

		</div>
	)
}

export default Search
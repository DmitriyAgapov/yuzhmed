import React, {useEffect, useState} from 'react';
import { Formik, Field, Form } from 'formik';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const FormPriemOrder = () => {
	const [value, setValue] = React.useState(
		new Date(),
	);

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	const [active, setActive] = useState(false)
	useEffect(() => setActive(true), [active])
	return active ? (
		<div>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form>
					<Box
						component="form"
						sx={{
							'& .MuiTextField-root': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
					>
					<LocalizationProvider dateAdapter={AdapterDateFns}>

						<Stack spacing={4} direction={{ xs: "column",  md: "row" }} alignItems={"center"}>
							<TextField label={'Ваша ФИО'} defaultValue={'Иванов Иван Иванович'} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
							<TextField label={'Номер телефона'} defaultValue={'+7 ___ _____'} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />

							<DateTimePicker
								label="Выберите дату и время "
								value={value}
								type="datetime-local"
								defaultValue="2017-05-24T10:30"
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
							/>
							<button type="submit" className={'button button-primary'}>Отправить</button>
						</Stack>
					</LocalizationProvider>


					</Box>
				</Form>
			</Formik>
		</div>
	) : null
};
export default FormPriemOrder
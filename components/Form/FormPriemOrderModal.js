import React, {useEffect, useState} from 'react';
import { Formik, Field, Form } from 'formik';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const FormPriemOrderModal = () => {
	const [value, setValue] = React.useState(
		new Date(),
	);
	const [select, setSelect] = React.useState(10);

	const handleChangeSelect = (event) => {
		setSelect(event.target.value);
	};
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
							'& .MuiTextField-root': { m: 1, margin: '8px 0', width: '100%'},
						}}
						noValidate
						autoComplete="off"
					>
						<h3>Запись на прием</h3>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
						<Stack spacing={4} direction={'column'} alignItems={"center"}>
							<TextField fullWidth style={{ margin: '8px 0'}} label={'Ваша ФИО'} defaultValue={'Иванов Иван Иванович'} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
							<TextField fullWidth style={{ margin: '8px 0'}} label={'Номер телефона'} defaultValue={'+7 ___ _____'} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
							<FormControl fullWidth style={{ margin: '8px 0'}}>
								<InputLabel id="demo-simple-select-label">Выберите врача</InputLabel>
								<Select
									labelId="select-doctor-label"
									id="select-doctor"
									value={select}
									label="Выберите врача"
									onChange={handleChangeSelect}
								>
									<MenuItem value={10}>Иванов Иван Иванович</MenuItem>
									<MenuItem value={20}>Иванов Иван Иванович</MenuItem>
									<MenuItem value={30}>Иванов Иван Иванович</MenuItem>
								</Select>
							</FormControl>

							<DateTimePicker
								label="Выберите дату и время "
								value={value}
								type="datetime-local"
								defaultValue="2017-05-24T10:30"
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
							/>

							<p style={{margin: '8px 0'}}>
								Нажимая на кнопку Записаться на прием, вы соглашаетесь с политикой конфиденциальности
							</p>
							<button type="submit" className={'button button-primary'}>Отправить</button>
						</Stack>

						</LocalizationProvider>

					</Box>
				</Form>
			</Formik>
		</div>
	) : null
};
export default FormPriemOrderModal
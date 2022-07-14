import React, {useEffect, useState} from 'react';
import { Formik, Field, Form } from 'formik';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import Box from "@mui/material/Box";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


const FormQuestion = () => {
	const [spec, setSpec] = useState('');

	const handleChange = (event) => {
		setSpec(event.target.value);
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
				<Box
					component="form"

					noValidate
					autoComplete="off"
				>
					<LocalizationProvider dateAdapter={AdapterDateFns}>

						<Stack spacing={2} alignItems={"self-start"}>
							<TextField fullWidth label={'email'} defaultValue={'email@email.ru'}  />
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Укажите специализацию</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={spec}
									label="Укажите специализацию"
									onChange={handleChange}
								>
									<MenuItem value={'1'}>Value</MenuItem>
									<MenuItem value={'2'}>Value 2</MenuItem>
									<MenuItem value={3}>Value 3</MenuItem>
								</Select>
							</FormControl>
							<TextField fullWidth  label={'Описание вопроса / проблемы'} placeholder={'Описание вопроса / проблемы'} type={'textarea'} multiline  rows={3}/>
							{/*<TextField label={'Описание вопроса / проблемы'} defaultValue={'Описание вопроса / проблемы'} />*/}
							<button type="submit" className={'button button-primary'}>Отправить</button>
						</Stack>
					</LocalizationProvider>


				</Box>
				{/*<Form>*/}
				{/*	<Field id="email" name="email" type="email" placeholder="Ваш e-mail"/>*/}
				{/*	<Field id="spcialist" name="specialist" placeholder="Укажите специализацию" as="select">*/}
				{/*		<option value="value">Укажите специализацию</option>*/}
				{/*		<option value="value2">Value 2</option>*/}
				{/*		<option value="value3">Value 3</option>*/}
				{/*	</Field>*/}
				{/*	<Field*/}
				{/*		component={'textarea'}*/}
				{/*		id="message"*/}
				{/*		name="message"*/}
				{/*		placeholder="Описание вопроса / проблемы"*/}
				{/*		rows="3"*/}

				{/*	/>*/}
				{/*	<button type="submit" className={'button button-primary'}>Отправить</button>*/}
				{/*</Form>*/}
			</Formik>
		</div>
	) : null
};
export default FormQuestion
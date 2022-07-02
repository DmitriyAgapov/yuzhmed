import React from 'react';
import { Formik, Field, Form } from 'formik';

const FormQuestion = () => {
	return (
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
					<Field id="email" name="email" type="email" placeholder="Ваш e-mail"/>
					<Field id="spcialist" name="specialist" placeholder="Укажите специализацию" as="select">
						<option value="value">Укажите специализацию</option>
						<option value="value2">Value 2</option>
						<option value="value3">Value 3</option>
					</Field>
					<Field
						component={'textarea'}
						id="message"
						name="message"
						placeholder="Описание вопроса / проблемы"
						rows="3"

					/>
					<button type="submit" className={'button button__primary'}>Отправить</button>
				</Form>
			</Formik>
		</div>
	)
};
export default FormQuestion
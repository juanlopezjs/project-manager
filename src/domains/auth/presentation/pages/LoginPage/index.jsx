import { Button, Checkbox, Label, TextInput, Toast } from 'flowbite-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { RiCloseLine } from 'react-icons/ri';
import { getLogin, setResetError } from '../../../application/slices/auth';
import { authFields } from '../../../application/constansts/authFields';
import authSchema from '../../../application/schemas/auth';
import { getSelectorErrorAuth } from '../../../application/selectors/auth';

const LoginPage = () => {
	const dispatch = useDispatch();
	const error = useSelector(getSelectorErrorAuth);
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(authSchema),
	});

	const submitForm = (values) => {
		dispatch(getLogin({ ...values }));
	};

	const handleClosedToast = () => {
		dispatch(setResetError())
	}

	return (
		<div className="w-full flex justify-center items-center h-screen p-4 md:p-6 xl:p-10 bg-slate-50 ">
			<div className="mx-auto w-full md:max-w-lg p-4 md:p-12 sm:p-12 xl:p-17.5 z-50 flex flex-col gap-6 border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800">
				<div className="flex flex-col">
					<img
						className="object-contain w-40"
						src="https://olsoftware.com/wp-content/uploads/2021/04/cropped-Logo-Oficial-OL-Software-230x64.png"
					/>
					<span className="text-xl mt-8 text-gray-900 dark:text-white">Bienvenido al gestor de proyectos!</span>
					<span className="text-md text-gray-500 dark:text-white">Necesitamos tu usuario y contraseña</span>
				</div>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(submitForm)}>
					<div>
						<Controller
							name={authFields.USERNAME}
							control={control}
							render={({ field }) => (
								<TextInput
									{...field}
									type="text"
									className="rounded-none"
									placeholder="Nombre de usuario"
									helperText={<p className="text-sm text-red-500 mt-1">{errors[authFields.USERNAME]?.message}</p>}
								/>
							)}
						/>
					</div>
					<div>
						<Controller
							name={authFields.PASSWORD}
							control={control}
							render={({ field }) => (
								<TextInput
									{...field}
									type="password"
									className="rounded-none"
									placeholder="Aquí va tu contraseña"
									helperText={<p className="text-sm text-red-500 mt-1">{errors[authFields.PASSWORD]?.message}</p>}
								/>
							)}
						/>
					</div>
					<Button type="submit" color="primary" className="p-1">
						Ingresar
					</Button>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Checkbox id="remember" />
							<Label className="text-gray-500 " htmlFor="remember">
								Permanecer Conectado
							</Label>
						</div>
						<a className="text-sm text-gray-500">Recuperar contraseña</a>
					</div>
				</form>
			</div>
			{error && (
				<div className='relative'>
					<Toast className="fixed bottom-10 left-10" c>
						<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
							<RiCloseLine className="h-5 w-5" />
						</div>
						<div className="ml-3 text-sm font-normal">{error}</div>
						<Toast.Toggle onDismiss={handleClosedToast}/>
					</Toast>
				</div>
			)}
		</div>
	);
};

export default LoginPage;
